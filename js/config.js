/**
 * AWS CCP Timed Learning Game - Configuration & Constants
 * Centralized configuration for easy maintenance and testing
 */

export const CONFIG = {
    // Session Configuration
    SESSION: {
        TOTAL_QUESTIONS: 69,
        DURATION_MINUTES: 40,
        DURATION_SECONDS: 40 * 60,
    },

    // Timer Warning Thresholds
    TIMER: {
        WARNING_THRESHOLD: 5 * 60,  // 5 minutes
        CRITICAL_THRESHOLD: 1 * 60,  // 1 minute
    },

    // Multi-select Detection Keywords
    MULTI_SELECT_KEYWORDS: [
        'choose two', 'select two', 'choose three', 'select three',
        'choose 2', 'select 2', 'choose 3', 'select 3',
        '(choose two)', '(select two)', '(choose 2)', '(select 2)',
        'pick two', 'pick 2', 'pick three', 'pick 3'
    ],

    // File Paths
    PATHS: {
        QUESTION_BANK: 'questions_bank.json',
    },

    // Storage Configuration
    STORAGE: {
        SESSION_KEY: 'aws_ccp_session',
        QUESTIONS_KEY: 'aws_ccp_questions',
        PREFERENCES_KEY: 'aws_ccp_preferences',
        CACHE_DURATION: 24 * 60 * 60 * 1000, // 24 hours
        VERSION: '1.0.0', // For data migration
    },

    // UI Messages
    MESSAGES: {
        MULTI_SELECT_INSTRUCTION: '📌 Select multiple answers for this question',
        SUBMIT_CONFIRMATION: 'Are you sure you want to submit your session? You cannot change your answers after submission.',
        LOAD_ERROR: 'Error loading questions. Please refresh the page.',
        RESUME_SESSION: 'You have an incomplete session. Would you like to resume it?',
        CLEAR_DATA_CONFIRMATION: 'Are you sure you want to clear all saved data? This cannot be undone.',
    },

    // Status Labels
    STATUS: {
        CORRECT: '✓ Correct',
        INCORRECT: '✗ Incorrect',
        UNANSWERED: '○ Unanswered',
    },
};

/**
 * DOM Element IDs for easy reference and testing
 */
export const DOM_IDS = {
    // Screens
    START_SCREEN: 'start-screen',
    GAME_SCREEN: 'game-screen',
    RESULTS_SCREEN: 'results-screen',

    // Buttons
    START_BTN: 'start-btn',
    PREV_BTN: 'prev-btn',
    NEXT_BTN: 'next-btn',
    SUBMIT_BTN: 'submit-btn',
    SHOW_MARKS_BTN: 'show-marks-btn',
    RESTART_BTN: 'restart-btn',

    // Display Elements
    TIMER: 'timer',
    PROGRESS: 'progress',
    QUESTION_NUMBER: 'question-number',
    QUESTION_ID: 'question-id',
    QUESTION_TEXT: 'question-text',
    OPTIONS_CONTAINER: 'options-container',
    TOTAL_QUESTIONS: 'total-questions',

    // Results Elements
    SCORE_PERCENTAGE: 'score-percentage',
    CORRECT_COUNT: 'correct-count',
    INCORRECT_COUNT: 'incorrect-count',
    UNANSWERED_COUNT: 'unanswered-count',
    REVIEW_CONTAINER: 'review-container',
    DETAILED_REVIEW: 'detailed-review',
};

/**
 * CSS Class Names
 */
export const CSS_CLASSES = {
    ACTIVE: 'active',
    SELECTED: 'selected',
    WARNING: 'warning',
    CRITICAL: 'critical',
    OPTION: 'option',
    OPTION_LETTER: 'option-letter',
    OPTION_TEXT: 'option-text',
    REVIEW_ITEM: 'review-item',
    CORRECT: 'correct',
    INCORRECT: 'incorrect',
    UNANSWERED: 'unanswered',
};
