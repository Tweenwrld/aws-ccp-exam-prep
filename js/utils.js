/**
 * AWS CCP Timed Learning Game - Utility Functions
 * Reusable utility functions for common operations
 */

/**
 * Shuffles an array using Fisher-Yates algorithm
 * @template T
 * @param {T[]} array - Array to shuffle
 * @returns {T[]} Shuffled copy of the array
 */
export function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Selects random items from an array
 * @template T
 * @param {T[]} array - Source array
 * @param {number} count - Number of items to select
 * @returns {T[]} Array of randomly selected items
 */
export function selectRandomItems(array, count) {
    const shuffled = shuffleArray(array);
    return shuffled.slice(0, Math.min(count, array.length));
}

/**
 * Formats time in MM:SS format
 * @param {number} seconds - Time in seconds
 * @returns {string} Formatted time string
 */
export function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Checks if a question requires multiple answers
 * @param {string} questionText - The question text to analyze
 * @param {string[]} keywords - Keywords to search for
 * @returns {boolean} True if multi-select question
 */
export function isMultiSelectQuestion(questionText, keywords) {
    const lowerText = questionText.toLowerCase();
    return keywords.some(keyword => lowerText.includes(keyword));
}

/**
 * Parses correct answer string to array
 * Handles formats like "A and B", "A, B", "D and E and F"
 * @param {string|string[]} correctAnswer - Correct answer(s)
 * @returns {string[]} Array of correct answer letters
 */
export function parseCorrectAnswers(correctAnswer) {
    if (Array.isArray(correctAnswer)) {
        return correctAnswer;
    }

    const str = correctAnswer.toString().toUpperCase();
    const letters = str.match(/[A-E]/g) || [];
    return letters;
}

/**
 * Compares two arrays for equality (order-independent)
 * @param {any[]} arr1 - First array
 * @param {any[]} arr2 - Second array
 * @returns {boolean} True if arrays contain same elements
 */
export function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const sorted1 = [...arr1].sort();
    const sorted2 = [...arr2].sort();
    return JSON.stringify(sorted1) === JSON.stringify(sorted2);
}

/**
 * Safely gets element by ID with error handling
 * @param {string} id - Element ID
 * @returns {HTMLElement|null} The element or null
 */
export function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with ID "${id}" not found`);
    }
    return element;
}

/**
 * Safely gets all elements by selector
 * @param {string} selector - CSS selector
 * @param {HTMLElement} [parent=document] - Parent element to search within
 * @returns {HTMLElement[]} Array of matching elements
 */
export function getElements(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
}

/**
 * Debounces a function call
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Creates a deep clone of an object
 * @template T
 * @param {T} obj - Object to clone
 * @returns {T} Cloned object
 */
export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Calculates percentage with rounding
 * @param {number} value - Numerator
 * @param {number} total - Denominator
 * @returns {number} Percentage (0-100)
 */
export function calculatePercentage(value, total) {
    if (total === 0) return 0;
    return Math.round((value / total) * 100);
}

/**
 * Validates if a value is within a range
 * @param {number} value - Value to check
 * @param {number} min - Minimum value (inclusive)
 * @param {number} max - Maximum value (inclusive)
 * @returns {boolean} True if within range
 */
export function inRange(value, min, max) {
    return value >= min && value <= max;
}

/**
 * Scrolls element into view smoothly
 * @param {HTMLElement} element - Element to scroll to
 */
export function smoothScrollTo(element) {
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
