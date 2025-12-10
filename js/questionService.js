/**
 * AWS CCP Timed Learning Game - Question Service
 * Handles question loading and management
 */

import { CONFIG } from './config.js';

/**
 * @typedef {Object} Question
 * @property {string} id - Question ID
 * @property {string} text - Question text
 * @property {Object.<string, string>} options - Answer options (A-E)
 * @property {string} correct - Correct answer letter(s)
 */

/**
 * Question Service Class
 * Manages question bank loading and caching
 */
export class QuestionService {
    constructor() {
        /** @type {Question[]} */
        this.questionBank = [];
        this.isLoaded = false;
    }

    /**
     * Loads questions from JSON file
     * @param {Object} [storageService] - Optional storage service for caching
     * @returns {Promise<Question[]>} Array of questions
     * @throws {Error} If loading fails
     */
    async loadQuestions(storageService = null) {
        if (this.isLoaded) {
            return this.questionBank;
        }

        // Try loading from cache first (offline mode)
        if (storageService && storageService.isAvailable) {
            const cachedQuestions = storageService.loadQuestionBank();
            if (cachedQuestions && cachedQuestions.length > 0) {
                this.questionBank = cachedQuestions;
                this.isLoaded = true;
                console.log(`✓ Loaded ${this.questionBank.length} questions from cache (offline mode)`);

                // Try to update cache in background
                this.updateCacheInBackground(storageService);

                return this.questionBank;
            }
        }

        // Load from network
        try {
            const response = await fetch(CONFIG.PATHS.QUESTION_BANK);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            this.questionBank = await response.json();
            this.isLoaded = true;

            console.log(`✓ Loaded ${this.questionBank.length} questions from network`);

            // Cache for offline use
            if (storageService && storageService.isAvailable) {
                storageService.saveQuestionBank(this.questionBank);
            }

            return this.questionBank;

        } catch (error) {
            console.error('Failed to load questions from network:', error);

            // If network fails and we have cache, use it
            if (storageService && storageService.isAvailable) {
                const cachedQuestions = storageService.loadQuestionBank();
                if (cachedQuestions && cachedQuestions.length > 0) {
                    this.questionBank = cachedQuestions;
                    this.isLoaded = true;
                    console.log(`✓ Using cached questions (${this.questionBank.length}) - network unavailable`);
                    return this.questionBank;
                }
            }

            throw new Error(CONFIG.MESSAGES.LOAD_ERROR);
        }
    }

    /**
     * Updates cache in background without blocking
     * @param {Object} storageService - Storage service
     */
    async updateCacheInBackground(storageService) {
        try {
            const response = await fetch(CONFIG.PATHS.QUESTION_BANK);
            if (response.ok) {
                const questions = await response.json();
                storageService.saveQuestionBank(questions);
                console.log('✓ Cache updated in background');
            }
        } catch (error) {
            // Silently fail - we're already using cache
            console.log('Background cache update failed (offline mode)');
        }
    }

    /**
     * Gets total number of questions in bank
     * @returns {number} Question count
     */
    getQuestionCount() {
        return this.questionBank.length;
    }

    /**
     * Validates question structure
     * @param {Question} question - Question to validate
     * @returns {boolean} True if valid
     */
    validateQuestion(question) {
        return (
            question &&
            typeof question.id === 'string' &&
            typeof question.text === 'string' &&
            typeof question.options === 'object' &&
            Object.keys(question.options).length >= 2 &&
            typeof question.correct === 'string'
        );
    }

    /**
     * Gets question by ID
     * @param {string} id - Question ID
     * @returns {Question|null} Question or null if not found
     */
    getQuestionById(id) {
        return this.questionBank.find(q => q.id === id) || null;
    }
}

// Singleton instance
export const questionService = new QuestionService();
