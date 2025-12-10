/**
 * AWS CCP Timed Learning Game - Timer Controller
 * Manages countdown timer logic and UI updates
 */

import { CONFIG, DOM_IDS, CSS_CLASSES } from './config.js';
import { formatTime, getElement } from './utils.js';

/**
 * Timer Controller Class
 * Handles timer countdown and visual warnings
 */
export class TimerController {
    constructor(onTimeExpired) {
        this.timerElement = getElement(DOM_IDS.TIMER);
        this.intervalId = null;
        this.onTimeExpired = onTimeExpired;
        this.timeRemaining = CONFIG.SESSION.DURATION_SECONDS;
    }

    /**
     * Starts the countdown timer
     * @param {number} initialTime - Starting time in seconds
     * @param {Function} onTick - Callback for each second
     */
    start(initialTime, onTick) {
        this.timeRemaining = initialTime;
        this.updateDisplay();
        this.clearWarnings();

        this.intervalId = setInterval(() => {
            this.timeRemaining--;
            this.updateDisplay();

            if (onTick) {
                onTick(this.timeRemaining);
            }

            this.checkWarningThresholds();

            if (this.timeRemaining <= 0) {
                this.stop();
                if (this.onTimeExpired) {
                    this.onTimeExpired();
                }
            }
        }, 1000);
    }

    /**
     * Stops the timer
     */
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    /**
     * Updates timer display
     */
    updateDisplay() {
        if (this.timerElement) {
            this.timerElement.textContent = formatTime(this.timeRemaining);
        }
    }

    /**
     * Checks and applies warning states
     */
    checkWarningThresholds() {
        if (!this.timerElement) return;

        if (this.timeRemaining === CONFIG.TIMER.WARNING_THRESHOLD) {
            this.timerElement.classList.add(CSS_CLASSES.WARNING);
        }

        if (this.timeRemaining === CONFIG.TIMER.CRITICAL_THRESHOLD) {
            this.timerElement.classList.remove(CSS_CLASSES.WARNING);
            this.timerElement.classList.add(CSS_CLASSES.CRITICAL);
        }
    }

    /**
     * Clears warning states
     */
    clearWarnings() {
        if (this.timerElement) {
            this.timerElement.classList.remove(CSS_CLASSES.WARNING, CSS_CLASSES.CRITICAL);
        }
    }

    /**
     * Resets timer to initial state
     */
    reset() {
        this.stop();
        this.timeRemaining = CONFIG.SESSION.DURATION_SECONDS;
        this.updateDisplay();
        this.clearWarnings();
    }

    /**
     * Gets remaining time
     * @returns {number} Remaining seconds
     */
    getRemainingTime() {
        return this.timeRemaining;
    }

    /**
     * Checks if timer is running
     * @returns {boolean} True if running
     */
    isRunning() {
        return this.intervalId !== null;
    }
}
