// assets/scripts/game.js

const DIFFICULTY_LEVELS = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
};

const QUESTION_TYPES = {
  CHOICE: "choice",
  TEXT: "text",
  SORT: "sort",
};

class QuestionGenerator {
  static generateQuestions(difficulty) {
    switch (difficulty) {
      case DIFFICULTY_LEVELS.EASY:
        return {
          choiceQuestions: [
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is the capital of France?",
              options: ["Paris", "London", "Berlin", "Madrid"],
              correctAnswer: "Paris",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is 2 + 2?",
              options: ["3", "4", "5", "6"],
              correctAnswer: "4",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is the largest planet in our solar system?",
              options: ["Earth", "Mars", "Jupiter", "Saturn"],
              correctAnswer: "Jupiter",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is the smallest country in the world?",
              options: [
                "Vatican City",
                "Monaco",
                "Liechtenstein",
                "San Marino",
              ],
              correctAnswer: "Vatican City",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is the chemical symbol for water?",
              options: ["H2O", "CO2", "O2", "N2"],
              correctAnswer: "H2O",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is the boiling point of water?",
              options: ["0°C", "50°C", "100°C", "150°C"],
              correctAnswer: "100°C",
            },
          ],
          textQuestions: [
            {
              type: QUESTION_TYPES.TEXT,
              question: "What color is the sky on a clear day?",
              correctAnswer: "blue",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "How many days are in a week?",
              correctAnswer: "7",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "What is the capital of Japan?",
              correctAnswer: "Tokyo",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "What is the largest ocean on Earth?",
              correctAnswer: "Pacific Ocean",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "What is the chemical formula for table salt?",
              correctAnswer: "NaCl",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "Who wrote 'Romeo and Juliet'?",
              correctAnswer: "William Shakespeare",
            },
          ],
          sortingQuestions: [
            {
              type: QUESTION_TYPES.SORT,
              question: "Sort the numbers in ascending order: 5, 3, 1, 4, 2",
              correctAnswer: [1, 2, 3, 4, 5],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the words alphabetically: apple, banana, cherry, date",
              correctAnswer: ["apple", "banana", "cherry", "date"],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the planets by size: Mercury, Venus, Earth, Jupiter",
              correctAnswer: ["Mercury", "Venus", "Earth", "Jupiter"],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the elements by atomic number: Hydrogen, Helium, Lithium, Beryllium",
              correctAnswer: ["Hydrogen", "Helium", "Lithium", "Beryllium"],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the colors of the rainbow: Red, Orange, Yellow, Green, Blue, Indigo, Violet",
              correctAnswer: [
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue",
                "Indigo",
                "Violet",
              ],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
              correctAnswer: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
            },
          ],
        };
      case DIFFICULTY_LEVELS.MEDIUM:
        return {
          choiceQuestions: [
            {
              type: QUESTION_TYPES.CHOICE,
              question: "Which planet is known as the Red Planet?",
              options: ["Earth", "Mars", "Jupiter", "Saturn"],
              correctAnswer: "Mars",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is the largest ocean on Earth?",
              options: ["Atlantic", "Indian", "Arctic", "Pacific"],
              correctAnswer: "Pacific",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is the chemical symbol for gold?",
              options: ["Au", "Ag", "Fe", "Cu"],
              correctAnswer: "Au",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "Who developed the theory of relativity?",
              options: [
                "Albert Einstein",
                "Isaac Newton",
                "Galileo Galilei",
                "Niels Bohr",
              ],
              correctAnswer: "Albert Einstein",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is the capital of Australia?",
              options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
              correctAnswer: "Canberra",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question:
                "What is the boiling point of water at standard atmospheric pressure?",
              options: ["0°C", "50°C", "100°C", "150°C"],
              correctAnswer: "100°C",
            },
          ],
          textQuestions: [
            {
              type: QUESTION_TYPES.TEXT,
              question: "What is the chemical formula for water?",
              correctAnswer: "H2O",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "Who discovered penicillin?",
              correctAnswer: "Alexander Fleming",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "What is the capital of Canada?",
              correctAnswer: "Ottawa",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "What is the largest planet in our solar system?",
              correctAnswer: "Jupiter",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "What is the chemical symbol for silver?",
              correctAnswer: "Ag",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "Who wrote 'To Kill a Mockingbird'?",
              correctAnswer: "Harper Lee",
            },
          ],
          sortingQuestions: [
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the planets by size: Mercury, Venus, Earth, Jupiter",
              correctAnswer: ["Mercury", "Venus", "Earth", "Jupiter"],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the elements by atomic number: Hydrogen, Helium, Lithium, Beryllium",
              correctAnswer: ["Hydrogen", "Helium", "Lithium", "Beryllium"],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the colors of the rainbow: Red, Orange, Yellow, Green, Blue, Indigo, Violet",
              correctAnswer: [
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue",
                "Indigo",
                "Violet",
              ],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
              correctAnswer: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the numbers in descending order: 10, 20, 30, 40, 50",
              correctAnswer: [50, 40, 30, 20, 10],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the words alphabetically: apple, banana, cherry, date, elderberry",
              correctAnswer: [
                "apple",
                "banana",
                "cherry",
                "date",
                "elderberry",
              ],
            },
          ],
        };
      case DIFFICULTY_LEVELS.HARD:
        return {
          choiceQuestions: [
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is the chemical symbol for gold?",
              options: ["Au", "Ag", "Fe", "Cu"],
              correctAnswer: "Au",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "Who developed the theory of relativity?",
              options: [
                "Albert Einstein",
                "Isaac Newton",
                "Galileo Galilei",
                "Niels Bohr",
              ],
              correctAnswer: "Albert Einstein",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is the capital of Australia?",
              options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
              correctAnswer: "Canberra",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question:
                "What is the boiling point of water at standard atmospheric pressure?",
              options: ["0°C", "50°C", "100°C", "150°C"],
              correctAnswer: "100°C",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is the largest planet in our solar system?",
              options: ["Earth", "Mars", "Jupiter", "Saturn"],
              correctAnswer: "Jupiter",
            },
            {
              type: QUESTION_TYPES.CHOICE,
              question: "What is the chemical symbol for silver?",
              options: ["Au", "Ag", "Fe", "Cu"],
              correctAnswer: "Ag",
            },
          ],
          textQuestions: [
            {
              type: QUESTION_TYPES.TEXT,
              question: "What is the square root of 64?",
              correctAnswer: "8",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "Who painted the Mona Lisa?",
              correctAnswer: "Leonardo da Vinci",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "What is the capital of Canada?",
              correctAnswer: "Ottawa",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "What is the largest ocean on Earth?",
              correctAnswer: "Pacific Ocean",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "What is the chemical formula for table salt?",
              correctAnswer: "NaCl",
            },
            {
              type: QUESTION_TYPES.TEXT,
              question: "Who wrote 'Romeo and Juliet'?",
              correctAnswer: "William Shakespeare",
            },
          ],
          sortingQuestions: [
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the elements by atomic number: Oxygen, Nitrogen, Carbon, Hydrogen",
              correctAnswer: ["Hydrogen", "Carbon", "Nitrogen", "Oxygen"],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the planets by size: Mercury, Venus, Earth, Jupiter",
              correctAnswer: ["Mercury", "Venus", "Earth", "Jupiter"],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the colors of the rainbow: Red, Orange, Yellow, Green, Blue, Indigo, Violet",
              correctAnswer: [
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue",
                "Indigo",
                "Violet",
              ],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
              correctAnswer: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the numbers in descending order: 10, 20, 30, 40, 50",
              correctAnswer: [50, 40, 30, 20, 10],
            },
            {
              type: QUESTION_TYPES.SORT,
              question:
                "Sort the words alphabetically: apple, banana, cherry, date, elderberry",
              correctAnswer: [
                "apple",
                "banana",
                "cherry",
                "date",
                "elderberry",
              ],
            },
          ],
        };
      default:
        throw new Error(`Invalid difficulty level: ${difficulty}`);
    }
  }
}

class QuizGame {
  constructor() {
    this.levels = [];
    this.currentLevelIndex = 0;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.timer = null;
    this.startTime = null;
    this.globalStartTime = null;
    this.username = this.getLocalStorage("playerName") || this.getLocalStorage("username") || "Guest";
    this.questionDifficulty =
      this.getLocalStorage("questionDifficulty") || DIFFICULTY_LEVELS.EASY;
    this.timePerQuestion =
      parseInt(this.getLocalStorage("timePerQuestion")) || 15;

    this.initializeElements();
    this.bindEvents();
  }

  initializeElements() {
    this.elements = {
      levelContainer: document.getElementById("level-container"),
      questionContainers: {
        level1: document.getElementById("question-container-1"),
        level2: document.getElementById("question-container-2"),
        level3: document.getElementById("question-container-3"),
      },
      optionsContainer: document.getElementById("options-container-1"),
      dragDropContainer: document.getElementById("drag-drop-container-2"),
      dropZone: document.getElementById("drop-zone-2"),
      matchContainer: document.getElementById("match-container-3"),
      nextButtons: {
        level1: document.getElementById("next-button-1"),
        level2: document.getElementById("next-button-2"),
        level3: document.getElementById("next-button-3"),
      },
      questionTexts: {
        level1: document.getElementById("question-text-1"),
        level2: document.getElementById("question-text-2"),
        level3: document.getElementById("question-text-3"),
      },
      timer: document.getElementById("timer"),
      settingsButton: document.getElementById("save-settings"),
      settingsForm: {
        timeInput: document.getElementById("time-per-question"),
        difficultySelect: document.getElementById("question-difficulty"),
      },
    };

    // Validate required elements
    Object.entries(this.elements).forEach(([key, element]) => {
      if (!element) {
        console.error(`Required element not found: ${key}`);
        throw new Error(`Required element not found: ${key}`);
      }
    });
  }

  bindEvents() {
    this.elements.nextButtons.level1.addEventListener("click", () =>
      this.handleNextQuestion(1)
    );
    this.elements.nextButtons.level2.addEventListener("click", () =>
      this.handleNextQuestion(2)
    );
    this.elements.nextButtons.level3.addEventListener("click", () =>
      this.handleNextQuestion(3)
    );
    this.elements.settingsButton.addEventListener("click", () =>
      this.saveSettings()
    );

    // Add drag and drop event listeners
    this.elements.dropZone.addEventListener("dragover", (e) =>
      e.preventDefault()
    );
    this.elements.dropZone.addEventListener("drop", (e) => this.handleDrop(e));
  }

  saveSettings() {
    const newTime = parseInt(this.elements.settingsForm.timeInput.value);
    const newDifficulty = this.elements.settingsForm.difficultySelect.value;

    if (newTime && newTime > 0) {
      this.timePerQuestion = newTime;
      this.setCookie("timePerQuestion", newTime, 7);
    }

    if (
      newDifficulty &&
      Object.values(DIFFICULTY_LEVELS).includes(newDifficulty)
    ) {
      this.questionDifficulty = newDifficulty;
      this.setCookie("questionDifficulty", newDifficulty, 7);
    }

    this.restart();
  }

  getCurrentLevel() {
    return this.levels[this.currentLevelIndex];
  }

  getCurrentQuestion() {
    return this.getCurrentLevel().questions[this.currentQuestionIndex];
  }

  renderChoiceQuestion(question, level) {
    const container =
      level === 1
        ? this.elements.optionsContainer
        : level === 2
        ? this.elements.dragDropContainer
        : this.elements.matchContainer;

    container.innerHTML = "";
    question.options.forEach((option) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("quiz-option");
      optionElement.textContent = option;
      optionElement.dataset.answer = option;
      optionElement.addEventListener("click", () => this.checkAnswer(option));
      container.appendChild(optionElement);
    });
  }

  renderTextQuestion(question, level) {
    const container =
      level === 1
        ? this.elements.optionsContainer
        : level === 2
        ? this.elements.dragDropContainer
        : this.elements.matchContainer;

    container.innerHTML = "";
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.className = "quiz-input";
    inputElement.placeholder = "Enter your answer";
    inputElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.checkAnswer(inputElement.value);
      }
    });
    container.appendChild(inputElement);
  }

  renderSortQuestion(question, level) {
    const container =
      level === 1
        ? this.elements.optionsContainer
        : level === 2
        ? this.elements.dragDropContainer
        : this.elements.matchContainer;

    container.innerHTML = "";
    const sortableContainer = document.createElement("div");
    sortableContainer.classList.add("sort-container");

    // Shuffle the correct answer array to create initial state
    const shuffled = [...question.correctAnswer].sort(
      () => Math.random() - 0.5
    );

    shuffled.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("sort-item");
      itemElement.textContent = item;
      itemElement.draggable = true;
      itemElement.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", item);
        itemElement.classList.add("dragging");
      });
      itemElement.addEventListener("dragend", () => {
        itemElement.classList.remove("dragging");
      });
      sortableContainer.appendChild(itemElement);
    });

    sortableContainer.addEventListener("dragover", (event) => {
      event.preventDefault();
      const dragging = container.querySelector(".dragging");
      const siblings = [
        ...container.querySelectorAll(".sort-item:not(.dragging)"),
      ];

      const nextSibling = siblings.find((sibling) => {
        const box = sibling.getBoundingClientRect();
        return event.clientY < box.top + box.height / 2;
      });

      if (nextSibling) {
        sortableContainer.insertBefore(dragging, nextSibling);
      } else {
        sortableContainer.appendChild(dragging);
      }
    });

    // Add a check button for sorting questions
    const checkButton = document.createElement("button");
    checkButton.textContent = "Check Order";
    checkButton.className = "check-button";
    checkButton.addEventListener("click", () => {
      const currentOrder = [
        ...sortableContainer.querySelectorAll(".sort-item"),
      ].map((item) => item.textContent);
      this.checkAnswer(currentOrder);
    });

    container.appendChild(sortableContainer);
    container.appendChild(checkButton);
  }

  checkAnswer(userAnswer) {
    const currentQuestion = this.getCurrentQuestion();
    let isCorrect = false;

    if (currentQuestion.type === QUESTION_TYPES.SORT) {
      isCorrect =
        JSON.stringify(userAnswer) ===
        JSON.stringify(currentQuestion.correctAnswer);
    } else {
      isCorrect =
        String(userAnswer).toLowerCase().trim() ===
        String(currentQuestion.correctAnswer).toLowerCase().trim();
    }

    this.handleAnswer(isCorrect);
    this.showAnswerFeedback(isCorrect);
  }

  showAnswerFeedback(isCorrect) {
    const feedback = document.createElement("div");
    feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
    feedback.textContent = isCorrect ? "Correct!" : "Incorrect!";

    const currentContainer =
      this.elements.questionContainers[`level${this.currentLevelIndex + 1}`];
    currentContainer.appendChild(feedback);

    setTimeout(() => feedback.remove(), 2000);
  }

  handleDrop(event) {
    event.preventDefault();
    const answer = event.dataTransfer.getData("text");
    this.checkAnswer(answer);
  }

  startTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.globalStartTime = Date.now();
    this.startTime = Date.now();
    this.timer = setInterval(() => this.updateTimer(), 1000);
  }

  updateTimer() {
    const currentTime = Math.floor((Date.now() - this.startTime) / 1000);
    const timeLeft = this.timePerQuestion - currentTime;

    if (timeLeft <= 0) {
      clearInterval(this.timer);
      this.stopTimer();
      this.handleTimeUp();
      return;
    }

    this.elements.timer.textContent = `Time left: ${timeLeft} seconds`;
  }
  stopTimer(){
    clearInterval(this.timer);
    this.elements.timer.textContent = `Time left: ${this.timePerQuestion} seconds`;
  }
  handleTimeUp() {
    this.showAnswerFeedback(false);
    console.log(Math.floor((this.globalStartTime) / 1000))
    const totalTime = Math.floor((Date.now() - this.globalStartTime) / 1000);
    this.saveScore(totalTime);
    this.displayGameOver(totalTime);
  }

  displayLevel() {
    Object.values(this.elements.questionContainers).forEach((container) => {
      container.style.display = "none";
    });

    const currentContainer =
      this.elements.questionContainers[`level${this.currentLevelIndex + 1}`];
    if (currentContainer) {
      currentContainer.style.display = "block";
      this.displayQuestion(this.currentLevelIndex + 1);
    }
  }

  showNextButton() {
    const currentButton =
      this.elements.nextButtons[`level${this.currentLevelIndex + 1}`];
    if (currentButton) {
      currentButton.style.display = "block";
    }
  }

  hideNextButton() {
    const currentButton =
      this.elements.nextButtons[`level${this.currentLevelIndex + 1}`];
    if (currentButton) {
      currentButton.style.display = "none";
    }
  }

  displayGameOver(totalTime) {
    this.elements.levelContainer.innerHTML = `
        <div class="game-over">
          <h2>Game Over!</h2>
          <p>Final Score: ${this.score}</p>
          <p>Total Time: ${totalTime} seconds</p>
          <button onclick="location.reload()">Play Again</button>
        </div>
      `;
  }

  saveScore(totalTime) {
    const scores = JSON.parse(localStorage.getItem("quizScores")) || [];
    scores.push({
      username: this.username,
      score: this.score,
      time: totalTime,
      difficulty: this.questionDifficulty,
      timePerQuestion: this.timePerQuestion,
    });

    localStorage.setItem("quizScores", JSON.stringify(scores));
  }

  handleAnswer(isCorrect) {
    if (isCorrect) {
      this.score++;
    }

    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.getCurrentLevel().questions.length) {
      this.displayQuestion(this.currentLevelIndex + 1);
      this.hideNextButton();
      this.startTimer();
    } else {
      const totalTime = Math.floor((Date.now() - this.startTime) / 1000);
      this.saveScore(totalTime);
      this.displayGameOver(totalTime);
    }
  }

  handleNextQuestion(level) {
    if (level <= this.levels.length) {
      this.currentLevelIndex = level - 1;
      this.currentQuestionIndex = 0;
      this.displayLevel();
    } else {
      const totalTime = Math.floor((Date.now() - this.startTime) / 1000);
      this.saveScore(totalTime);
      this.displayGameOver(totalTime);
    }
  }

  handleNextQuestion(level) {
    if (level <= this.levels.length) {
      this.currentLevelIndex = level - 1;
      this.currentQuestionIndex = 0;
      this.displayLevel();
    } else {
      const totalTime = Math.floor((Date.now() - this.startTime) / 1000);
      this.saveScore(totalTime);
      this.displayGameOver(totalTime);
    }
  }

  restart() {
    this.currentLevelIndex = 0;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.startTime = Date.now();
    this.generateLevels();
    this.displayLevel();
    this.startTimer();
  }

  displayLevel() {
    console.log("Displaying level:", this.currentLevelIndex + 1);

    // Скрываем все контейнеры вопросов
    for (let i = 1; i <= 3; i++) {
      const container = document.getElementById(`question-container-${i}`);
      if (container) {
        container.style.display = "none";
      }
    }

    // Показываем только текущий контейнер
    const currentContainer = document.getElementById(
      `question-container-${this.currentLevelIndex + 1}`
    );
    if (currentContainer) {
      currentContainer.style.display = "block";
      this.displayQuestion(this.currentLevelIndex + 1);
    } else {
      console.error(
        "Current question container not found:",
        this.currentLevelIndex + 1
      );
    }
  }
  displayQuestion(level) {
    console.log("Displaying question for level:", level);
    const currentQuestion = this.getCurrentQuestion();
    console.log("Current question:", currentQuestion);

    if (!currentQuestion) {
      console.error("No question found for level:", level);
      return;
    }

    const container = document.getElementById(`question-container-${level}`);
    if (!container) {
      console.error("Container not found for level:", level);
      return;
    }

    // Обновляем заголовок и текст вопроса
    const questionTitle = container.querySelector("h3");
    const questionText = container.querySelector("p");

    if (questionTitle && questionText) {
      questionTitle.textContent = `Question ${this.currentQuestionIndex + 1}`;
      questionText.textContent = currentQuestion.question;
    }

    // Отображаем варианты ответа в зависимости от типа вопроса
    if (currentQuestion.type === QUESTION_TYPES.CHOICE) {
      this.renderChoiceQuestion(currentQuestion, level);
    } else if (currentQuestion.type === QUESTION_TYPES.TEXT) {
      this.renderTextQuestion(currentQuestion, level);
    } else if (currentQuestion.type === QUESTION_TYPES.SORT) {
      this.renderSortQuestion(currentQuestion, level);
    }
  }
  generateLevels() {
    console.log("Generating levels with difficulty:", this.questionDifficulty);
    const questions = QuestionGenerator.generateQuestions(
      this.questionDifficulty
    );
    console.log("Generated questions:", questions);

    const allChoiceQuestions = questions.choiceQuestions || [];
    const allTextQuestions = questions.textQuestions || [];
    const allSortingQuestions = questions.sortingQuestions || [];

    const allQuestions = [
      ...allChoiceQuestions,
      ...allTextQuestions,
      ...allSortingQuestions,
    ];

    const totalQuestions = allQuestions.length;
    const questionsPerLevel = 6;

    if (totalQuestions < 3 * questionsPerLevel) {
      console.warn("Not enough questions to fully populate all levels.");
    }

    this.levels = ["level-1", "level-2", "level-3"].map((id, index) => {
      const startIndex = index * questionsPerLevel;
      const endIndex = startIndex + questionsPerLevel;

      const levelQuestions = allQuestions.slice(startIndex, endIndex);

      // Add any leftover questions to the last level
      if (index === 2) {
        levelQuestions.push(...allQuestions.slice(endIndex));
      }

      console.log(`Level ${index + 1} questions:`, levelQuestions);
      return {
        id,
        questions: levelQuestions,
      };
    });

    // Ensure each level has questions
    this.levels.forEach((level, index) => {
      if (level.questions.length === 0) {
        console.error(`No questions generated for level ${index + 1}`);
      }
    });
  }
  setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
    setLocalStorage(name, value) {
        localStorage.setItem(name, value);
    }

    getLocalStorage(name) {
        return localStorage.getItem(name);
    }
}

// Initialize the game when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing game...");
  try {
    const game = new QuizGame();
    console.log("Game instance created");
    game.generateLevels();
    console.log("Levels generated");
    game.displayLevel();
    console.log("Initial level displayed");
    game.startTimer();
    console.log("Timer started");
    const setting_btn = document.getElementById("save-settings");
    const settingsBlock = document.getElementById("settings-block");
    setting_btn.addEventListener("click", () => {
      game.saveSettings();
      settingsBlock.classList.remove("open");
    });
  } catch (error) {
    console.error("Error initializing game:", error);
  }
});
