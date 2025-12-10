/**
 * AWS CCP Timed Learning Game - Session Manager
 * Manages game session state and logic
 */

import { CONFIG } from './config.js';
import { selectRandomItems, isMultiSelectQuestion, parseCorrectAnswers, arraysEqual, calculatePercentage } from './utils.js';

/**
 * @typedef {import('./questionService.js').Question} Question
 */

/**
 * @typedef {Object} SessionState
 * @property {Question[]} questions - Session questions
 * @property {(string|string[]|null)[]} userAnswers - User's answers
 * @property {number} currentIndex - Current question index
 * @property {number} timeRemaining - Remaining time in seconds
 * @property {number} startTime - Session start timestamp
 */

/**
 * @typedef {Object} QuestionResult
 * @property {Question} question - The question
 * @property {string|string[]|null} userAnswer - User's answer
 * @property {string} correctAnswer - Correct answer
 * @property {'correct'|'incorrect'|'unanswered'} status - Result status
 * @property {number} mark - Mark awarded (0 or 1)
 * @property {boolean} isMultiSelect - Whether question is multi-select
 */

/**
 * @typedef {Object} SessionResults
 * @property {number} correct - Number of correct answers
 * @property {number} incorrect - Number of incorrect answers
 * @property {number} unanswered - Number of unanswered questions
 * @property {number} totalScore - Total score
 * @property {number} percentage - Score percentage
 * @property {QuestionResult[]} detailedResults - Detailed results per question
 */

/**
 * Session Manager Class
 * Handles all session-related logic and state
 */
export class SessionManager {
    constructor() {
        this.reset();
    }

    /**
     * Resets session to initial state
     */
    reset() {
        /** @type {SessionState} */
        this.state = {
            questions: [],
            userAnswers: [],
            currentIndex: 0,
            timeRemaining: CONFIG.SESSION.DURATION_SECONDS,
            startTime: null,
        };
    }

    /**
     * Initializes a new session with random questions
     * @param {Question[]} questionBank - Full question bank
     */
    initializeSession(questionBank) {
        this.reset();

        this.state.questions = selectRandomItems(
            questionBank,
            CONFIG.SESSION.TOTAL_QUESTIONS
        );

        this.state.userAnswers = new Array(CONFIG.SESSION.TOTAL_QUESTIONS).fill(null);
        this.state.startTime = Date.now();

        console.log(`✓ Session initialized with ${this.state.questions.length} questions`);
    }

    /**
     * Gets current question
     * @returns {Question|null} Current question or null
     */
    getCurrentQuestion() {
        return this.state.questions[this.state.currentIndex] || null;
    }

    /**
     * Gets current question index
     * @returns {number} Current index
     */
    getCurrentIndex() {
        return this.state.currentIndex;
    }

    /**
     * Checks if current question is multi-select
     * @returns {boolean} True if multi-select
     */
    isCurrentQuestionMultiSelect() {
        const question = this.getCurrentQuestion();
        if (!question) return false;
        return isMultiSelectQuestion(question.text, CONFIG.MULTI_SELECT_KEYWORDS);
    }

    /**
     * Sets answer for current question
     * @param {string|string[]} answer - User's answer
     */
    setCurrentAnswer(answer) {
        this.state.userAnswers[this.state.currentIndex] = answer;
    }

    /**
     * Gets answer for current question
     * @returns {string|string[]|null} User's answer
     */
    getCurrentAnswer() {
        return this.state.userAnswers[this.state.currentIndex];
    }

    /**
     * Navigates to previous question
     * @returns {boolean} True if navigation successful
     */
    goToPrevious() {
        if (this.state.currentIndex > 0) {
            this.state.currentIndex--;
            return true;
        }
        return false;
    }

    /**
     * Navigates to next question
     * @returns {boolean} True if navigation successful
     */
    goToNext() {
        if (this.state.currentIndex < this.state.questions.length - 1) {
            this.state.currentIndex++;
            return true;
        }
        return false;
    }

    /**
     * Checks if on first question
     * @returns {boolean} True if first question
     */
    isFirstQuestion() {
        return this.state.currentIndex === 0;
    }

    /**
     * Checks if on last question
     * @returns {boolean} True if last question
     */
    isLastQuestion() {
        return this.state.currentIndex === this.state.questions.length - 1;
    }

    /**
     * Updates remaining time
     * @param {number} seconds - Remaining seconds
     */
    updateTime(seconds) {
        this.state.timeRemaining = Math.max(0, seconds);
    }

    /**
     * Gets remaining time
     * @returns {number} Remaining seconds
     */
    getRemainingTime() {
        return this.state.timeRemaining;
    }

    /**
     * Checks if time has expired
     * @returns {boolean} True if time expired
     */
    isTimeExpired() {
        return this.state.timeRemaining <= 0;
    }

    /**
     * Calculates session results
     * @returns {SessionResults} Detailed results
     */
    calculateResults() {
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;

        const detailedResults = this.state.questions.map((question, index) => {
            const userAnswer = this.state.userAnswers[index];
            const correctAnswer = question.correct;
            const isMultiSelect = isMultiSelectQuestion(question.text, CONFIG.MULTI_SELECT_KEYWORDS);

            let isCorrect = false;

            if (isMultiSelect) {
                const correctAnswers = parseCorrectAnswers(correctAnswer);
                if (userAnswer && Array.isArray(userAnswer)) {
                    isCorrect = arraysEqual(userAnswer, correctAnswers);
                }
            } else {
                isCorrect = userAnswer === correctAnswer;
            }

            // Determine status
            let status;
            let mark;

            if (userAnswer === null || (Array.isArray(userAnswer) && userAnswer.length === 0)) {
                status = 'unanswered';
                mark = 0;
                unanswered++;
            } else if (isCorrect) {
                status = 'correct';
                mark = 1;
                correct++;
            } else {
                status = 'incorrect';
                mark = 0;
                incorrect++;
            }

            return {
                question,
                userAnswer,
                correctAnswer,
                status,
                mark,
                isMultiSelect,
            };
        });

        const totalScore = correct;
        const percentage = calculatePercentage(correct, this.state.questions.length);

        return {
            correct,
            incorrect,
            unanswered,
            totalScore,
            percentage,
            detailedResults,
        };
    }

    /**
     * Gets session duration in seconds
     * @returns {number} Duration in seconds
     */
    getSessionDuration() {
        if (!this.state.startTime) return 0;
        return Math.floor((Date.now() - this.state.startTime) / 1000);
    }

    /**
     * Gets progress information
     * @returns {{current: number, total: number, percentage: number}} Progress info
     */
    getProgress() {
        const total = this.state.questions.length;
        const current = this.state.currentIndex + 1;
        const percentage = calculatePercentage(current, total);

        return { current, total, percentage };
    }

    /**
     * Gets answered questions count
     * @returns {number} Number of answered questions
     */
    getAnsweredCount() {
        return this.state.userAnswers.filter(answer =>
            answer !== null && (!Array.isArray(answer) || answer.length > 0)
        ).length;
    }

    /**
     * Saves current session to storage
     * @param {Object} storageService - Storage service instance
     * @returns {boolean} True if successful
     */
    saveToStorage(storageService) {
        if (!storageService || !storageService.isAvailable) {
            return false;
        }

        return storageService.saveSession(this.state);
    }

    /**
     * Loads session from storage
     * @param {Object} storageService - Storage service instance
     * @returns {boolean} True if successful
     */
    loadFromStorage(storageService) {
        if (!storageService || !storageService.isAvailable) {
            return false;
        }

        const savedState = storageService.loadSession();
        if (!savedState) {
            return false;
        }

        // Validate loaded state
        if (!this.validateState(savedState)) {
            console.warn('Invalid saved state, ignoring');
            storageService.clearSession();
            return false;
        }

        // Restore state
        this.state = savedState;
        console.log('✓ Session restored from storage');
        return true;
    }

    /**
     * Checks if there's an incomplete session in storage
     * @param {Object} storageService - Storage service instance
     * @returns {boolean} True if incomplete session exists
     */
    hasIncompleteSession(storageService) {
        if (!storageService || !storageService.isAvailable) {
            return false;
        }

        return storageService.hasIncompleteSession();
    }

    /**
     * Validates session state structure
     * @param {Object} state - State to validate
     * @returns {boolean} True if valid
     */
    validateState(state) {
        return (
            state &&
            Array.isArray(state.questions) &&
            Array.isArray(state.userAnswers) &&
            typeof state.currentIndex === 'number' &&
            typeof state.timeRemaining === 'number' &&
            typeof state.startTime === 'number' &&
            state.questions.length === state.userAnswers.length
        );
    }

    /**
     * Gets serializable state (for storage)
     * @returns {Object} Serializable state
     */
    getSerializableState() {
        return {
            questions: this.state.questions,
            userAnswers: this.state.userAnswers,
            currentIndex: this.state.currentIndex,
            timeRemaining: this.state.timeRemaining,
            startTime: this.state.startTime,
        };
    }
}

// Singleton instance
export const sessionManager = new SessionManager();
