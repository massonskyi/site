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
  PHRASE: "phrase",
};
const heartSvg = `            <svg height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 512.001 512.001" xml:space="preserve">
            <path style="fill:#FF6465;" d="M255.999,481.082c433.24-254.98,206.466-538.165,0-424.214
              C49.534-57.082-177.24,226.103,255.999,481.082z"/>
            <path style="fill:#E65A5B;" d="M255.999,415.158c-74.542-47.582-130.055-98.879-161.536-149.493
              c-25.947-41.717-34.916-81.185-25.937-114.141c10.656-39.114,46.609-64.387,91.596-64.387c22.488,0,46.248,6.553,68.712,18.951
              l27.165,14.993l27.165-14.993c22.464-12.398,46.224-18.951,68.713-18.951c44.976,0,80.921,25.273,91.578,64.387
              c8.978,32.958,0.011,72.429-25.934,114.146C386.045,316.286,330.535,367.579,255.999,415.158z"/>
            <g style="opacity:0.1;">
              <path d="M144.215,275.078c-26.301-53.008-32.506-101.363-17.944-139.841c7.625-20.147,20.848-36.489,37.87-48.026
                c-1.344-0.046-2.685-0.073-4.02-0.073c-44.987,0-80.94,25.273-91.595,64.387c-8.98,32.956-0.01,72.425,25.936,114.141
                c30.363,48.817,83.088,98.268,153.673,144.408C201.249,364.644,166.019,319.023,144.215,275.078z"/>
            </g>
            <path d="M385.086,25.045c-42.308-8.039-86.818-0.554-129.025,21.643c-44.143-23.166-92.19-30.35-135.812-20.21
              C76.742,36.589,41.166,62.53,20.077,99.522c-16.549,29.031-37.84,90.566,5.521,176.513c17.926,35.533,45.013,70.932,80.508,105.216
              c38.734,37.412,87.653,73.614,145.399,107.599c1.407,0.828,2.981,1.242,4.557,1.242s3.151-0.413,4.557-1.242
              c34.185-20.118,65.579-41.223,93.31-62.728c3.921-3.042,4.635-8.686,1.595-12.607c-3.041-3.921-8.687-4.634-12.606-1.595
              c-25.895,20.081-55.092,39.828-86.855,58.744c-104.911-62.486-179-132.513-214.421-202.724
              c-29.334-58.145-31.448-114.796-5.953-159.518c18.58-32.59,50.055-55.476,88.629-64.441c40.727-9.465,85.974-2.088,127.404,20.778
              c2.703,1.492,5.981,1.492,8.684,0c39.78-21.955,81.738-29.581,121.327-22.06c36.813,6.994,68.217,26.812,88.431,55.802
              c23.77,34.09,30.029,78.381,17.627,124.713c-14.729,55.025-55.306,112.492-117.342,166.187c-3.752,3.248-4.162,8.922-0.914,12.674
              c3.247,3.752,8.922,4.161,12.674,0.914c64.767-56.058,107.28-116.616,122.942-175.129c13.796-51.537,6.606-101.127-20.245-139.637
              C461.99,55.357,426.541,32.921,385.086,25.045z"/>
            <path d="M93.9,123.345c3.326-3.683,3.037-9.365-0.645-12.691c-3.679-3.325-9.362-3.038-12.691,0.646
              c-9.807,10.857-16.752,23.605-20.643,37.889c-9.654,35.427-0.325,77.355,26.977,121.249
              c32.004,51.455,88.829,104.127,164.331,152.321c1.474,0.942,3.155,1.411,4.834,1.411c1.68,0,3.361-0.471,4.834-1.411
              c75.501-48.195,132.321-100.864,164.319-152.316c27.298-43.895,36.624-85.824,26.972-121.254
              c-11.753-43.137-51.102-71.01-100.247-71.01c-24.005,0-49.267,6.939-73.056,20.069l-22.823,12.597l-22.823-12.597
              c-23.788-13.13-49.049-20.069-73.054-20.069c-17.045,0-33.032,3.325-47.521,9.884c-4.52,2.046-6.527,7.371-4.481,11.891
              c2.049,4.52,7.369,6.527,11.892,4.481c12.144-5.497,25.638-8.285,40.11-8.285c20.975,0,43.233,6.167,64.37,17.832l27.165,14.993
              c2.703,1.492,5.981,1.492,8.684,0l27.165-14.993c21.138-11.666,43.397-17.832,64.373-17.832c40.804,0,73.348,22.674,82.907,57.763
              c8.306,30.483-0.303,67.496-24.894,107.038c-29.914,48.099-83.056,97.657-153.892,143.55
              c-70.839-45.894-123.986-95.452-153.906-143.555c-24.593-39.54-33.202-76.552-24.896-107.034
              C80.404,142.374,86.003,132.089,93.9,123.345z"/>
            </svg>`
const breakHeartSvg = `
            <svg fill="#000000" width="50px" height="50px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>heart-broken-solid</title>
                <path d="M33,7.64c-1.34-2.75-5.2-5-9.69-3.69A11.55,11.55,0,0,0,18.19,7.5a16.89,16.89,0,0,0-2.48,4.56L22.27,15,16.7,20.26,19,23l-1.57,1.34-3.6-4.22,4.74-4.51-5.44-2.41a19.49,19.49,0,0,1,2.3-5.5,14.77,14.77,0,0,1,1.06-1.54l.06,0a9.66,9.66,0,0,0-3.89-2.18C8.19,2.66,4.34,4.89,3,7.64c-1.88,3.85-1.1,8.18,2.32,12.87C8,24.18,11.83,27.9,17.39,32.22a1,1,0,0,0,1.23,0c5.55-4.31,9.39-8,12.07-11.71C34.1,15.82,34.88,11.49,33,7.64Z" class="clr-i-solid clr-i-solid-path-1"></path>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
            </svg>
        `
class QuestionGenerator {
  static generateQuestions(difficulty) {
    const questions = {
      easy: {
        choiceQuestions: [
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Какая столица у Франции?",
            options: ["Париж", "Лондон", "Берлин", "Мадрид"],
            correctAnswer: "Париж",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Сколько будет 2 + 2 ?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Какая планета является самой большой в нашей Солнечной системе?",
            options: ["Земля", "Марс", "Юпитер", "Сатурн"],
            correctAnswer: "Юпитер",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Какая страна самая маленькая в мире?",
            options: ["Город Ватикан", "Монако", "Лихтенштейн", "Сан-Марино"],
            correctAnswer: "Город Ватикан",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Какова химическая формула воды?",
            options: ["H2O", "CO2", "O2", "N2"],
            correctAnswer: "H2O",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Какова температура кипения воды?",
            options: ["0°C", "50°C", "100°C", "150°C"],
            correctAnswer: "100°C",
          },
        ],
        textQuestions: [
          {
            type: QUESTION_TYPES.TEXT,
            question: "Какого цвета небо в ясный день?",
            correctAnswer: "синий",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Сколько дней в неделе?",
            correctAnswer: "7",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Столица Японии?",
            correctAnswer: "Токио",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Какой океан самый большой на Земле?",
            correctAnswer: "Тихий",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Какова химическая формула поваренной соли?",
            correctAnswer: "NaCl",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Кто написал 'Ромео и Джульетту'?",
            correctAnswer: "Уильям Шекспир",
          },
        ],
        sortingQuestions: [
          {
            type: QUESTION_TYPES.SORT,
            question: "Отсортируйте числа в порядке возрастания: 5, 3, 1, 4, 2",
            correctAnswer: [1, 2, 3, 4, 5],
          },
          {
            type: QUESTION_TYPES.SORT,
            question:
              "Отсортируйте слова по алфавиту: яблоко, банан, вишня, финик",
            correctAnswer: ["яблоко", "банан", "вишня", "финик"],
          },
          {
            type: QUESTION_TYPES.SORT,
            question:
              "Отсортируйте планеты по размеру: Меркурий, Венера, Земля, Юпитер",
            correctAnswer: ["Меркурий", "Венера", "Земля", "Юпитер"],
          },
          {
            type: QUESTION_TYPES.SORT,
            question:
              "Отсортируйте элементы по атомному номеру: Водород, Гелий, Литий, Бериллий",
            correctAnswer: ["Водород", "Гелий", "Литий", "Бериллий"],
          },
          {
            type: QUESTION_TYPES.SORT,
            question:
              "Отсортируйте цвета радуги: Красный, Оранжевый, Желтый, Зеленый, Голубой, Синий, Фиолетовый",
            correctAnswer: [
              "Красный",
              "Оранжевый",
              "Желтый",
              "Зеленый",
              "Голубой",
              "Синий",
              "Фиолетовый",
            ],
          },
          {
            type: QUESTION_TYPES.SORT,
            question:
              "Отсортируйте дни недели: Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье",
            correctAnswer: [
              "Понедельник",
              "Вторник",
              "Среда",
              "Четверг",
              "Пятница",
              "Суббота",
              "Воскресенье",
            ],
          },
        ],
        phraseQuestions: [
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'собака', 'бегает', 'в', 'парке'",
            options: ["собака", "бегает", "в", "парке"],
            correctAnswer: ["собака", "бегает", "в", "парке"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'кот', 'спит', 'на', 'диване'",
            options: ["кот", "спит", "на", "диване"],
            correctAnswer: ["кот", "спит", "на", "диване"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'дети', 'играют', 'в', 'песочнице'",
            options: ["дети", "играют", "в", "песочнице"],
            correctAnswer: ["дети", "играют", "в", "песочнице"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'птицы', 'поют', 'на', 'деревьях'",
            options: ["птицы", "поют", "на", "деревьях"],
            correctAnswer: ["птицы", "поют", "на", "деревьях"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'рыба', 'плавает', 'в', 'реке'",
            options: ["рыба", "плавает", "в", "реке"],
            correctAnswer: ["рыба", "плавает", "в", "реке"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'солнце', 'светит', 'ярко', 'в', 'небе'",
            options: ["солнце", "светит", "ярко", "в", "небе"],
            correctAnswer: ["солнце", "светит", "ярко", "в", "небе"],
          },
        ],
      },
      medium: {
        choiceQuestions: [
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Какая планета известна как Красная планета?",
            options: ["Земля", "Марс", "Юпитер", "Сатурн"],
            correctAnswer: "Марс",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "В каком году была основана Организация Объединенных Наций (ООН)?",
            options: ["24 октября 1945 года", "11 сентября 2001", "1 ноября 1955 года", "1 января 2008"],
            correctAnswer: "24 октября 1945 года",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Какова химическая формула золота?",
            options: ["Au", "Ag", "Fe", "Cu"],
            correctAnswer: "Au",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Кто разработал теорию относительности?",
            options: [
              "Альберт Эйнштейн",
              "Исаак Ньютон",
              "Галилео Галилей",
              "Нильс Бор",
            ],
            correctAnswer: "Альберт Эйнштейн",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Столица Австралии?",
            options: ["Сидней", "Мельбурн", "Канберра", "Брисбен"],
            correctAnswer: "Канберра",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question:
              "Какова температура кипения воды при стандартном атмосферном давлении?",
            options: ["0°C", "50°C", "100°C", "150°C"],
            correctAnswer: "100°C",
          },
        ],
        textQuestions: [
          {
            type: QUESTION_TYPES.TEXT,
            question: "Какая планета в Солнечной системе имеет самый короткий год?",
            correctAnswer: "Меркурий",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Кто открыл пенициллин?",
            correctAnswer: "Александр Флеминг",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Кто был первым президентом США?",
            correctAnswer: "Джордж Вашингтон",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Какая река является самой длинной в мире?",
            correctAnswer: "Амазонка",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Кто написал пьесу 'Гамлет'?",
            correctAnswer: "Уильям Шекспир",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Кто написал 'Убить пересмешника'?",
            correctAnswer: "Харпер Ли",
          },
        ],
        sortingQuestions: [
          {
            type: QUESTION_TYPES.SORT,
            question:
              "Отсортируйте планеты по размеру: Меркурий, Венера, Земля, Юпитер",
            correctAnswer: ["Меркурий", "Венера", "Земля", "Юпитер"],
          },
          {
            type: QUESTION_TYPES.SORT,
            question:
              "Расположи города по алфавиту: Москва, Париж, Лондон, Берлин, Токио",
            correctAnswer: ["Берлин", "Лондон", "Москва", "Париж","Токио"],
          },
          {
            type: QUESTION_TYPES.SORT,
            question:
              "Расположи животных по алфавиту: тигр, лев, слон, жираф, носорог",
            correctAnswer: [
              "жираф",
              "лев",
              "носорог",
              "слон",
              "тигр",
            ],
          },
          {
            type: QUESTION_TYPES.SORT,
            question:
              "Расположи химические элементы по атомному номеру: кислород, углерод, азот, водород, гелий",
            correctAnswer: [
              "водород",
              "гелий",
              "углерод",
              "азот",
              "кислород",
            ],
          },
          {
            type: QUESTION_TYPES.SORT,
            question:
              "Отсортируйте числа в порядке убывания: 10, 20, 30, 40, 50",
            correctAnswer: [50, 40, 30, 20, 10],
          },
          {
            type: QUESTION_TYPES.SORT,
            question:
              "Отсортируй слова по количеству букв (по возрастанию): книга, стол, дом, шкаф, стул",
            correctAnswer: ["дом", "стул", "стол", "книга", "шкаф"],
          },
        ],
        phraseQuestions: [
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'ученые', 'изучают', 'космос', 'с', 'помощью', 'телескопов'",
            options: ["ученые", "изучают", "космос", "с", "помощью", "телескопов"],
            correctAnswer: ["ученые", "изучают", "космос", "с", "помощью", "телескопов"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'музыканты', 'играют', 'на', 'гитарах', 'в', 'парке'",
            options: ["музыканты", "играют", "на", "гитарах", "в", "парке"],
            correctAnswer: ["музыканты", "играют", "на", "гитарах", "в", "парке"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'туристы', 'путешествуют', 'по', 'горам', 'с', 'гидом'",
            options: ["туристы", "путешествуют", "по", "горам", "с", "гидом"],
            correctAnswer: ["туристы", "путешествуют", "по", "горам", "с", "гидом"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'художники', 'рисуют', 'картины', 'в', 'мастерской', 'с', 'красками'",
            options: ["художники", "рисуют", "картины", "в", "мастерской", "с", "красками"],
            correctAnswer: ["художники", "рисуют", "картины", "в", "мастерской", "с", "красками"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'спортсмены', 'тренируются', 'в', 'спортзале', 'с', 'тренером'",
            options: ["спортсмены", "тренируются", "в", "спортзале", "с", "тренером"],
            correctAnswer: ["спортсмены", "тренируются", "в", "спортзале", "с", "тренером"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'повара', 'готовят', 'еду', 'в', 'ресторане', 'с', 'ингредиентами'",
            options: ["повара", "готовят", "еду", "в", "ресторане", "с", "ингредиентами"],
            correctAnswer: ["повара", "готовят", "еду", "в", "ресторане", "с", "ингредиентами"],
          },
        ],
      },
      hard: {
        choiceQuestions: [
          {
            type: QUESTION_TYPES.CHOICE,
            question: "В каком году началась Первая мировая война?",
            options: ["1914", "1905", "1939", "1918"],
            correctAnswer: "1914",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Какой математический объект описывает уравнение $ х^2 + y^2 = 1 $ в декартовой системе координат?",
            options: [
              "Парабола",
              "Гипербола",
              "Окружность",
              "Эллипс",
            ],
            correctAnswer: "Окружность",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Какой химический элемент имеет самую высокую температуру плавления?",
            options: ["Платина", "Вольфрам", "Титан", "Уран"],
            correctAnswer: "Вольфрам",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question:
              "Какой древний философ известен своей концепцией 'идеальных форм' или 'идей'?",
            options: ["Аристотель", "Сократ", "Платон", "Эпикур"],
            correctAnswer: "Платон",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Какой композитор написал симфонию №9, также известную как 'Хоровая симфония'?",
            options: ["Вольфганг Амадей Моцарт", "Иоганн Себастьян Бах", "Людвиг ван Бетховен", "Пётр Ильич Чайковский"],
            correctAnswer: "Людвиг ван Бетховен",
          },
          {
            type: QUESTION_TYPES.CHOICE,
            question: "Какой физик предложил концепцию квантовой механики и в каком году он получил Нобелевскую премию по физике за свои работы в этой области?",
            options: ["Альберт Эйнштейн, Нильс Бор, 1922", "Вернер Гейзенберг, 1932", "Макс Планк, 1918"],
            correctAnswer: "Макс Планк, 1918",
          },
        ],
        textQuestions: [
          {
            type: QUESTION_TYPES.TEXT,
            question: "Какой физик предложил принцип неопределенности и в каком году он получил Нобелевскую премию по физике?",
            correctAnswer: "Вернер Гейзенберг, 1932",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Какой химический элемент имеет самую высокую электроотрицательность?",
            correctAnswer: "Фтор",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Кто написал 'Фауст'?",
            correctAnswer: "Иоганн Вольфганг фон Гёте",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Какой астроном открыл законы планетарного движения?",
            correctAnswer: "Иоганн Кеплер",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Какой химический элемент имеет самую высокую плотность?",
            correctAnswer: "Осмий",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Кто написал 'Война и мир'?",
            correctAnswer: "Лев Толстой",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Какой математик известен своими работами по теории чисел и в каком году он родился?",
            correctAnswer: "Карл Фридрих Гаусс, 1777",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Какой химический элемент имеет самую высокую теплопроводность?",
            correctAnswer: "Серебро",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Кто написал 'Дон Кихот'?",
            correctAnswer: "Мигель де Сервантес",
          },
          {
            type: QUESTION_TYPES.TEXT,
            question: "Какой физик предложил теорию струн?",
            correctAnswer: "Теория струн была разработана множеством ученых, включая Леонарда Сасскинда и Эдварда Виттена",
          }
        ],
        sortingQuestions: [
          {
            type: QUESTION_TYPES.SORT,
            question: "Отсортируйте элементы по атомному номеру: Уран, Плутоний, Нептуний, Америций, Кюрий",
            correctAnswer: ["Нептуний", "Плутоний", "Америций", "Кюрий", "Уран"],
          },
          {
            type: QUESTION_TYPES.SORT,
            question: "Отсортируйте планеты по средней плотности: Сатурн, Юпитер, Нептун, Уран, Земля",
            correctAnswer: ["Сатурн", "Юпитер", "Уран", "Нептун", "Земля"],
          },
          {
            type: QUESTION_TYPES.SORT,
            question: "Отсортируйте философов по году рождения: Иммануил Кант, Фридрих Ницше, Жан-Жак Руссо, Рене Декарт, Джон Локк",
            correctAnswer: ["Рене Декарт", "Джон Локк", "Жан-Жак Руссо", "Иммануил Кант", "Фридрих Ницше"],
          },
          {
            type: QUESTION_TYPES.SORT,
            question: "Отсортируйте композиторов по году рождения: Иоганн Себастьян Бах, Вольфганг Амадей Моцарт, Людвиг ван Бетховен, Пётр Ильич Чайковский, Игорь Стравинский",
            correctAnswer: ["Иоганн Себастьян Бах", "Вольфганг Амадей Моцарт", "Людвиг ван Бетховен", "Пётр Ильич Чайковский", "Игорь Стравинский"],
          },
          {
            type: QUESTION_TYPES.SORT,
            question: "Отсортируйте числа по убыванию: 3456, 7890, 1234, 5678, 9012",
            correctAnswer: [9012, 7890, 5678, 3456, 1234],
          },
          {
            type: QUESTION_TYPES.SORT,
            question: "Отсортируйте слова по количеству букв (по убыванию): невероятный, удивительный, потрясающий, захватывающий, восхитительный",
            correctAnswer: ["невероятный", "удивительный", "потрясающий", "захватывающий", "восхитительный"],
          },
          {
            type: QUESTION_TYPES.SORT,
            question: "Отсортируйте химические элементы по атомному номеру: Франций, Радий, Актиний, Торий, Протактиний",
            correctAnswer: ["Актиний", "Торий", "Протактиний", "Радий", "Франций"],
          },
          {
            type: QUESTION_TYPES.SORT,
            question: "Отсортируйте страны по площади (по убыванию): Россия, Канада, Китай, США, Бразилия",
            correctAnswer: ["Россия", "Канада", "Китай", "США", "Бразилия"],
          },
          {
            type: QUESTION_TYPES.SORT,
            question: "Отсортируйте числа по возрастанию: -123, 456, -789, 1011, -234",
            correctAnswer: [-789, -234, -123, 456, 1011],
          },
          {
            type: QUESTION_TYPES.SORT,
            question: "Отсортируйте животных по алфавиту: гиппопотам, носорог, жираф, лев, слон",
            correctAnswer: ["гиппопотам", "жираф", "лев", "носорог", "слон"],
          }
        ],
        phraseQuestions: [
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'астрономы', 'наблюдают', 'за', 'звездами', 'с', 'помощью', 'мощных', 'телескопов'",
            options: ["астрономы", "наблюдают", "за", "звездами", "с", "помощью", "мощных", "телескопов"],
            correctAnswer: ["астрономы", "наблюдают", "за", "звездами", "с", "помощью", "мощных", "телескопов"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'биологи', 'изучают', 'клетки', 'под', 'микроскопом', 'в', 'лаборатории'",
            options: ["биологи", "изучают", "клетки", "под", "микроскопом", "в", "лаборатории"],
            correctAnswer: ["биологи", "изучают", "клетки", "под", "микроскопом", "в", "лаборатории"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'археологи', 'раскапывают', 'древние', 'артефакты', 'в', 'пустыне', 'с', 'инструментами'",
            options: ["археологи", "раскапывают", "древние", "артефакты", "в", "пустыне", "с", "инструментами"],
            correctAnswer: ["археологи", "раскапывают", "древние", "артефакты", "в", "пустыне", "с", "инструментами"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'инженеры', 'разрабатывают', 'новые', 'технологии', 'в', 'лаборатории', 'с', 'командой'",
            options: ["инженеры", "разрабатывают", "новые", "технологии", "в", "лаборатории", "с", "командой"],
            correctAnswer: ["инженеры", "разрабатывают", "новые", "технологии", "в", "лаборатории", "с", "командой"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'писатели', 'создают', 'романы', 'в', 'тишине', 'с', 'вдохновением'",
            options: ["писатели", "создают", "романы", "в", "тишине", "с", "вдохновением"],
            correctAnswer: ["писатели", "создают", "романы", "в", "тишине", "с", "вдохновением"],
          },
          {
            type: QUESTION_TYPES.PHRASE,
            question: "Составьте фразу из слов: 'музыканты', 'сочиняют', 'мелодии', 'в', 'студии', 'с', 'инструментами'",
            options: ["музыканты", "сочиняют", "мелодии", "в", "студии", "с", "инструментами"],
            correctAnswer: ["музыканты", "сочиняют", "мелодии", "в", "студии", "с", "инструментами"],
          },
        ],
      },
    };

    return questions[difficulty];
  }
}

class QuizGame {
  constructor() {
    this.levels = [];
    this.currentLevelId = "level-1";
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.timer = null;
    this.globalTimer = null; // Interval for the global game timer
    this.startTimeOnLvl = null;
    this.globalGameTime = null;
    this.levelResults = [];
    this.currentLevelAnswers = [];
    this.isLastLevel = false;
    this.username =
      this.getLocalStorage("playerName") ||
      this.getLocalStorage("username") ||
      "Guest";
    this.questionDifficulty =
      this.getLocalStorage("questionDifficulty") || DIFFICULTY_LEVELS.EASY;
    this.timePerQuestion =
      parseInt(this.getLocalStorage("timePerQuestion")) || 15;

    this.circumference = 2 * Math.PI * 90; // Длина окружности
    this.hearts = [];
    this.breakHearts = [];

    this.initializeElements();
    this.bindEvents();
    this.addHearts(this.questionDifficulty)
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
      timer: document.getElementById('timer-text'),
      progressCircle: document.getElementById('progress-circle'),
      settingsButton: document.getElementById("save-settings"),
      settingsForm: {
        timeInput: document.getElementById("time-per-question"),
        difficultySelect: document.getElementById("question-difficulty"),
      },
    };

    Object.entries(this.elements).forEach(([key, element]) => {
      if (!element && !key.startsWith("question")) {
        console.error(`Required element not found: ${key}`);
        throw new Error(`Required element not found: ${key}`);
      }
    });
  }

  bindEvents() {
    this.elements.settingsButton.addEventListener("click", () =>
      this.saveSettings()
    );

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
    console.log("Getting current level:", this.currentLevelId);
    const currentLevel = this.levels.find(level => level.id === this.currentLevelId);
    if (!currentLevel) {
      console.error("Level not found:", this.currentLevelId);
    }
    return currentLevel;
  }
  getCurrentQuestion() {
    console.log("Getting current question for level:", this.currentLevelId);
    const currentLevel = this.getCurrentLevel();
    if (currentLevel) {
      return currentLevel.questions[this.currentQuestionIndex];
    }
    console.error("Current level not found:", this.currentLevelId);
    return null;
  }
  // Функция для добавления сердец
  addHearts(level) {
      const heartContainer = document.getElementById('heart-container');
      heartContainer.innerHTML = ''; // Очистить контейнер
      let heartsCount = level === DIFFICULTY_LEVELS.EASY ? 3 : level === DIFFICULTY_LEVELS.MEDIUM ? 2 : 1;
      this.hearts = [];
      for (let i = 0; i < heartsCount; i++) {
          const heart = document.createElement('svg');
          heart.classList.add('heart', 'full');
          heart.setAttribute('viewBox', '0 0 24 24');
          heart.innerHTML = heartSvg;
          heartContainer.appendChild(heart);
          this.hearts.push(heart);
      }
  }

  // Функция для анимации сердца при неправильном ответе
  animateHeart(heart) {
    heart.classList.add('beating');
    setTimeout(() => {
        heart.classList.remove('full');
        heart.classList.add('empty');
        heart.innerHTML = breakHeartSvg;
    }, 500);
    this.hearts.pop(heart)
  }

  getContainerByLevel(levelId) {
    const levelNumber = levelId.split('-')[1];
    const container = document.getElementById(`question-container-${levelNumber}`);
    if (!container) {
      console.error("Container not found for level:", levelId);
    }
    return container;
  }
  
  renderChoiceQuestion(question, answerContainer) {
    question.options.forEach((option) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("quiz-option");
      optionElement.textContent = option;
      optionElement.dataset.answer = option;
      optionElement.addEventListener("click", () => this.checkAnswer(option));
      answerContainer.appendChild(optionElement);
    });
  }

  renderTextQuestion(question, answerContainer) {
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.className = "quiz-input";
    inputElement.placeholder = "Введите ваш ответ";
    inputElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.checkAnswer(inputElement.value);
      }
    });
    answerContainer.appendChild(inputElement);
  
    const checkButton = document.createElement("button");
    checkButton.textContent = "Проверить";
    checkButton.className = "check-button";
    checkButton.addEventListener("click", () => {
      this.checkAnswer(inputElement.value);
    });
    answerContainer.appendChild(checkButton);
  }

  renderSortQuestion(question, answerContainer) {
    const sortableContainer = document.createElement("div");
    sortableContainer.classList.add("sort-container");
  
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
      const dragging = sortableContainer.querySelector(".dragging");
      const siblings = [
        ...sortableContainer.querySelectorAll(".sort-item:not(.dragging)"),
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
  
    const checkButton = document.createElement("button");
    checkButton.textContent = "Check Order";
    checkButton.className = "check-button";
    checkButton.addEventListener("click", () => {
      const currentOrder = [
        ...sortableContainer.querySelectorAll(".sort-item"),
      ].map((item) => item.textContent);
      this.checkAnswer(currentOrder);
    });
  
    answerContainer.appendChild(sortableContainer);
    answerContainer.appendChild(checkButton);
  }

  renderPhraseQuestion(question, answerContainer) {
    const phraseContainer = document.createElement("div");
    phraseContainer.classList.add("phrase-container");
  
    const shuffled = [...question.options].sort(() => Math.random() - 0.5);
  
    shuffled.forEach((word) => {
      const wordElement = document.createElement("div");
      wordElement.classList.add("phrase-word");
      wordElement.textContent = word;
      wordElement.draggable = true;
      wordElement.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", word);
        wordElement.classList.add("dragging");
      });
      wordElement.addEventListener("dragend", () => {
        wordElement.classList.remove("dragging");
      });
      phraseContainer.appendChild(wordElement);
    });
  
    phraseContainer.addEventListener("dragover", (event) => {
      event.preventDefault();
      const dragging = phraseContainer.querySelector(".dragging");
      const siblings = [
        ...phraseContainer.querySelectorAll(".phrase-word:not(.dragging)"),
      ];
  
      const nextSibling = siblings.find((sibling) => {
        const box = sibling.getBoundingClientRect();
        return event.clientY < box.top + box.height / 2;
      });
  
      if (nextSibling) {
        phraseContainer.insertBefore(dragging, nextSibling);
      } else {
        phraseContainer.appendChild(dragging);
      }
    });
  
    const checkButton = document.createElement("button");
    checkButton.textContent = "Проверить";
    checkButton.className = "check-button";
    checkButton.addEventListener("click", () => {
      const currentOrder = [
        ...phraseContainer.querySelectorAll(".phrase-word"),
      ].map((item) => item.textContent);
      this.checkAnswer(currentOrder);
    });
  
    answerContainer.appendChild(phraseContainer);
    answerContainer.appendChild(checkButton);
  }
  checkAnswer(userAnswer) {
    const currentQuestion = this.getCurrentQuestion();
    let isCorrect = false;
    this.lastUserAnswer = userAnswer;

    if (currentQuestion.type === QUESTION_TYPES.SORT || currentQuestion.type === QUESTION_TYPES.PHRASE) {
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
    feedback.textContent = isCorrect ? "Верно подметил!" : "Ошибся? бывает!";
  
    const currentContainer = this.getContainerByLevel(this.currentLevelId);
    if (currentContainer) {
      currentContainer.appendChild(feedback);
      setTimeout(() => feedback.remove(), 2000);
    } else {
      console.error("Current question container not found:", this.currentLevelId);
    }
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
    if (this.globalTimer) {
      clearInterval(this.globalTimer);
    }
    this.startGlobalTimer();

    this.startTimeOnLvl = Date.now();
    this.timer = setInterval(() => this.updateTimer(), 1000);
  }
  startGlobalTimer() {
    // Start the global timer that runs continuously
    this.globalTimer = setInterval(() => {
      this.globalGameTime++; // Increment the global game time every second
    }, 1000);
  }

  updateTimer() {
    const elapsedTime = Math.floor((Date.now() - this.startTimeOnLvl) / 1000);
    let timeLeft = this.timePerQuestion - elapsedTime;

    // Ensure timeLeft does not go negative
    if (timeLeft < 0) {
      timeLeft = 0;
    }

      // Display remaining time
      this.elements.timer.textContent = this.getSecondsText(timeLeft);

      // Update the progress circle
      const progress = (timeLeft / this.timePerQuestion) * this.circumference;
      this.elements.progressCircle.style.strokeDashoffset = this.circumference - progress;

    if (timeLeft === 0) {
      this.stopTimer();
      this.handleTimeUp();
    }
  }
  getSecondsText(seconds) {
    const lastDigit = seconds % 10;
    const lastTwoDigits = seconds % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${seconds} секунд`; // Исключение для 11-14
    }
    if (lastDigit === 1) {
        return `${seconds} секунда`;
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return `${seconds} секунды`;
    }
    return `${seconds} секунд`;
}
  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
    this.elements.timer.textContent = `${this.timePerQuestion} секунд`;
    this.elements.progressCircle.style.strokeDashoffset = '0';
  }

  handleTimeUp() {
    this.showAnswerFeedback(false);
    const totalTime = this.globalGameTime; // Total global time at the moment the round ends
    this.saveScore(totalTime);
    this.displayGameOver(totalTime);
  }

  displayGameOver(totalTime) {
    this.elements.levelContainer.innerHTML = `
        <div class="game-over">
          <h2>Игра закончена!</h2>
          <p>Итоговый счет: ${this.score}</p>
          <p>Итоговое время: ${totalTime} секунд</p>
          <button onclick="location.reload()">Сыграть снова</button>
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
    // Store the answer result for current question
    this.currentLevelAnswers.push({
      questionNumber: this.currentQuestionIndex + 1,
      question: this.getCurrentQuestion().question,
      correct: isCorrect,
      userAnswer: this.lastUserAnswer,
      correctAnswer: this.getCurrentQuestion().correctAnswer,
    });
  
    if (isCorrect) {
      this.score = this.questionDifficulty === DIFFICULTY_LEVELS.EASY ? this.score + 1
        : this.questionDifficulty === DIFFICULTY_LEVELS.MEDIUM ? this.score + 5
        : this.score + 15;
    } else {
      console.log('failed');
      this.animateHeart(this.hearts[this.hearts.length - 1]);
      if (this.hearts.every(heart => heart.classList.contains('empty'))) {
        this.finishGame();
      }
    }
  
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.getCurrentLevel().questions.length) {
      this.displayQuestion(this.currentLevelId);
      this.startTimer();
    } else {
      this.displayLevelSummary();
    }
  }

  displayLevelSummary() {
    this.stopTimer();
    this.levelResults[this.currentLevelId] = {
        answers: this.currentLevelAnswers,
        score: this.currentLevelAnswers.filter((a) => a.correct).length,
        total: this.currentLevelAnswers.length,
    };

    // Hide all question containers
    Object.values(this.elements.questionContainers).forEach((container) => {
        if (container) container.style.display = "none";
    });

    // Get the summary container
    const summaryContainer = document.getElementById("level-summary");

    // Update summary content
    document.getElementById("summary-level-title").textContent = 
        `Level ${this.currentLevelId.split('-')[1]} Complete!`;
    document.getElementById("summary-level-score").textContent = 
        `Level Score: ${this.levelResults[this.currentLevelId].score} / ${this.levelResults[this.currentLevelId].total}`;
    document.getElementById("summary-total-score").textContent = 
        `Total Score: ${this.score}`;

    // Generate answers table content
    const answersHTML = this.currentLevelAnswers
        .map(
            (answer) => `
                <tr class="${answer.correct ? "correct-answer" : "wrong-answer"}">
                    <td>${answer.question}</td>
                    <td>${Array.isArray(answer.userAnswer) ? answer.userAnswer.join(", ") : answer.userAnswer}</td>
                    <td>${Array.isArray(answer.correctAnswer) ? answer.correctAnswer.join(", ") : answer.correctAnswer}</td>
                    <td>${answer.correct ? "✓" : "✗"}</td>
                </tr>
            `
        )
        .join("");
    document.getElementById("summary-answers").innerHTML = answersHTML;

    // Get button container and remove existing event listeners
    const buttonContainer = document.getElementById("summary-button-container");
    const newButtonContainer = buttonContainer.cloneNode(true);
    buttonContainer.parentNode.replaceChild(newButtonContainer, buttonContainer);

    if (this.currentLevelId !== "level-4") {
        const nextLevelNumber = parseInt(this.currentLevelId.split('-')[1]) + 1;
        newButtonContainer.innerHTML = `
            <button class="next-level-btn">
                Перейти на следующий уровень № ${nextLevelNumber}
            </button>
        `;

        // Add single event listener with cleanup
        const nextLevelButton = newButtonContainer.querySelector('.next-level-btn');
        const handleNextLevel = () => {
            // Remove the event listener immediately to prevent multiple triggers
            nextLevelButton.removeEventListener('click', handleNextLevel);
            
            // Start next level
            this.startNextLevel();
            
            // Hide summary container
            summaryContainer.style.display = "none";
            
            // Start timer for next level
            this.startTimer();
        };

        nextLevelButton.addEventListener('click', handleNextLevel, { once: true });
    } else {
        newButtonContainer.innerHTML = `
            <button class="finish-game-btn">
                Закончить игру
            </button>
        `;

        const finishButton = newButtonContainer.querySelector('.finish-game-btn');
        const handleFinish = () => {
            finishButton.removeEventListener('click', handleFinish);
            this.finishGame();
            summaryContainer.style.display = "none";
        };

        finishButton.addEventListener('click', handleFinish, { once: true });
    }

    // Show summary container
    summaryContainer.style.display = "block";

    // Reset current level answers for next level
    this.currentLevelAnswers = [];

    // Log current state for debugging
    console.log('Level Summary displayed:', {
        currentLevel: this.currentLevelId,
        totalScore: this.score,
        levelResults: this.levelResults[this.currentLevelId]
    });
}
  
  
  
  startNextLevel() {
    this.currentQuestionIndex = 0;
    const currentLevelNumber = parseInt(this.currentLevelId.split('-')[1]);
    this.currentLevelId = `level-${currentLevelNumber + 1}`;
    console.log("Moving to next level:", this.currentLevelId);
    if (this.currentLevelId === "level-5") {
      this.finishGame();
    } else {
      this.displayLevel();
    }
  }

  finishGame() {
    this.stopTimer();
    this.handleTimeUp();
  }

  restart() {
    this.currentLevelId = "level-1";
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.startTime = Date.now();
    this.globalStartTime = Date.now();
    this.generateLevels();
    this.displayLevel();
    this.addHearts(this.questionDifficulty)
    this.startTimer();
  }
  displayLevel() {
    console.log("Displaying level:", this.currentLevelId);
  
    // Скрываем все контейнеры вопросов
    for (let i = 1; i <= 4; i++) {
      const container = document.getElementById(`question-container-${i}`);
      if (container) {
        container.style.display = "none";
      }
    }
  
    // Показываем только текущий контейнер
    const currentContainer = this.getContainerByLevel(this.currentLevelId);
    if (currentContainer) {
      currentContainer.style.display = "block";
      this.displayQuestion(this.currentLevelId);
    } else {
      console.error("Current question container not found:", this.currentLevelId);
    }
  }
  

  displayQuestion(levelId) {
    console.log("Displaying question for level:", levelId);
    const currentQuestion = this.getCurrentQuestion();
    console.log("Current question:", currentQuestion);
  
    if (!currentQuestion) {
      console.error("No question found for level:", levelId);
      return;
    }
  
    const container = this.getContainerByLevel(levelId);
    if (!container) {
      console.error("Container not found for level:", levelId);
      return;
    }
  
    // Создаем или обновляем заголовок и текст вопроса
    let questionTitle = container.querySelector("h3");
    let questionText = container.querySelector("p");
  
    if (!questionTitle) {
      questionTitle = document.createElement("h3");
      container.insertBefore(questionTitle, container.firstChild);
    }
  
    if (!questionText) {
      questionText = document.createElement("p");
      container.insertBefore(questionText, container.firstChild.nextSibling);
    }
  
    questionTitle.textContent = `Вопрос ${this.currentQuestionIndex + 1}`;
    questionText.textContent = currentQuestion.question;
    console.log("Question title and text updated successfully.");
  
    // Создаем или обновляем контейнер для ответов
    let answerContainer = document.getElementById(`question-container-answer-${levelId.split('-')[1]}`);
    if (!answerContainer) {
      answerContainer = document.createElement("div");
      answerContainer.id = `question-container-answer-${levelId.split('-')[1]}`;
      container.appendChild(answerContainer);
    }
  
    // Очищаем предыдущие ответы
    answerContainer.innerHTML = "";
  
    // Отображаем варианты ответа в зависимости от типа вопроса
    if (currentQuestion.type === QUESTION_TYPES.CHOICE) {
      this.renderChoiceQuestion(currentQuestion, answerContainer);
    } else if (currentQuestion.type === QUESTION_TYPES.TEXT) {
      this.renderTextQuestion(currentQuestion, answerContainer);
    } else if (currentQuestion.type === QUESTION_TYPES.SORT) {
      this.renderSortQuestion(currentQuestion, answerContainer);
    } else if (currentQuestion.type === QUESTION_TYPES.PHRASE) {
      this.renderPhraseQuestion(currentQuestion, answerContainer);
    }
  }
  
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
    const allPhraseQuestions = questions.phraseQuestions || [];
  
    const allQuestions = [
      ...allPhraseQuestions,
      ...allChoiceQuestions,
      ...allTextQuestions,
      ...allSortingQuestions,
    ];
    const shuffledQuestions = this.shuffleArray(allQuestions);
    const totalQuestions = shuffledQuestions.length;
    const questionsPerLevel = 6;
  
    if (totalQuestions < 4 * questionsPerLevel) {
      console.warn("Not enough questions to fully populate all levels.");
    }
  
    this.levels = ["level-1", "level-2", "level-3", "level-4"].map((id, index) => {
      const startIndex = index * questionsPerLevel;
      const endIndex = startIndex + questionsPerLevel;
  
      const levelQuestions = shuffledQuestions.slice(startIndex, endIndex);
  
      // Add any leftover questions to the last level
      if (index === 3) {
        levelQuestions.push(...shuffledQuestions.slice(endIndex));
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
