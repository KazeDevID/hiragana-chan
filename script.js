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
    
    generateQuizQuestion();
}

function generateQuizQuestion() {
    const quizQuestion = document.getElementById('quizQuestion');
    const quizOptions = document.getElementById('quizOptions');
    const quizResult = document.getElementById('quizResult');
    
    quizResult.innerHTML = '';
    quizOptions.innerHTML = '';
    
    let quizData = hiraganaData;
    
    // Determine quiz data based on type
    if (currentQuizType === 'dakuten') {
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