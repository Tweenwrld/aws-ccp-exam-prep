/**
 * AWS CCP Timed Learning Game - UI Controller
 * Manages all UI rendering and user interactions
 */

import { CONFIG, DOM_IDS, CSS_CLASSES } from './config.js';
import { getElement, getElements, smoothScrollTo, parseCorrectAnswers } from './utils.js';

/**
 * UI Controller Class
 * Handles all DOM manipulation and rendering
 */
export class UIController {
    constructor() {
        this.elements = this.cacheElements();
    }

    /**
     * Caches frequently accessed DOM elements
     * @returns {Object} Cached elements
     */
    cacheElements() {
        return {
            // Screens
            startScreen: getElement(DOM_IDS.START_SCREEN),
            gameScreen: getElement(DOM_IDS.GAME_SCREEN),
            resultsScreen: getElement(DOM_IDS.RESULTS_SCREEN),

            // Display
            timer: getElement(DOM_IDS.TIMER),
            progress: getElement(DOM_IDS.PROGRESS),
            questionNumber: getElement(DOM_IDS.QUESTION_NUMBER),
            questionId: getElement(DOM_IDS.QUESTION_ID),
            questionText: getElement(DOM_IDS.QUESTION_TEXT),
            optionsContainer: getElement(DOM_IDS.OPTIONS_CONTAINER),
            totalQuestions: getElement(DOM_IDS.TOTAL_QUESTIONS),

            // Buttons
            prevBtn: getElement(DOM_IDS.PREV_BTN),
            nextBtn: getElement(DOM_IDS.NEXT_BTN),
            submitBtn: getElement(DOM_IDS.SUBMIT_BTN),

            // Results
            scorePercentage: getElement(DOM_IDS.SCORE_PERCENTAGE),
            correctCount: getElement(DOM_IDS.CORRECT_COUNT),
            incorrectCount: getElement(DOM_IDS.INCORRECT_COUNT),
            unansweredCount: getElement(DOM_IDS.UNANSWERED_COUNT),
            reviewContainer: getElement(DOM_IDS.REVIEW_CONTAINER),
            detailedReview: getElement(DOM_IDS.DETAILED_REVIEW),
        };
    }

    /**
     * Switches between screens
     * @param {'start'|'game'|'results'} screenName - Screen to show
     */
    switchScreen(screenName) {
        const screens = [
            this.elements.startScreen,
            this.elements.gameScreen,
            this.elements.resultsScreen
        ];

        screens.forEach(screen => {
            if (screen) screen.classList.remove(CSS_CLASSES.ACTIVE);
        });

        const screenMap = {
            'start': this.elements.startScreen,
            'game': this.elements.gameScreen,
            'results': this.elements.resultsScreen,
        };

        const targetScreen = screenMap[screenName];
        if (targetScreen) {
            targetScreen.classList.add(CSS_CLASSES.ACTIVE);
        }
    }

    /**
     * Updates total questions display
     * @param {number} count - Total questions
     */
    updateTotalQuestions(count) {
        if (this.elements.totalQuestions) {
            this.elements.totalQuestions.textContent = count;
        }
    }

    /**
     * Renders a question
     * @param {Object} question - Question object
     * @param {number} index - Question index
     * @param {number} total - Total questions
     * @param {boolean} isMultiSelect - Whether multi-select
     * @param {string|string[]|null} currentAnswer - Current user answer
     */
    renderQuestion(question, index, total, isMultiSelect, currentAnswer) {
        // Update header
        if (this.elements.questionNumber) {
            this.elements.questionNumber.textContent = `Question ${index + 1}`;
        }
        if (this.elements.questionId) {
            this.elements.questionId.textContent = `ID: ${question.id}`;
        }

        // Update question text
        if (this.elements.questionText) {
            this.elements.questionText.textContent = question.text;
        }

        // Update progress
        if (this.elements.progress) {
            this.elements.progress.textContent = `${index + 1} / ${total}`;
        }

        // Render options
        this.renderOptions(question.options, isMultiSelect, currentAnswer);
    }

    /**
     * Renders answer options
     * @param {Object.<string, string>} options - Answer options
     * @param {boolean} isMultiSelect - Whether multi-select
     * @param {string|string[]|null} currentAnswer - Current answer
     */
    renderOptions(options, isMultiSelect, currentAnswer) {
        if (!this.elements.optionsContainer) return;

        this.elements.optionsContainer.innerHTML = '';

        // Add multi-select instruction
        if (isMultiSelect) {
            const instruction = this.createMultiSelectInstruction();
            this.elements.optionsContainer.appendChild(instruction);
        }

        // Render options
        const optionLetters = Object.keys(options).sort();
        optionLetters.forEach(letter => {
            const optionElement = this.createOptionElement(
                letter,
                options[letter],
                this.isOptionSelected(letter, currentAnswer, isMultiSelect)
            );
            this.elements.optionsContainer.appendChild(optionElement);
        });
    }

    /**
     * Creates multi-select instruction element
     * @returns {HTMLElement} Instruction element
     */
    createMultiSelectInstruction() {
        const instruction = document.createElement('div');
        instruction.className = 'multi-select-instruction';
        instruction.textContent = CONFIG.MESSAGES.MULTI_SELECT_INSTRUCTION;
        instruction.style.cssText = `
            margin-bottom: 1rem;
            padding: 0.75rem;
            background: rgba(26, 115, 232, 0.1);
            border-left: 3px solid var(--primary-blue);
            border-radius: 6px;
            color: var(--primary-blue);
            font-weight: 600;
        `;
        return instruction;
    }

    /**
     * Creates an option element
     * @param {string} letter - Option letter
     * @param {string} text - Option text
     * @param {boolean} isSelected - Whether selected
     * @returns {HTMLElement} Option element
     */
    createOptionElement(letter, text, isSelected) {
        const optionDiv = document.createElement('div');
        optionDiv.className = CSS_CLASSES.OPTION;
        optionDiv.dataset.option = letter;

        if (isSelected) {
            optionDiv.classList.add(CSS_CLASSES.SELECTED);
        }

        optionDiv.innerHTML = `
            <div class="${CSS_CLASSES.OPTION_LETTER}">${letter}</div>
            <div class="${CSS_CLASSES.OPTION_TEXT}">${text}</div>
        `;

        return optionDiv;
    }

    /**
     * Checks if an option is selected
     * @param {string} letter - Option letter
     * @param {string|string[]|null} currentAnswer - Current answer
     * @param {boolean} isMultiSelect - Whether multi-select
     * @returns {boolean} True if selected
     */
    isOptionSelected(letter, currentAnswer, isMultiSelect) {
        if (isMultiSelect) {
            return Array.isArray(currentAnswer) && currentAnswer.includes(letter);
        }
        return currentAnswer === letter;
    }

    /**
     * Toggles option selection
     * @param {string} letter - Option letter
     */
    toggleOption(letter) {
        const optionElement = this.elements.optionsContainer?.querySelector(
            `[data-option="${letter}"]`
        );
        if (optionElement) {
            optionElement.classList.toggle(CSS_CLASSES.SELECTED);
        }
    }

    /**
     * Clears all option selections
     */
    clearAllSelections() {
        const options = getElements(`.${CSS_CLASSES.OPTION}`, this.elements.optionsContainer);
        options.forEach(opt => opt.classList.remove(CSS_CLASSES.SELECTED));
    }

    /**
     * Selects a single option
     * @param {string} letter - Option letter
     */
    selectSingleOption(letter) {
        this.clearAllSelections();
        this.toggleOption(letter);
    }

    /**
     * Updates navigation buttons
     * @param {boolean} isFirst - Whether first question
     * @param {boolean} isLast - Whether last question
     */
    updateNavigationButtons(isFirst, isLast) {
        if (this.elements.prevBtn) {
            this.elements.prevBtn.disabled = isFirst;
        }

        if (this.elements.nextBtn && this.elements.submitBtn) {
            if (isLast) {
                this.elements.nextBtn.style.display = 'none';
                this.elements.submitBtn.style.display = 'block';
            } else {
                this.elements.nextBtn.style.display = 'block';
                this.elements.submitBtn.style.display = 'none';
            }
        }
    }

    /**
     * Displays session results
     * @param {Object} results - Session results
     */
    displayResults(results) {
        if (this.elements.scorePercentage) {
            this.elements.scorePercentage.textContent = `${results.percentage}%`;
        }
        if (this.elements.correctCount) {
            this.elements.correctCount.textContent = results.correct;
        }
        if (this.elements.incorrectCount) {
            this.elements.incorrectCount.textContent = results.incorrect;
        }
        if (this.elements.unansweredCount) {
            this.elements.unansweredCount.textContent = results.unanswered;
        }
    }

    /**
     * Renders detailed review
     * @param {Array} detailedResults - Detailed results array
     */
    renderDetailedReview(detailedResults) {
        if (!this.elements.reviewContainer) return;

        this.elements.reviewContainer.innerHTML = '';

        detailedResults.forEach((result, index) => {
            const reviewItem = this.createReviewItem(result, index);
            this.elements.reviewContainer.appendChild(reviewItem);
        });

        if (this.elements.detailedReview) {
            this.elements.detailedReview.style.display = 'block';
            smoothScrollTo(this.elements.detailedReview);
        }
    }

    /**
     * Creates a review item element
     * @param {Object} result - Question result
     * @param {number} index - Question index
     * @returns {HTMLElement} Review item element
     */
    createReviewItem(result, index) {
        const reviewItem = document.createElement('div');
        reviewItem.className = `${CSS_CLASSES.REVIEW_ITEM} ${result.status}`;

        const statusLabels = CONFIG.STATUS;
        const userAnswerText = this.formatAnswerForReview(result.userAnswer, result.question.options, result.isMultiSelect);
        const correctAnswerText = this.formatCorrectAnswerForReview(result.correctAnswer, result.question.options);

        reviewItem.innerHTML = `
            <div class="review-header">
                <span class="review-question-num">Question ${index + 1} (ID: ${result.question.id})</span>
                <span class="review-status ${result.status}">${statusLabels[result.status.toUpperCase()]}</span>
            </div>
            <div class="review-question-text">${result.question.text}</div>
            <div class="review-answers">
                <div class="review-answer-item">
                    <span class="review-answer-label">Your Answer:</span>
                    <span class="review-answer-value ${result.status === 'correct' ? CSS_CLASSES.CORRECT : result.status === 'incorrect' ? CSS_CLASSES.INCORRECT : ''}">${userAnswerText}</span>
                </div>
                <div class="review-answer-item">
                    <span class="review-answer-label">Correct Answer:</span>
                    <span class="review-answer-value ${CSS_CLASSES.CORRECT}">${correctAnswerText}</span>
                </div>
                <div class="review-answer-item">
                    <span class="review-answer-label">Mark:</span>
                    <span class="review-answer-value">${result.mark} / 1</span>
                </div>
            </div>
        `;

        return reviewItem;
    }

    /**
     * Formats user answer for review display
     * @param {string|string[]|null} answer - User answer
     * @param {Object} options - Question options
     * @param {boolean} isMultiSelect - Whether multi-select
     * @returns {string} Formatted answer HTML
     */
    formatAnswerForReview(answer, options, isMultiSelect) {
        if (answer === null) {
            return 'Not answered';
        }

        if (isMultiSelect && Array.isArray(answer)) {
            const answerParts = answer.map(letter => `${letter}. ${options[letter]}`);
            return answerParts.join('<br>');
        }

        if (Array.isArray(answer)) {
            const letter = answer[0];
            return `${letter}. ${options[letter]}`;
        }

        return `${answer}. ${options[answer]}`;
    }

    /**
     * Formats correct answer for review display
     * @param {string} correctAnswer - Correct answer
     * @param {Object} options - Question options
     * @returns {string} Formatted answer HTML
     */
    formatCorrectAnswerForReview(correctAnswer, options) {
        const correctAnswers = parseCorrectAnswers(correctAnswer);

        if (correctAnswers.length > 1) {
            const answerParts = correctAnswers.map(letter => `${letter}. ${options[letter]}`);
            return answerParts.join('<br>');
        }

        const letter = correctAnswers[0] || correctAnswer;
        return `${letter}. ${options[letter]}`;
    }

    /**
     * Hides detailed review
     */
    hideDetailedReview() {
        if (this.elements.detailedReview) {
            this.elements.detailedReview.style.display = 'none';
        }
    }
}
