// AWS CCP Timed Learning Game - Application Logic

// Global State
let questionBank = [];
let sessionQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;
let timeRemaining = 40 * 60; // 40 minutes in seconds
let sessionStartTime = null;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');

const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const showMarksBtn = document.getElementById('show-marks-btn');
const restartBtn = document.getElementById('restart-btn');

const timerDisplay = document.getElementById('timer');
const progressDisplay = document.getElementById('progress');
const questionNumberDisplay = document.getElementById('question-number');
const questionIdDisplay = document.getElementById('question-id');
const questionTextDisplay = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// Initialize Application
async function init() {
    try {
        const response = await fetch('questions_bank.json');
        questionBank = await response.json();

        document.getElementById('total-questions').textContent = questionBank.length;

        console.log(`Loaded ${questionBank.length} questions from question bank`);
    } catch (error) {
        console.error('Error loading questions:', error);
        document.getElementById('total-questions').textContent = 'Error loading';
    }
}

// Start Session
function startSession() {
    // Select 69 random questions
    sessionQuestions = selectRandomQuestions(questionBank, 69);

    // Initialize user answers array
    userAnswers = new Array(69).fill(null);

    // Reset state
    currentQuestionIndex = 0;
    timeRemaining = 40 * 60;
    sessionStartTime = Date.now();

    // Switch to game screen
    switchScreen('game');

    // Start timer
    startTimer();

    // Display first question
    displayQuestion();
}

// Select Random Questions
function selectRandomQuestions(bank, count) {
    const shuffled = [...bank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, bank.length));
}

// Timer Management
function startTimer() {
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        // Warning states
        if (timeRemaining === 5 * 60) {
            timerDisplay.classList.add('warning');
        }

        if (timeRemaining === 1 * 60) {
            timerDisplay.classList.remove('warning');
            timerDisplay.classList.add('critical');
        }

        // Auto-submit when time expires
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitSession();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Display Question
function displayQuestion() {
    const question = sessionQuestions[currentQuestionIndex];

    // Update question header
    questionNumberDisplay.textContent = `Question ${currentQuestionIndex + 1}`;
    questionIdDisplay.textContent = `ID: ${question.id}`;

    // Update question text
    questionTextDisplay.textContent = question.text;

    // Update progress
    progressDisplay.textContent = `${currentQuestionIndex + 1} / 69`;

    // Render options
    renderOptions(question.options, question.text);

    // Update navigation buttons
    updateNavigationButtons();
}

// Check if question requires multiple answers
function isMultiSelectQuestion(questionText) {
    const multiSelectKeywords = [
        'choose two', 'select two', 'choose three', 'select three',
        'choose 2', 'select 2', 'choose 3', 'select 3',
        '(choose two)', '(select two)', '(choose 2)', '(select 2)'
    ];
    const lowerText = questionText.toLowerCase();
    return multiSelectKeywords.some(keyword => lowerText.includes(keyword));
}

function renderOptions(options, questionText) {
    optionsContainer.innerHTML = '';

    const isMultiSelect = isMultiSelectQuestion(questionText);
    const optionLetters = Object.keys(options).sort();

    // Add instruction for multi-select questions
    if (isMultiSelect) {
        const instruction = document.createElement('div');
        instruction.className = 'multi-select-instruction';
        instruction.textContent = '📌 Select multiple answers for this question';
        instruction.style.cssText = 'margin-bottom: 1rem; padding: 0.75rem; background: rgba(26, 115, 232, 0.1); border-left: 3px solid var(--primary-blue); border-radius: 6px; color: var(--primary-blue); font-weight: 600;';
        optionsContainer.appendChild(instruction);
    }

    optionLetters.forEach(letter => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.option = letter;

        // Check if this option was previously selected
        const currentAnswer = userAnswers[currentQuestionIndex];
        if (isMultiSelect) {
            // For multi-select, check if letter is in the array
            if (Array.isArray(currentAnswer) && currentAnswer.includes(letter)) {
                optionDiv.classList.add('selected');
            }
        } else {
            // For single-select, check direct equality
            if (currentAnswer === letter) {
                optionDiv.classList.add('selected');
            }
        }

        optionDiv.innerHTML = `
            <div class="option-letter">${letter}</div>
            <div class="option-text">${options[letter]}</div>
        `;

        optionDiv.addEventListener('click', () => selectOption(letter, isMultiSelect));

        optionsContainer.appendChild(optionDiv);
    });
}

function selectOption(letter, isMultiSelect) {
    if (isMultiSelect) {
        // Multi-select mode: toggle selection
        let currentAnswer = userAnswers[currentQuestionIndex];

        // Initialize as array if not already
        if (!Array.isArray(currentAnswer)) {
            currentAnswer = [];
        }

        // Toggle the selection
        const index = currentAnswer.indexOf(letter);
        if (index > -1) {
            // Already selected, remove it
            currentAnswer.splice(index, 1);
        } else {
            // Not selected, add it
            currentAnswer.push(letter);
        }

        // Sort to keep consistent order
        currentAnswer.sort();

        // Store the updated answer
        userAnswers[currentQuestionIndex] = currentAnswer.length > 0 ? currentAnswer : null;

        // Update UI - toggle the clicked option
        const optionElement = document.querySelector(`[data-option="${letter}"]`);
        optionElement.classList.toggle('selected');

    } else {
        // Single-select mode: only one option can be selected
        userAnswers[currentQuestionIndex] = letter;

        // Update UI - clear all and select only the clicked one
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        document.querySelector(`[data-option="${letter}"]`).classList.add('selected');
    }
}


// Navigation
function updateNavigationButtons() {
    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;

    // Next/Submit button
    if (currentQuestionIndex === 68) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function goToNextQuestion() {
    if (currentQuestionIndex < 68) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Submit Session
function submitSession() {
    // Stop timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Calculate results
    const results = calculateResults();

    // Display results
    displayResults(results);

    // Switch to results screen
    switchScreen('results');
}

function calculateResults() {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    const detailedResults = sessionQuestions.map((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.correct;

        // Determine if this is a multi-select question
        const isMultiSelect = isMultiSelectQuestion(question.text);

        let isCorrect = false;

        if (isMultiSelect) {
            // For multi-select, compare arrays
            // Correct answer might be stored as "A and B" or "A, B" etc.
            // We need to parse it and compare
            const correctAnswers = parseCorrectAnswers(correctAnswer);

            if (userAnswer === null || !Array.isArray(userAnswer)) {
                isCorrect = false;
            } else {
                // Check if arrays match (same elements, order doesn't matter)
                const userSorted = [...userAnswer].sort();
                const correctSorted = [...correctAnswers].sort();
                isCorrect = JSON.stringify(userSorted) === JSON.stringify(correctSorted);
            }
        } else {
            // For single-select, direct comparison
            isCorrect = userAnswer === correctAnswer;
        }

        if (userAnswer === null || (Array.isArray(userAnswer) && userAnswer.length === 0)) {
            unanswered++;
            return {
                question,
                userAnswer: null,
                correctAnswer,
                status: 'unanswered',
                mark: 0,
                isMultiSelect
            };
        } else if (isCorrect) {
            correct++;
            return {
                question,
                userAnswer,
                correctAnswer,
                status: 'correct',
                mark: 1,
                isMultiSelect
            };
        } else {
            incorrect++;
            return {
                question,
                userAnswer,
                correctAnswer,
                status: 'incorrect',
                mark: 0,
                isMultiSelect
            };
        }
    });

    const totalScore = correct;
    const percentage = Math.round((correct / 69) * 100);

    return {
        correct,
        incorrect,
        unanswered,
        totalScore,
        percentage,
        detailedResults
    };
}

// Parse correct answer string to array for multi-select questions
function parseCorrectAnswers(correctAnswer) {
    if (Array.isArray(correctAnswer)) {
        return correctAnswer;
    }

    // Handle formats like "A and B", "A, B", "A and B and C", etc.
    const str = correctAnswer.toString().toUpperCase();
    const letters = str.match(/[A-E]/g) || [];
    return letters;
}


function displayResults(results) {
    // Update score display
    document.getElementById('score-percentage').textContent = `${results.percentage}%`;
    document.getElementById('correct-count').textContent = results.correct;
    document.getElementById('incorrect-count').textContent = results.incorrect;
    document.getElementById('unanswered-count').textContent = results.unanswered;

    // Store results for detailed review
    window.currentResults = results;
}

function showDetailedReview() {
    const reviewContainer = document.getElementById('review-container');
    const detailedReview = document.getElementById('detailed-review');

    reviewContainer.innerHTML = '';

    const results = window.currentResults;

    results.detailedResults.forEach((result, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${result.status}`;

        const statusText = {
            'correct': '✓ Correct',
            'incorrect': '✗ Incorrect',
            'unanswered': '○ Unanswered'
        };

        // Format user answer based on whether it's multi-select
        let userAnswerText;
        if (result.userAnswer === null) {
            userAnswerText = 'Not answered';
        } else if (result.isMultiSelect && Array.isArray(result.userAnswer)) {
            // Format multi-select answers
            const answerParts = result.userAnswer.map(letter =>
                `${letter}. ${result.question.options[letter]}`
            );
            userAnswerText = answerParts.join('<br>');
        } else if (Array.isArray(result.userAnswer)) {
            // Single answer stored as array (shouldn't happen, but handle it)
            const letter = result.userAnswer[0];
            userAnswerText = `${letter}. ${result.question.options[letter]}`;
        } else {
            // Single answer
            userAnswerText = `${result.userAnswer}. ${result.question.options[result.userAnswer]}`;
        }

        // Format correct answer
        let correctAnswerText;
        const correctAnswers = parseCorrectAnswers(result.correctAnswer);
        if (correctAnswers.length > 1) {
            // Multi-select correct answer
            const answerParts = correctAnswers.map(letter =>
                `${letter}. ${result.question.options[letter]}`
            );
            correctAnswerText = answerParts.join('<br>');
        } else {
            // Single correct answer
            const letter = correctAnswers[0] || result.correctAnswer;
            correctAnswerText = `${letter}. ${result.question.options[letter]}`;
        }

        reviewItem.innerHTML = `
            <div class="review-header">
                <span class="review-question-num">Question ${index + 1} (ID: ${result.question.id})</span>
                <span class="review-status ${result.status}">${statusText[result.status]}</span>
            </div>
            <div class="review-question-text">${result.question.text}</div>
            <div class="review-answers">
                <div class="review-answer-item">
                    <span class="review-answer-label">Your Answer:</span>
                    <span class="review-answer-value ${result.status === 'correct' ? 'correct' : result.status === 'incorrect' ? 'incorrect' : ''}">${userAnswerText}</span>
                </div>
                <div class="review-answer-item">
                    <span class="review-answer-label">Correct Answer:</span>
                    <span class="review-answer-value correct">${correctAnswerText}</span>
                </div>
                <div class="review-answer-item">
                    <span class="review-answer-label">Mark:</span>
                    <span class="review-answer-value">${result.mark} / 1</span>
                </div>
            </div>
        `;

        reviewContainer.appendChild(reviewItem);
    });

    detailedReview.style.display = 'block';

    // Scroll to review
    detailedReview.scrollIntoView({ behavior: 'smooth' });
}


// Screen Management
function switchScreen(screenName) {
    startScreen.classList.remove('active');
    gameScreen.classList.remove('active');
    resultsScreen.classList.remove('active');

    switch (screenName) {
        case 'start':
            startScreen.classList.add('active');
            break;
        case 'game':
            gameScreen.classList.add('active');
            break;
        case 'results':
            resultsScreen.classList.add('active');
            break;
    }
}

function restartGame() {
    // Reset timer display
    timerDisplay.classList.remove('warning', 'critical');

    // Hide detailed review
    document.getElementById('detailed-review').style.display = 'none';

    // Switch to start screen
    switchScreen('start');
}

// Event Listeners
startBtn.addEventListener('click', startSession);
prevBtn.addEventListener('click', goToPreviousQuestion);
nextBtn.addEventListener('click', goToNextQuestion);
submitBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to submit your session? You cannot change your answers after submission.')) {
        submitSession();
    }
});
showMarksBtn.addEventListener('click', showDetailedReview);
restartBtn.addEventListener('click', restartGame);

// Initialize on page load
init();
