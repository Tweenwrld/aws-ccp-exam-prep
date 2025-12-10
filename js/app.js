/**
 * AWS CCP Timed Learning Game - Main Application
 * Coordinates all modules and handles application flow
 */

import { CONFIG, DOM_IDS } from './config.js';
import { getElement } from './utils.js';
import { questionService } from './questionService.js';
import { sessionManager } from './sessionManager.js';
import { storageService } from './storageService.js';
import { TimerController } from './timerController.js';
import { UIController } from './uiController.js';

/**
 * Main Application Class
 * Orchestrates the entire application
 */
class App {
    constructor() {
        this.ui = new UIController();
        this.timer = new TimerController(() => this.handleTimeExpired());
        this.storage = storageService;
        this.currentResults = null;
        this.autoSaveEnabled = true;

        this.initializeEventListeners();
    }

    /**
     * Initializes the application
     */
    async initialize() {
        try {
            // Load questions with offline support
            const questions = await questionService.loadQuestions(this.storage);
            this.ui.updateTotalQuestions(questionService.getQuestionCount());

            // Check for incomplete session
            if (sessionManager.hasIncompleteSession(this.storage)) {
                this.promptResumeSession();
            }

            console.log('✓ Application initialized successfully');
        } catch (error) {
            console.error('Failed to initialize application:', error);
            alert(CONFIG.MESSAGES.LOAD_ERROR);
        }
    }

    /**
     * Sets up all event listeners
     */
    initializeEventListeners() {
        // Start button
        const startBtn = getElement(DOM_IDS.START_BTN);
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startSession());
        }

        // Navigation buttons
        const prevBtn = getElement(DOM_IDS.PREV_BTN);
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.goToPrevious());
        }

        const nextBtn = getElement(DOM_IDS.NEXT_BTN);
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.goToNext());
        }

        // Submit button
        const submitBtn = getElement(DOM_IDS.SUBMIT_BTN);
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.handleSubmit());
        }

        // Results buttons
        const showMarksBtn = getElement(DOM_IDS.SHOW_MARKS_BTN);
        if (showMarksBtn) {
            showMarksBtn.addEventListener('click', () => this.showDetailedReview());
        }

        const restartBtn = getElement(DOM_IDS.RESTART_BTN);
        if (restartBtn) {
            restartBtn.addEventListener('click', () => this.restartGame());
        }

        // Option selection (delegated event)
        const optionsContainer = getElement(DOM_IDS.OPTIONS_CONTAINER);
        if (optionsContainer) {
            optionsContainer.addEventListener('click', (e) => {
                const optionElement = e.target.closest('.option');
                if (optionElement) {
                    const letter = optionElement.dataset.option;
                    this.handleOptionClick(letter);
                }
            });
        }
    }

    /**
     * Starts a new game session
     * @param {boolean} isResume - Whether resuming a saved session
     */
    startSession(isResume = false) {
        if (isResume) {
            // Load saved session
            const loaded = sessionManager.loadFromStorage(this.storage);
            if (!loaded) {
                console.error('Failed to load saved session');
                this.startSession(false); // Start new session instead
                return;
            }

            // Restore timer
            const timeRemaining = sessionManager.getRemainingTime();
            this.timer.start(
                timeRemaining,
                (time) => {
                    sessionManager.updateTime(time);
                    this.autoSave(); // Auto-save on timer tick
                }
            );
        } else {
            // Initialize new session
            sessionManager.initializeSession(questionService.questionBank);

            // Start timer
            this.timer.start(
                CONFIG.SESSION.DURATION_SECONDS,
                (time) => {
                    sessionManager.updateTime(time);
                    this.autoSave(); // Auto-save on timer tick
                }
            );

            // Save initial state
            this.autoSave();
        }

        // Switch to game screen
        this.ui.switchScreen('game');

        // Display current question
        this.displayCurrentQuestion();
    }

    /**
     * Prompts user to resume incomplete session
     */
    promptResumeSession() {
        const resume = confirm(CONFIG.MESSAGES.RESUME_SESSION);
        if (resume) {
            this.startSession(true);
        } else {
            // Clear old session
            this.storage.clearSession();
        }
    }

    /**
     * Auto-saves session state
     */
    autoSave() {
        if (!this.autoSaveEnabled) return;

        sessionManager.saveToStorage(this.storage);
    }

    /**
     * Displays the current question
     */
    displayCurrentQuestion() {
        const question = sessionManager.getCurrentQuestion();
        if (!question) return;

        const index = sessionManager.getCurrentIndex();
        const isMultiSelect = sessionManager.isCurrentQuestionMultiSelect();
        const currentAnswer = sessionManager.getCurrentAnswer();

        this.ui.renderQuestion(
            question,
            index,
            CONFIG.SESSION.TOTAL_QUESTIONS,
            isMultiSelect,
            currentAnswer
        );

        this.ui.updateNavigationButtons(
            sessionManager.isFirstQuestion(),
            sessionManager.isLastQuestion()
        );
    }

    /**
     * Handles option click
     * @param {string} letter - Option letter
     */
    handleOptionClick(letter) {
        const isMultiSelect = sessionManager.isCurrentQuestionMultiSelect();

        if (isMultiSelect) {
            this.handleMultiSelectOption(letter);
        } else {
            this.handleSingleSelectOption(letter);
        }
    }

    /**
     * Handles single-select option click
     * @param {string} letter - Option letter
     */
    handleSingleSelectOption(letter) {
        sessionManager.setCurrentAnswer(letter);
        this.ui.selectSingleOption(letter);
        this.autoSave(); // Auto-save after answer
    }

    /**
     * Handles multi-select option click
     * @param {string} letter - Option letter
     */
    handleMultiSelectOption(letter) {
        let currentAnswer = sessionManager.getCurrentAnswer();

        // Initialize as array if needed
        if (!Array.isArray(currentAnswer)) {
            currentAnswer = [];
        }

        // Toggle selection
        const index = currentAnswer.indexOf(letter);
        if (index > -1) {
            currentAnswer.splice(index, 1);
        } else {
            currentAnswer.push(letter);
        }

        // Sort and update
        currentAnswer.sort();
        sessionManager.setCurrentAnswer(currentAnswer.length > 0 ? currentAnswer : null);

        // Update UI
        this.ui.toggleOption(letter);
        this.autoSave(); // Auto-save after answer
    }

    /**
     * Navigates to previous question
     */
    goToPrevious() {
        if (sessionManager.goToPrevious()) {
            this.displayCurrentQuestion();
            this.autoSave(); // Auto-save on navigation
        }
    }

    /**
     * Navigates to next question
     */
    goToNext() {
        if (sessionManager.goToNext()) {
            this.displayCurrentQuestion();
            this.autoSave(); // Auto-save on navigation
        }
    }

    /**
     * Handles submit button click
     */
    handleSubmit() {
        if (confirm(CONFIG.MESSAGES.SUBMIT_CONFIRMATION)) {
            this.submitSession();
        }
    }

    /**
     * Handles time expiration
     */
    handleTimeExpired() {
        alert('Time is up! Your session will be submitted automatically.');
        this.submitSession();
    }

    /**
     * Submits the session and shows results
     */
    submitSession() {
        // Stop timer
        this.timer.stop();

        // Calculate results
        this.currentResults = sessionManager.calculateResults();

        // Clear saved session (completed)
        this.storage.clearSession();

        // Display results
        this.ui.displayResults(this.currentResults);
        this.ui.switchScreen('results');

        console.log('✓ Session submitted', this.currentResults);
    }

    /**
     * Shows detailed review of answers
     */
    showDetailedReview() {
        if (this.currentResults) {
            this.ui.renderDetailedReview(this.currentResults.detailedResults);
        }
    }

    /**
     * Restarts the game
     */
    restartGame() {
        // Reset timer
        this.timer.reset();

        // Clear saved session
        this.storage.clearSession();

        // Hide detailed review
        this.ui.hideDetailedReview();

        // Switch to start screen
        this.ui.switchScreen('start');

        // Clear results
        this.currentResults = null;
    }
}

// Initialize and start application
const app = new App();
app.initialize();

// Export for testing
export default app;
