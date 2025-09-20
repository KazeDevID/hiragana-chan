// Global variables
let currentCharacterIndex = 0;
let currentPracticeType = 'basic';
let currentPracticeData = hiraganaData;
let learnedCharacters = new Set();
let currentQuizType = 'hiragana-romaji';
let currentQuizQuestion = null;
let quizStats = {
    correct: 0,
    incorrect: 0
};

// Game variables
let memoryGameActive = false;
let memoryCards = [];
let memoryFlippedCards = [];
let memoryMoves = 0;
let memoryStartTime = 0;

let typingGameActive = false;
let typingScore = 0;
let typingStartTime = 0;
let typingCurrentChar = null;
let typingTimeLeft = 60;
let typingCorrectAnswers = 0;

let drawingGameActive = false;
let drawingCurrentIndex = 0;
let drawingCanvas = null;
let drawingContext = null;
let isDrawing = false;

let fallingGameActive = false;
let fallingObjects = [];
let fallingScore = 0;
let fallingLevel = 1;
let fallingLives = 3;
let fallingCanvas = null;
let fallingContext = null;
let fallingAnimationId = null;

let puzzleGameActive = false;
let puzzlePieces = [];
let puzzleCurrentChar = null;

let rhythmGameActive = false;
let rhythmNotes = [];
let rhythmScore = 0;
let rhythmCombo = 0;
let rhythmStartTime = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeHiraganaGrid();
    initializeDakutenGrid();
    initializeHandakutenGrid();
    initializeCombinationsGrid();
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

// Dakuten grid functionality
function initializeDakutenGrid() {
    const grid = document.getElementById('dakutenGrid');
    
    dakutenData.forEach((item, index) => {
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

// Handakuten grid functionality
function initializeHandakutenGrid() {
    const grid = document.getElementById('handakutenGrid');
    
    handakutenData.forEach((item, index) => {
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

// Combinations grid functionality
function initializeCombinationsGrid() {
    const basicGrid = document.getElementById('basicCombinationsGrid');
    const dakutenGrid = document.getElementById('dakutenCombinationsGrid');
    const handakutenGrid = document.getElementById('handakutenCombinationsGrid');
    
    // Basic combinations (kya, kyu, kyo, sha, shu, sho, etc.)
    const basicCombinations = combinationData.filter(item => 
        !item.meaning.includes('dakuten') && !item.meaning.includes('handakuten')
    );
    
    // Dakuten combinations (gya, gyu, gyo, ja, ju, jo, etc.)
    const dakutenCombinations = combinationData.filter(item => 
        item.meaning.includes('dakuten')
    );
    
    // Handakuten combinations (pya, pyu, pyo)
    const handakutenCombinations = combinationData.filter(item => 
        item.meaning.includes('handakuten')
    );
    
    [basicCombinations, dakutenCombinations, handakutenCombinations].forEach((data, gridIndex) => {
        const grid = [basicGrid, dakutenGrid, handakutenGrid][gridIndex];
        
        data.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'hiragana-card combination-card';
            card.innerHTML = `
                <div class="hiragana-char">${item.char}</div>
                <div class="hiragana-romaji">${item.romaji}</div>
            `;
            
            card.addEventListener('click', () => {
                showCharacterModal(item);
            });
            
            grid.appendChild(card);
        });
    });
}

// Practice functionality
function initializePractice() {
    const practiceTypeButtons = document.querySelectorAll('[data-practice]');
    const prevBtn = document.getElementById('prevChar');
    const nextBtn = document.getElementById('nextChar');
    const markLearnedBtn = document.getElementById('markLearned');
    
    // Practice type selector
    practiceTypeButtons.forEach(button => {
        button.addEventListener('click', () => {
            practiceTypeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentPracticeType = button.dataset.practice;
            updatePracticeData();
            currentCharacterIndex = 0;
            updatePracticeDisplay();
        });
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentCharacterIndex > 0) {
            currentCharacterIndex--;
            updatePracticeDisplay();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentCharacterIndex < currentPracticeData.length - 1) {
            currentCharacterIndex++;
            updatePracticeDisplay();
        }
    });
    
    markLearnedBtn.addEventListener('click', () => {
        const currentChar = currentPracticeData[currentCharacterIndex];
        learnedCharacters.add(currentChar.char);
        updateHiraganaGrid();
        updateDakutenGrid();
        updateHandakutenGrid();
        updateCombinationsGrid();
        updateProgress();
        saveProgress();
        
        // Move to next character
        if (currentCharacterIndex < currentPracticeData.length - 1) {
            currentCharacterIndex++;
            updatePracticeDisplay();
        }
    });
    
    updatePracticeData();
    updatePracticeDisplay();
}

function updatePracticeData() {
    switch (currentPracticeType) {
        case 'basic':
            currentPracticeData = hiraganaData;
            break;
        case 'dakuten':
            currentPracticeData = dakutenData;
            break;
        case 'handakuten':
            currentPracticeData = handakutenData;
            break;
        case 'combinations':
            currentPracticeData = combinationData;
            break;
        case 'all':
            currentPracticeData = allHiraganaData;
            break;
        default:
            currentPracticeData = hiraganaData;
    }
}

function updatePracticeDisplay() {
    const currentChar = currentPracticeData[currentCharacterIndex];
    
    document.getElementById('currentCharacter').textContent = currentChar.char;
    document.getElementById('currentRomaji').textContent = currentChar.romaji;
    document.getElementById('currentMeaning').textContent = currentChar.meaning;
    
    // Update practice info
    document.getElementById('practiceProgress').textContent = 
        `${currentCharacterIndex + 1} / ${currentPracticeData.length}`;
    
    const typeNames = {
        'basic': 'Hiragana Dasar',
        'dakuten': 'Dakuten (゛)',
        'handakuten': 'Handakuten (゜)',
        'combinations': 'Kombinasi',
        'all': 'Semua Karakter'
    };
    document.getElementById('practiceType').textContent = typeNames[currentPracticeType];
    
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
    
    // Typing quiz setup
    const submitTypingBtn = document.getElementById('submitTyping');
    const typingAnswerInput = document.getElementById('typingAnswer');
    
    submitTypingBtn.addEventListener('click', () => {
        checkTypingAnswer();
    });
    
    typingAnswerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkTypingAnswer();
        }
    });
    
    generateQuizQuestion();
}

function generateQuizQuestion() {
    const quizQuestion = document.getElementById('quizQuestion');
    const quizOptions = document.getElementById('quizOptions');
    const quizTyping = document.getElementById('quizTyping');
    const quizResult = document.getElementById('quizResult');
    
    quizResult.innerHTML = '';
    quizOptions.innerHTML = '';
    quizTyping.style.display = 'none';
    quizOptions.style.display = 'grid';
    
    let quizData = hiraganaData;
    
    // Determine quiz data based on type
    if (currentQuizType === 'typing') {
        // Show typing interface instead of options
        quizOptions.style.display = 'none';
        quizTyping.style.display = 'flex';
        
        // Use all hiragana data for typing quiz
        quizData = allHiraganaData;
        const randomChar = quizData[Math.floor(Math.random() * quizData.length)];
        currentQuizQuestion = randomChar;
        
        quizQuestion.innerHTML = `
            <div class="question-character">${randomChar.char}</div>
            <div class="question-text">Ketik romaji dari hiragana ini:</div>
        `;
        
        // Clear and focus input
        document.getElementById('typingAnswer').value = '';
        document.getElementById('typingAnswer').focus();
        
        return;
    } else if (currentQuizType === 'dakuten') {
        quizData = dakutenData;
    } else if (currentQuizType === 'combinations') {
        quizData = combinationData;
    } else if (currentQuizType === 'vocabulary') {
        // Keep existing vocabulary logic
    } else {
        quizData = allHiraganaData; // Use all data for general quizzes
    }
    
    if (currentQuizType === 'hiragana-romaji' || currentQuizType === 'dakuten' || currentQuizType === 'combinations') {
        // Random hiragana character
        const randomChar = quizData[Math.floor(Math.random() * quizData.length)];
        currentQuizQuestion = randomChar;
        
        quizQuestion.innerHTML = `
            <div class="question-character">${randomChar.char}</div>
            <div class="question-text">Bagaimana cara membaca hiragana ini?</div>
        `;
        
        // Generate options
        const correctAnswer = randomChar.romaji;
        const wrongAnswers = quizData
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
        const randomChar = allHiraganaData[Math.floor(Math.random() * allHiraganaData.length)];
        currentQuizQuestion = randomChar;
        
        quizQuestion.innerHTML = `
            <div class="question-character" style="font-family: inherit;">${randomChar.romaji}</div>
            <div class="question-text">Hiragana mana yang sesuai dengan romaji ini?</div>
        `;
        
        // Generate options
        const correctAnswer = randomChar.char;
        const wrongAnswers = allHiraganaData
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

function checkTypingAnswer() {
    const typingAnswer = document.getElementById('typingAnswer').value.toLowerCase().trim();
    const quizResult = document.getElementById('quizResult');
    
    if (!currentQuizQuestion) return;
    
    const correctAnswer = currentQuizQuestion.romaji.toLowerCase();
    
    if (typingAnswer === correctAnswer) {
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
    
    const totalCharacters = allHiraganaData.length;
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

function updateDakutenGrid() {
    const cards = document.querySelectorAll('#dakutenGrid .hiragana-card');
    cards.forEach((card, index) => {
        const character = dakutenData[index];
        if (learnedCharacters.has(character.char)) {
            card.classList.add('learned');
        } else {
            card.classList.remove('learned');
        }
    });
}

function updateHandakutenGrid() {
    const cards = document.querySelectorAll('#handakutenGrid .hiragana-card');
    cards.forEach((card, index) => {
        const character = handakutenData[index];
        if (learnedCharacters.has(character.char)) {
            card.classList.add('learned');
        } else {
            card.classList.remove('learned');
        }
    });
}

function updateCombinationsGrid() {
    const allCombinationCards = document.querySelectorAll('.combination-card');
    allCombinationCards.forEach((card, index) => {
        const charText = card.querySelector('.hiragana-char').textContent;
        if (learnedCharacters.has(charText)) {
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
        currentPracticeType: currentPracticeType,
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
        currentPracticeType = progress.currentPracticeType || 'basic';
        quizStats = progress.quizStats || { correct: 0, incorrect: 0 };
        
        // Update practice type selector
        const practiceButtons = document.querySelectorAll('[data-practice]');
        practiceButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.practice === currentPracticeType);
        });
        
        updatePracticeData();
        updateProgress();
        updateHiraganaGrid();
        updateDakutenGrid();
        updateHandakutenGrid();
        updateCombinationsGrid();
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

// Mini Games Implementation

// Memory Match Game
function startMemoryGame() {
    memoryGameActive = true;
    memoryMoves = 0;
    memoryStartTime = Date.now();
    memoryFlippedCards = [];
    
    const gameArea = document.getElementById('memoryGrid');
    const stats = document.getElementById('memoryStats');
    const startBtn = document.querySelector('#memoryGame .btn');
    
    startBtn.style.display = 'none';
    gameArea.style.display = 'grid';
    stats.style.display = 'flex';
    
    // Create memory cards (8 pairs)
    const selectedChars = hiraganaData.slice(0, 8);
    memoryCards = [];
    
    selectedChars.forEach(char => {
        memoryCards.push({ type: 'hiragana', value: char.char, match: char.romaji });
        memoryCards.push({ type: 'romaji', value: char.romaji, match: char.char });
    });
    
    // Shuffle cards
    memoryCards = memoryCards.sort(() => Math.random() - 0.5);
    
    // Create card elements
    gameArea.innerHTML = '';
    gameArea.className = 'memory-grid';
    
    memoryCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.dataset.index = index;
        cardElement.innerHTML = `
            <div class="memory-card-inner">
                <div class="memory-card-front">?</div>
                <div class="memory-card-back">${card.value}</div>
            </div>
        `;
        
        cardElement.addEventListener('click', () => flipMemoryCard(index));
        gameArea.appendChild(cardElement);
    });
    
    updateMemoryStats();
}

function flipMemoryCard(index) {
    if (memoryFlippedCards.length >= 2) return;
    if (memoryFlippedCards.includes(index)) return;
    
    const cardElement = document.querySelector(`[data-index="${index}"]`);
    cardElement.classList.add('flipped');
    memoryFlippedCards.push(index);
    
    if (memoryFlippedCards.length === 2) {
        memoryMoves++;
        updateMemoryStats();
        
        setTimeout(() => {
            checkMemoryMatch();
        }, 1000);
    }
}

function checkMemoryMatch() {
    const [first, second] = memoryFlippedCards;
    const firstCard = memoryCards[first];
    const secondCard = memoryCards[second];
    
    if (firstCard.match === secondCard.value || secondCard.match === firstCard.value) {
        // Match found
        document.querySelector(`[data-index="${first}"]`).classList.add('matched');
        document.querySelector(`[data-index="${second}"]`).classList.add('matched');
        
        // Check if game is complete
        if (document.querySelectorAll('.memory-card.matched').length === memoryCards.length) {
            endMemoryGame();
        }
    } else {
        // No match
        document.querySelector(`[data-index="${first}"]`).classList.remove('flipped');
        document.querySelector(`[data-index="${second}"]`).classList.remove('flipped');
    }
    
    memoryFlippedCards = [];
}

function updateMemoryStats() {
    const timeElapsed = Math.floor((Date.now() - memoryStartTime) / 1000);
    document.getElementById('memoryTime').textContent = timeElapsed;
    document.getElementById('memoryMoves').textContent = memoryMoves;
}

function endMemoryGame() {
    memoryGameActive = false;
    const timeElapsed = Math.floor((Date.now() - memoryStartTime) / 1000);
    alert(`Selamat! Anda menyelesaikan game dalam ${memoryMoves} gerakan dan ${timeElapsed} detik!`);
    
    // Reset game
    document.getElementById('memoryGrid').style.display = 'none';
    document.getElementById('memoryStats').style.display = 'none';
    document.querySelector('#memoryGame .btn').style.display = 'block';
}

// Speed Typing Game
function startTypingGame() {
    typingGameActive = true;
    typingScore = 0;
    typingTimeLeft = 60;
    typingCorrectAnswers = 0;
    typingStartTime = Date.now();
    
    const gameArea = document.getElementById('typingGameArea');
    const startBtn = document.querySelector('#typingGame .btn');
    
    startBtn.style.display = 'none';
    gameArea.style.display = 'block';
    
    generateTypingCharacter();
    
    const input = document.getElementById('typingInput');
    input.focus();
    input.addEventListener('keypress', handleTypingInput);
    
    // Start timer
    const timer = setInterval(() => {
        typingTimeLeft--;
        updateTypingStats();
        
        if (typingTimeLeft <= 0) {
            clearInterval(timer);
            endTypingGame();
        }
    }, 1000);
}

function generateTypingCharacter() {
    const randomChar = hiraganaData[Math.floor(Math.random() * hiraganaData.length)];
    typingCurrentChar = randomChar;
    document.getElementById('typingCharacter').textContent = randomChar.char;
    document.getElementById('typingInput').value = '';
}

function handleTypingInput(e) {
    if (e.key === 'Enter') {
        const input = document.getElementById('typingInput');
        const answer = input.value.toLowerCase().trim();
        
        if (answer === typingCurrentChar.romaji.toLowerCase()) {
            typingScore += 10;
            typingCorrectAnswers++;
            generateTypingCharacter();
        } else {
            typingScore = Math.max(0, typingScore - 5);
        }
        
        updateTypingStats();
    }
}

function updateTypingStats() {
    document.getElementById('typingScore').textContent = typingScore;
    document.getElementById('typingTime').textContent = typingTimeLeft;
    
    const timeElapsed = (Date.now() - typingStartTime) / 1000 / 60; // in minutes
    const wpm = timeElapsed > 0 ? Math.round(typingCorrectAnswers / timeElapsed) : 0;
    document.getElementById('typingWPM').textContent = wpm;
}

function endTypingGame() {
    typingGameActive = false;
    alert(`Game selesai! Skor akhir: ${typingScore}`);
    
    // Reset game
    document.getElementById('typingGameArea').style.display = 'none';
    document.querySelector('#typingGame .btn').style.display = 'block';
}

// Drawing Practice Game
function startDrawingGame() {
    drawingGameActive = true;
    drawingCurrentIndex = 0;
    
    const gameArea = document.getElementById('drawingGameArea');
    const startBtn = document.querySelector('#drawingGame .btn');
    
    startBtn.style.display = 'none';
    gameArea.style.display = 'block';
    
    drawingCanvas = document.getElementById('drawingCanvas');
    drawingContext = drawingCanvas.getContext('2d');
    
    setupDrawingCanvas();
    updateDrawingCharacter();
}

function setupDrawingCanvas() {
    drawingContext.strokeStyle = '#FF6B6B';
    drawingContext.lineWidth = 3;
    drawingContext.lineCap = 'round';
    
    // Mouse events
    drawingCanvas.addEventListener('mousedown', startDrawing);
    drawingCanvas.addEventListener('mousemove', draw);
    drawingCanvas.addEventListener('mouseup', stopDrawing);
    
    // Touch events
    drawingCanvas.addEventListener('touchstart', startDrawing);
    drawingCanvas.addEventListener('touchmove', draw);
    drawingCanvas.addEventListener('touchend', stopDrawing);
}

function startDrawing(e) {
    isDrawing = true;
    const rect = drawingCanvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    drawingContext.beginPath();
    drawingContext.moveTo(x, y);
}

function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    
    const rect = drawingCanvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    
    drawingContext.lineTo(x, y);
    drawingContext.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    drawingContext.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
}

function updateDrawingCharacter() {
    const char = hiraganaData[drawingCurrentIndex];
    document.getElementById('drawingCharacter').textContent = char.char;
}

function nextDrawingCharacter() {
    clearCanvas();
    drawingCurrentIndex = (drawingCurrentIndex + 1) % hiraganaData.length;
    updateDrawingCharacter();
}

// Falling Hiragana Game
function startFallingGame() {
    fallingGameActive = true;
    fallingScore = 0;
    fallingLevel = 1;
    fallingLives = 3;
    fallingObjects = [];
    
    const gameArea = document.getElementById('fallingGameArea');
    const startBtn = document.querySelector('#fallingGame .btn');
    
    startBtn.style.display = 'none';
    gameArea.style.display = 'block';
    
    fallingCanvas = document.getElementById('fallingCanvas');
    fallingContext = fallingCanvas.getContext('2d');
    
    const input = document.getElementById('fallingInput');
    input.focus();
    input.addEventListener('keypress', handleFallingInput);
    
    updateFallingStats();
    fallingGameLoop();
}

function fallingGameLoop() {
    if (!fallingGameActive) return;
    
    // Clear canvas
    fallingContext.clearRect(0, 0, fallingCanvas.width, fallingCanvas.height);
    
    // Add new falling object occasionally
    if (Math.random() < 0.02 + fallingLevel * 0.005) {
        const char = hiraganaData[Math.floor(Math.random() * hiraganaData.length)];
        fallingObjects.push({
            char: char.char,
            romaji: char.romaji,
            x: Math.random() * (fallingCanvas.width - 50),
            y: -50,
            speed: 1 + fallingLevel * 0.5
        });
    }
    
    // Update and draw falling objects
    fallingContext.font = '36px "Noto Sans JP"';
    fallingContext.fillStyle = '#FF6B6B';
    
    for (let i = fallingObjects.length - 1; i >= 0; i--) {
        const obj = fallingObjects[i];
        obj.y += obj.speed;
        
        fallingContext.fillText(obj.char, obj.x, obj.y);
        
        // Remove if reached bottom
        if (obj.y > fallingCanvas.height) {
            fallingObjects.splice(i, 1);
            fallingLives--;
            updateFallingStats();
            
            if (fallingLives <= 0) {
                endFallingGame();
                return;
            }
        }
    }
    
    fallingAnimationId = requestAnimationFrame(fallingGameLoop);
}

function handleFallingInput(e) {
    if (e.key === 'Enter') {
        const input = document.getElementById('fallingInput');
        const answer = input.value.toLowerCase().trim();
        
        // Check if answer matches any falling object
        for (let i = 0; i < fallingObjects.length; i++) {
            if (fallingObjects[i].romaji.toLowerCase() === answer) {
                fallingObjects.splice(i, 1);
                fallingScore += 10 * fallingLevel;
                input.value = '';
                
                // Level up every 100 points
                if (fallingScore > 0 && fallingScore % 100 === 0) {
                    fallingLevel++;
                }
                
                updateFallingStats();
                break;
            }
        }
    }
}

function updateFallingStats() {
    document.getElementById('fallingScore').textContent = fallingScore;
    document.getElementById('fallingLevel').textContent = fallingLevel;
    document.getElementById('fallingLives').textContent = fallingLives;
}

function endFallingGame() {
    fallingGameActive = false;
    cancelAnimationFrame(fallingAnimationId);
    alert(`Game Over! Skor akhir: ${fallingScore}`);
    
    // Reset game
    document.getElementById('fallingGameArea').style.display = 'none';
    document.querySelector('#fallingGame .btn').style.display = 'block';
}

// Puzzle Game
function startPuzzleGame() {
    puzzleGameActive = true;
    puzzleCurrentChar = hiraganaData[0];
    
    const gameArea = document.getElementById('puzzleGameArea');
    const startBtn = document.querySelector('#puzzleGame .btn');
    
    startBtn.style.display = 'none';
    gameArea.style.display = 'block';
    
    updatePuzzleDisplay();
    generatePuzzlePieces();
}

function updatePuzzleDisplay() {
    document.getElementById('puzzleTarget').textContent = puzzleCurrentChar.char;
}

function generatePuzzlePieces() {
    // Simple puzzle implementation - split character into pieces
    const piecesContainer = document.getElementById('puzzlePieces');
    piecesContainer.innerHTML = '';
    
    // Create 4 puzzle pieces (simplified)
    for (let i = 0; i < 4; i++) {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.textContent = '◯'; // Placeholder
        piece.draggable = true;
        piece.addEventListener('dragstart', handlePuzzleDrag);
        piecesContainer.appendChild(piece);
    }
}

function handlePuzzleDrag(e) {
    // Simplified drag implementation
    e.dataTransfer.setData('text/plain', e.target.textContent);
}

function shufflePuzzle() {
    generatePuzzlePieces();
}

function nextPuzzle() {
    const currentIndex = hiraganaData.indexOf(puzzleCurrentChar);
    puzzleCurrentChar = hiraganaData[(currentIndex + 1) % hiraganaData.length];
    updatePuzzleDisplay();
    generatePuzzlePieces();
}

// Rhythm Game
function startRhythmGame() {
    rhythmGameActive = true;
    rhythmScore = 0;
    rhythmCombo = 0;
    rhythmStartTime = Date.now();
    
    const gameArea = document.getElementById('rhythmGameArea');
    const startBtn = document.querySelector('#rhythmGame .btn');
    
    startBtn.style.display = 'none';
    gameArea.style.display = 'block';
    
    const input = document.getElementById('rhythmInput');
    input.focus();
    input.addEventListener('keypress', handleRhythmInput);
    
    generateRhythmNotes();
    updateRhythmStats();
}

function generateRhythmNotes() {
    // Generate rhythm notes (simplified)
    const notesContainer = document.getElementById('rhythmNotes');
    notesContainer.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
        const note = document.createElement('div');
        note.className = 'rhythm-note';
        const char = hiraganaData[Math.floor(Math.random() * hiraganaData.length)];
        note.textContent = char.char;
        note.dataset.romaji = char.romaji;
        note.style.left = (i * 60) + 'px';
        notesContainer.appendChild(note);
    }
}

function handleRhythmInput(e) {
    if (e.key === 'Enter') {
        const input = document.getElementById('rhythmInput');
        const answer = input.value.toLowerCase().trim();
        
        // Check timing and accuracy (simplified)
        const activeNote = document.querySelector('.rhythm-note.active');
        if (activeNote && activeNote.dataset.romaji.toLowerCase() === answer) {
            rhythmScore += 100;
            rhythmCombo++;
        } else {
            rhythmCombo = 0;
        }
        
        input.value = '';
        updateRhythmStats();
    }
}

function updateRhythmStats() {
    document.getElementById('rhythmScore').textContent = rhythmScore;
    document.getElementById('rhythmCombo').textContent = rhythmCombo;
    document.getElementById('rhythmAccuracy').textContent = '100%'; // Simplified
}