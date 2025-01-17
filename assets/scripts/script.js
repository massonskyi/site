document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        { latin: "Consuetudo est altera natura", translation: "Привычка - вторая натура", category: "философия", priority: 1 },
        { latin: "Nota bene", translation: "Заметьте хорошо!", category: "общий", priority: 2 },
        { latin: "Nulla calamitas sola", translation: "Беда не приходит одна", category: "мудрость", priority: 1 },
        { latin: "Per aspera ad astra", translation: "Через тернии к звёздам", category: "мотивация", priority: 2 },
        { latin: "Carpe diem", translation: "Лови момент", category: "мотивация", priority: 2 },
        { latin: "Alea iacta est", translation: "Жребий брошен", category: "история", priority: 1 },
        { latin: "Veni, vidi, vici", translation: "Пришёл, увидел, победил", category: "история", priority: 2 },
        { latin: "Cogito, ergo sum", translation: "Мыслю, следовательно, существую", category: "философия", priority: 2 },
        { latin: "In vino veritas", translation: "В вине истина", category: "мудрость", priority: 1 },
        { latin: "Memento mori", translation: "Помни о смерти", category: "философия", priority: 1 }
    ];

    class PhraseGenerator {
        constructor(phrases, options = {}) {
            this.phrases = phrases;
            this.usedPhrases = new Map();
            this.categories = new Map();
            this.weights = options.weights || phrases.map(phrase => phrase.priority || 1); // весы определяют приоритет выбора фразы
            this.cooldownPeriod = options.cooldownPeriod || 0; // время ожидания для одной и той же фразы
            this.maxConsecutiveFromCategory = options.maxConsecutiveFromCategory || Infinity; // максимальное количество фраз подряд из одной категории
            this.lastCategory = null; // последняя сгенерированная категория, необходимо для проверки на максимальное количество
            this.consecutiveCategoryCount = 0;
            
            this.validateInput();
            this.initializeCategories();
        }

        validateInput() {
            if (!Array.isArray(this.phrases) || this.phrases.length === 0) {
                throw new Error('Phrases must be a non-empty array');
            }
            if (this.weights.length !== this.phrases.length) {
                throw new Error('Weights array must match phrases array length');
            }
        }

        initializeCategories() {
            this.phrases.forEach((phrase, index) => {
                if (phrase.category) {
                    if (!this.categories.has(phrase.category)) {
                        this.categories.set(phrase.category, []);
                    }
                    this.categories.get(phrase.category).push(index);
                }
            });
        }

        isPhraseCoolingDown(index) {
            if (!this.cooldownPeriod) return false;
            const lastUsed = this.usedPhrases.get(index);
            if (!lastUsed) return false;
            return (Date.now() - lastUsed) < this.cooldownPeriod;
        }

        getAvailablePhrases() {
            return this.phrases.reduce((acc, _, index) => {
                if (!this.isPhraseCoolingDown(index)) {
                    acc.push(index);
                }
                return acc;
            }, []);
        }

        calculateWeightedProbabilities(availableIndices) {
            const totalWeight = availableIndices.reduce((sum, index) => sum + this.weights[index], 0);
            return availableIndices.map(index => this.weights[index] / totalWeight);
        }

        selectIndexByWeight(availableIndices, probabilities) {
            const random = Math.random();
            let sum = 0;
            
            for (let i = 0; i < availableIndices.length; i++) {
                sum += probabilities[i];
                if (random < sum) {
                    return availableIndices[i];
                }
            }
            
            return availableIndices[availableIndices.length - 1];
        }

        checkCategoryConstraints(index) {
            if (!this.phrases[index].category) return true;
            
            const category = this.phrases[index].category;
            if (category === this.lastCategory) {
                if (this.consecutiveCategoryCount >= this.maxConsecutiveFromCategory) {
                    return false;
                }
            }
            return true;
        }

        updateCategoryTracking(index) {
            const category = this.phrases[index].category;
            if (category === this.lastCategory) {
                this.consecutiveCategoryCount++;
            } else {
                this.lastCategory = category;
                this.consecutiveCategoryCount = 1;
            }
        }

        getRandomPhrase() {
            const availableIndices = this.getAvailablePhrases();
            
            if (availableIndices.length === 0) {
                this.usedPhrases.clear();
                return this.getRandomPhrase();
            }

            const probabilities = this.calculateWeightedProbabilities(availableIndices);
            let selectedIndex;
            let attempts = 0;
            const maxAttempts = 10;

            do {
                selectedIndex = this.selectIndexByWeight(availableIndices, probabilities);
                attempts++;
                
                if (attempts >= maxAttempts) {
                    this.lastCategory = null;
                    this.consecutiveCategoryCount = 0;
                    break;
                }
            } while (!this.checkCategoryConstraints(selectedIndex));

            this.usedPhrases.set(selectedIndex, Date.now());
            this.updateCategoryTracking(selectedIndex);

            return {
                ...this.phrases[selectedIndex],
                index: selectedIndex,
                timestamp: Date.now()
            };
        }
    }

    let clickCount = 0;
    let currentPhrase = null;
    let currentPhraseClass = null;

    const phraseContainer = document.getElementById('phrase-container');
    const showPhraseButton = document.getElementById('show-phrase-button');
    const recolorButton = document.getElementById('recolor-button');
    const createListButton = document.getElementById('create-list-button');
    const nestedList = document.getElementById('nested-list');

    // Создаем экземпляр генератора с настройками
    const generator = new PhraseGenerator(phrases, {
        cooldownPeriod: 2000, // 2 секунды перед повторным использованием фразы
        maxConsecutiveFromCategory: 2 // Максимум 2 фразы подряд из одной категории
    });

    showPhraseButton.addEventListener('click', () => {
        const phrase = generator.getRandomPhrase();
        currentPhrase = phrase;
        currentPhraseClass = clickCount % 2 === 0 ? 'class1' : 'class2';

        const phraseElement = document.createElement('div');
        phraseElement.textContent = `${phrase.latin} - ${phrase.translation}`;
        phraseElement.classList.add(currentPhraseClass);
        
        // Добавляем информацию о категории
        if (phrase.category) {
            phraseElement.dataset.category = phrase.category;
            phraseElement.title = `Категория: ${phrase.category}`;
        }

        phraseContainer.appendChild(phraseElement);
        clickCount++;
    });

    recolorButton.addEventListener('click', () => {
        const evenElements = document.querySelectorAll('#phrase-container div:nth-child(even)');
        evenElements.forEach(element => {
            element.style.fontWeight = 'bold';
        });
    });

    createListButton.addEventListener('click', () => {
        if (currentPhrase === null) {
            alert("Сначала покажите фразу");
            return;
        }

        const listItem = document.createElement('li');
        listItem.classList.add(currentPhraseClass);
        
        // Добавляем дополнительную информацию в список
        listItem.innerHTML = `
            <strong>${currentPhrase.latin}</strong>
            <ul>
                <li>${currentPhrase.translation}</li>
                ${currentPhrase.category ? `<li>Категория: ${currentPhrase.category}</li>` : ''}
                <li>Приоритет: ${currentPhrase.priority || 1}</li>
            </ul>
        `;
        
        nestedList.appendChild(listItem);

        currentPhrase = null;
        currentPhraseClass = null;
    });
});