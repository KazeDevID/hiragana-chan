// Global variables
let currentCharacterIndex = 0;
let learnedCharacters = new Set();
let currentQuizType = 'hiragana-romaji';
let currentQuizQuestion = null;
let quizStats = {
    correct: 0,
    incorrect: 0
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeHiraganaGrid();
    initializePractice();
    initializeVocabulary();
    initializeQuiz();
    initializeModal();
    updateProgress();
    loadProgress();
});

// Navigation functionality
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.dataset.section;
            
            // Update active nav button
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active section
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetSection).classList.add('active');
        });
    });
}

// Hiragana grid functionality
function initializeHiraganaGrid() {
    const grid = document.getElementById('hiraganaGrid');
    
    hiraganaData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'hiragana-card';
        card.innerHTML = `
            <div class="hiragana-char">${item.char}</div>
            <div class="hiragana-romaji">${item.romaji}</div>
        `;
        
        card.addEventListener('click', () => {
            showCharacterModal(item);
        });
        
        grid.appendChild(card);
    });
}

// Practice functionality
function initializePractice() {
    const prevBtn = document.getElementById('prevChar');
    const nextBtn = document.getElementById('nextChar');
    const markLearnedBtn = document.getElementById('markLearned');
    
    prevBtn.addEventListener('click', () => {
        if (currentCharacterIndex > 0) {
            currentCharacterIndex--;
            updatePracticeDisplay();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentCharacterIndex < hiraganaData.length - 1) {
            currentCharacterIndex++;
            updatePracticeDisplay();
        }
    });
    
    markLearnedBtn.addEventListener('click', () => {
        const currentChar = hiraganaData[currentCharacterIndex];
        learnedCharacters.add(currentChar.char);
        updateHiraganaGrid();
        updateProgress();
        saveProgress();
        
        // Move to next character
        if (currentCharacterIndex < hiraganaData.length - 1) {
            currentCharacterIndex++;
            updatePracticeDisplay();
        }
    });
    
    updatePracticeDisplay();
}

function updatePracticeDisplay() {
    const currentChar = hiraganaData[currentCharacterIndex];
    
    document.getElementById('currentCharacter').textContent = currentChar.char;
    document.getElementById('currentRomaji').textContent = currentChar.romaji;
    document.getElementById('currentMeaning').textContent = currentChar.meaning;
    
    // Update stroke order display
    const strokeSteps = document.getElementById('strokeSteps');
    strokeSteps.innerHTML = '';
    currentChar.strokes.forEach((stroke, index) => {
        const step = document.createElement('div');
        step.className = 'stroke-step';
        step.textContent = stroke;
        strokeSteps.appendChild(step);
    });
}

// Vocabulary functionality
function initializeVocabulary() {
    const vocabularyGrid = document.getElementById('vocabularyGrid');
    
    vocabularyData.forEach(vocab => {
        const card = document.createElement('div');
        card.className = 'vocabulary-card';
        card.innerHTML = `
            <div class="vocab-hiragana">${vocab.hiragana}</div>
            <div class="vocab-romaji">${vocab.romaji}</div>
            <div class="vocab-meaning">${vocab.meaning}</div>
            <div class="vocab-example">${vocab.example}</div>
        `;
        
        vocabularyGrid.appendChild(card);
    });
}

// Quiz functionality
function initializeQuiz() {
    const quizTypeButtons = document.querySelectorAll('[data-quiz]');
    
    quizTypeButtons.forEach(button => {
        button.addEventListener('click', () => {
            quizTypeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentQuizType = button.dataset.quiz;
            generateQuizQuestion();
        });
    });
    
    generateQuizQuestion();
}

function generateQuizQuestion() {
    const quizQuestion = document.getElementById('quizQuestion');
    const quizOptions = document.getElementById('quizOptions');
    const quizResult = document.getElementById('quizResult');
    
    quizResult.innerHTML = '';
    quizOptions.innerHTML = '';
    
    if (currentQuizType === 'hiragana-romaji') {
        // Random hiragana character
        const randomChar = hiraganaData[Math.floor(Math.random() * hiraganaData.length)];
        currentQuizQuestion = randomChar;
        
        quizQuestion.innerHTML = `
            <div class="question-character">${randomChar.char}</div>
            <div class="question-text">Bagaimana cara membaca hiragana ini?</div>
        `;
        
        // Generate options
        const correctAnswer = randomChar.romaji;
        const wrongAnswers = hiraganaData
            .filter(item => item.romaji !== correctAnswer)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(item => item.romaji);
        
        const allOptions = [correctAnswer, ...wrongAnswers].sort(() => 0.5 - Math.random());
        
        allOptions.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.className = 'quiz-option';
            optionButton.textContent = option;
            optionButton.addEventListener('click', () => checkQuizAnswer(option, correctAnswer));
            quizOptions.appendChild(optionButton);
        });
        
    } else if (currentQuizType === 'romaji-hiragana') {
        // Random romaji
        const randomChar = hiraganaData[Math.floor(Math.random() * hiraganaData.length)];
        currentQuizQuestion = randomChar;
        
        quizQuestion.innerHTML = `
            <div class="question-character" style="font-family: inherit;">${randomChar.romaji}</div>
            <div class="question-text">Hiragana mana yang sesuai dengan romaji ini?</div>
        `;
        
        // Generate options
        const correctAnswer = randomChar.char;
        const wrongAnswers = hiraganaData
            .filter(item => item.char !== correctAnswer)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(item => item.char);
        
        const allOptions = [correctAnswer, ...wrongAnswers].sort(() => 0.5 - Math.random());
        
        allOptions.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.className = 'quiz-option';
            optionButton.textContent = option;
            optionButton.style.fontFamily = 'var(--font-japanese)';
            optionButton.addEventListener('click', () => checkQuizAnswer(option, correctAnswer));
            quizOptions.appendChild(optionButton);
        });
        
    } else if (currentQuizType === 'vocabulary') {
        // Random vocabulary
        const randomVocab = vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
        currentQuizQuestion = randomVocab;
        
        quizQuestion.innerHTML = `
            <div class="question-character">${randomVocab.hiragana}</div>
            <div class="question-text">Apa arti dari kata ini?</div>
        `;
        
        // Generate options
        const correctAnswer = randomVocab.meaning;
        const wrongAnswers = vocabularyData
            .filter(item => item.meaning !== correctAnswer)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(item => item.meaning);
        
        const allOptions = [correctAnswer, ...wrongAnswers].sort(() => 0.5 - Math.random());
        
        allOptions.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.className = 'quiz-option';
            optionButton.textContent = option;
            optionButton.addEventListener('click', () => checkQuizAnswer(option, correctAnswer));
            quizOptions.appendChild(optionButton);
        });
    }
}

function checkQuizAnswer(selectedAnswer, correctAnswer) {
    const quizResult = document.getElementById('quizResult');
    const quizOptions = document.querySelectorAll('.quiz-option');
    
    // Disable all options
    quizOptions.forEach(option => {
        option.style.pointerEvents = 'none';
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        } else if (option.textContent === selectedAnswer && selectedAnswer !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });
    
    // Show result
    if (selectedAnswer === correctAnswer) {
        quizResult.innerHTML = '🎉 Benar! Jawaban Anda tepat!';
        quizResult.className = 'quiz-result correct';
        quizStats.correct++;
    } else {
        quizResult.innerHTML = `❌ Salah. Jawaban yang benar adalah: ${correctAnswer}`;
        quizResult.className = 'quiz-result incorrect';
        quizStats.incorrect++;
    }
    
    updateQuizStats();
    
    // Auto generate new question after 2 seconds
    setTimeout(() => {
        generateQuizQuestion();
    }, 2000);
}

function updateQuizStats() {
    document.getElementById('correctCount').textContent = quizStats.correct;
    document.getElementById('incorrectCount').textContent = quizStats.incorrect;
    
    const total = quizStats.correct + quizStats.incorrect;
    const accuracy = total > 0 ? Math.round((quizStats.correct / total) * 100) : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('characterModal');
    const closeBtn = document.getElementById('closeModal');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function showCharacterModal(character) {
    const modal = document.getElementById('characterModal');
    const modalCharacter = document.getElementById('modalCharacter');
    const modalRomaji = document.getElementById('modalRomaji');
    const modalDescription = document.getElementById('modalDescription');
    const modalExamples = document.getElementById('modalExamples');
    
    modalCharacter.textContent = character.char;
    modalRomaji.textContent = character.romaji;
    modalDescription.textContent = character.meaning;
    
    modalExamples.innerHTML = '<h4>Contoh Penggunaan:</h4>';
    character.examples.forEach(example => {
        const exampleDiv = document.createElement('div');
        exampleDiv.textContent = example;
        exampleDiv.style.margin = '0.5rem 0';
        modalExamples.appendChild(exampleDiv);
    });
    
    modal.style.display = 'block';
}

// Progress functionality
function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    const totalCharacters = hiraganaData.length;
    const learnedCount = learnedCharacters.size;
    const progressPercentage = (learnedCount / totalCharacters) * 100;
    
    progressFill.style.width = progressPercentage + '%';
    progressText.textContent = `Progress: ${learnedCount}/${totalCharacters}`;
}

function updateHiraganaGrid() {
    const cards = document.querySelectorAll('.hiragana-card');
    cards.forEach((card, index) => {
        const character = hiraganaData[index];
        if (learnedCharacters.has(character.char)) {
            card.classList.add('learned');
        } else {
            card.classList.remove('learned');
        }
    });
}

// Local storage functionality
function saveProgress() {
    const progress = {
        learnedCharacters: Array.from(learnedCharacters),
        currentCharacterIndex: currentCharacterIndex,
        quizStats: quizStats
    };
    localStorage.setItem('hiraganaProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('hiraganaProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        learnedCharacters = new Set(progress.learnedCharacters || []);
        currentCharacterIndex = progress.currentCharacterIndex || 0;
        quizStats = progress.quizStats || { correct: 0, incorrect: 0 };
        
        updateProgress();
        updateHiraganaGrid();
        updatePracticeDisplay();
        updateQuizStats();
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
    if (document.querySelector('.section.active').id === 'practice') {
        if (event.key === 'ArrowLeft') {
            document.getElementById('prevChar').click();
        } else if (event.key === 'ArrowRight') {
            document.getElementById('nextChar').click();
        } else if (event.key === ' ') {
            event.preventDefault();
            document.getElementById('markLearned').click();
        }
    }
});

// Touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (document.querySelector('.section.active').id === 'practice') {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - next character
            document.getElementById('nextChar').click();
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe right - previous character
            document.getElementById('prevChar').click();
        }
    }
}

// Auto-save progress periodically
setInterval(saveProgress, 30000); // Save every 30 seconds