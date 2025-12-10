/**
 * AWS CCP Timed Learning Game - Storage Service
 * Handles all LocalStorage operations for offline mode and persistence
 */

import { CONFIG } from './config.js';

/**
 * Storage Service Class
 * Manages LocalStorage operations with error handling and validation
 */
export class StorageService {
    constructor() {
        this.isAvailable = this.checkStorageAvailability();
    }

    /**
     * Checks if LocalStorage is available
     * @returns {boolean} True if available
     */
    checkStorageAvailability() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            console.warn('LocalStorage not available:', e);
            return false;
        }
    }

    /**
     * Saves session state to LocalStorage
     * @param {Object} sessionState - Session state to save
     * @returns {boolean} True if successful
     */
    saveSession(sessionState) {
        if (!this.isAvailable) return false;

        try {
            const data = {
                version: CONFIG.STORAGE.VERSION,
                timestamp: Date.now(),
                state: sessionState,
            };

            localStorage.setItem(
                CONFIG.STORAGE.SESSION_KEY,
                JSON.stringify(data)
            );

            console.log('✓ Session saved to LocalStorage');
            return true;
        } catch (error) {
            console.error('Failed to save session:', error);
            this.handleStorageError(error);
            return false;
        }
    }

    /**
     * Loads session state from LocalStorage
     * @returns {Object|null} Session state or null
     */
    loadSession() {
        if (!this.isAvailable) return null;

        try {
            const data = localStorage.getItem(CONFIG.STORAGE.SESSION_KEY);
            if (!data) return null;

            const parsed = JSON.parse(data);

            // Validate version
            if (parsed.version !== CONFIG.STORAGE.VERSION) {
                console.warn('Session version mismatch, clearing old session');
                this.clearSession();
                return null;
            }

            // Check if session is too old (> 7 days)
            const age = Date.now() - parsed.timestamp;
            const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
            if (age > maxAge) {
                console.warn('Session too old, clearing');
                this.clearSession();
                return null;
            }

            console.log('✓ Session loaded from LocalStorage');
            return parsed.state;
        } catch (error) {
            console.error('Failed to load session:', error);
            return null;
        }
    }

    /**
     * Clears saved session
     * @returns {boolean} True if successful
     */
    clearSession() {
        if (!this.isAvailable) return false;

        try {
            localStorage.removeItem(CONFIG.STORAGE.SESSION_KEY);
            console.log('✓ Session cleared');
            return true;
        } catch (error) {
            console.error('Failed to clear session:', error);
            return false;
        }
    }

    /**
     * Checks if there's an incomplete session
     * @returns {boolean} True if incomplete session exists
     */
    hasIncompleteSession() {
        const session = this.loadSession();
        return session !== null;
    }

    /**
     * Saves question bank to LocalStorage for offline mode
     * @param {Array} questions - Question bank
     * @returns {boolean} True if successful
     */
    saveQuestionBank(questions) {
        if (!this.isAvailable) return false;

        try {
            const data = {
                version: CONFIG.STORAGE.VERSION,
                timestamp: Date.now(),
                questions: questions,
            };

            localStorage.setItem(
                CONFIG.STORAGE.QUESTIONS_KEY,
                JSON.stringify(data)
            );

            console.log(`✓ Cached ${questions.length} questions for offline mode`);
            return true;
        } catch (error) {
            console.error('Failed to cache questions:', error);
            this.handleStorageError(error);
            return false;
        }
    }

    /**
     * Loads question bank from LocalStorage
     * @returns {Array|null} Questions or null
     */
    loadQuestionBank() {
        if (!this.isAvailable) return null;

        try {
            const data = localStorage.getItem(CONFIG.STORAGE.QUESTIONS_KEY);
            if (!data) return null;

            const parsed = JSON.parse(data);

            // Validate version
            if (parsed.version !== CONFIG.STORAGE.VERSION) {
                console.warn('Question cache version mismatch');
                this.clearQuestionBank();
                return null;
            }

            // Check cache age
            const age = Date.now() - parsed.timestamp;
            if (age > CONFIG.STORAGE.CACHE_DURATION) {
                console.warn('Question cache expired');
                this.clearQuestionBank();
                return null;
            }

            console.log(`✓ Loaded ${parsed.questions.length} questions from cache`);
            return parsed.questions;
        } catch (error) {
            console.error('Failed to load question cache:', error);
            return null;
        }
    }

    /**
     * Clears question bank cache
     * @returns {boolean} True if successful
     */
    clearQuestionBank() {
        if (!this.isAvailable) return false;

        try {
            localStorage.removeItem(CONFIG.STORAGE.QUESTIONS_KEY);
            console.log('✓ Question cache cleared');
            return true;
        } catch (error) {
            console.error('Failed to clear question cache:', error);
            return false;
        }
    }

    /**
     * Checks if question cache is valid
     * @returns {boolean} True if valid cache exists
     */
    isCacheValid() {
        const questions = this.loadQuestionBank();
        return questions !== null && questions.length > 0;
    }

    /**
     * Saves user preferences
     * @param {Object} preferences - User preferences
     * @returns {boolean} True if successful
     */
    savePreferences(preferences) {
        if (!this.isAvailable) return false;

        try {
            const data = {
                version: CONFIG.STORAGE.VERSION,
                preferences: preferences,
            };

            localStorage.setItem(
                CONFIG.STORAGE.PREFERENCES_KEY,
                JSON.stringify(data)
            );

            console.log('✓ Preferences saved');
            return true;
        } catch (error) {
            console.error('Failed to save preferences:', error);
            return false;
        }
    }

    /**
     * Loads user preferences
     * @returns {Object|null} Preferences or null
     */
    loadPreferences() {
        if (!this.isAvailable) return null;

        try {
            const data = localStorage.getItem(CONFIG.STORAGE.PREFERENCES_KEY);
            if (!data) return null;

            const parsed = JSON.parse(data);

            // Validate version
            if (parsed.version !== CONFIG.STORAGE.VERSION) {
                return null;
            }

            return parsed.preferences;
        } catch (error) {
            console.error('Failed to load preferences:', error);
            return null;
        }
    }

    /**
     * Gets storage usage information
     * @returns {Object} Storage info
     */
    getStorageInfo() {
        if (!this.isAvailable) {
            return {
                available: false,
                used: 0,
                total: 0,
                percentage: 0,
            };
        }

        try {
            let used = 0;
            for (let key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    used += localStorage[key].length + key.length;
                }
            }

            // Estimate total (usually 5-10MB, we'll use 5MB as conservative)
            const total = 5 * 1024 * 1024; // 5MB in bytes
            const percentage = Math.round((used / total) * 100);

            return {
                available: true,
                used: used,
                total: total,
                percentage: percentage,
                usedMB: (used / (1024 * 1024)).toFixed(2),
                totalMB: (total / (1024 * 1024)).toFixed(2),
            };
        } catch (error) {
            console.error('Failed to get storage info:', error);
            return {
                available: true,
                used: 0,
                total: 0,
                percentage: 0,
            };
        }
    }

    /**
     * Clears all stored data
     * @returns {boolean} True if successful
     */
    clearAll() {
        if (!this.isAvailable) return false;

        try {
            localStorage.removeItem(CONFIG.STORAGE.SESSION_KEY);
            localStorage.removeItem(CONFIG.STORAGE.QUESTIONS_KEY);
            localStorage.removeItem(CONFIG.STORAGE.PREFERENCES_KEY);
            console.log('✓ All data cleared');
            return true;
        } catch (error) {
            console.error('Failed to clear all data:', error);
            return false;
        }
    }

    /**
     * Handles storage errors (quota exceeded, etc.)
     * @param {Error} error - Error object
     */
    handleStorageError(error) {
        if (error.name === 'QuotaExceededError') {
            console.warn('Storage quota exceeded, clearing old data...');
            // Clear question cache first (largest data)
            this.clearQuestionBank();

            // If still failing, clear old session
            this.clearSession();
        }
    }

    /**
     * Exports all data as JSON (for backup)
     * @returns {string|null} JSON string or null
     */
    exportData() {
        if (!this.isAvailable) return null;

        try {
            const data = {
                version: CONFIG.STORAGE.VERSION,
                exportDate: new Date().toISOString(),
                session: this.loadSession(),
                preferences: this.loadPreferences(),
            };

            return JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Failed to export data:', error);
            return null;
        }
    }

    /**
     * Imports data from JSON (for restore)
     * @param {string} jsonString - JSON data
     * @returns {boolean} True if successful
     */
    importData(jsonString) {
        if (!this.isAvailable) return false;

        try {
            const data = JSON.parse(jsonString);

            // Validate version
            if (data.version !== CONFIG.STORAGE.VERSION) {
                console.error('Import version mismatch');
                return false;
            }

            // Import session if exists
            if (data.session) {
                this.saveSession(data.session);
            }

            // Import preferences if exists
            if (data.preferences) {
                this.savePreferences(data.preferences);
            }

            console.log('✓ Data imported successfully');
            return true;
        } catch (error) {
            console.error('Failed to import data:', error);
            return false;
        }
    }
}

// Singleton instance
export const storageService = new StorageService();
