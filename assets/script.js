const highScoreElement = document.getElementById('highScore');
const timerDisplay = document.getElementById('time-remaining');
const landingPage = document.getElementById('landing-container');
const startQuiz = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const pElement = document.querySelector('p')
const submitInitials = document.getElementById('submit-initials');
const createUl = document.createElement("ul");
const questionsContainer = document.getElementById('question-container');
const choices = Array.from(document.querySelectorAll('.box'));
const questionElement = document.getElementById('question');
const questionButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions;
let currentQuestionIndex;
let secondsLeft = 120;
let highScore = 0;
let scorePoints = 100;
let myTimer;
let currentQuestion = {};
underScoreArray = [];

let questions = [{
        question: "What is the correct definition of an HTML element?",
        answer: [
            { text: "The second, or closing, HTML tag. Closing tags have a forward slash (/) inside them.", correct: false},
            { text: "HTML code that does not require opening or closing tags.", correct: false },
            { text: "An HTML tag and the content that it contains or marks up.", correct: true },
            { text: "The first, opening, HTML tag", correct: false },
        ],
    },
    {
        question: "What's the difference between <embed> and <video>?",
        answer: [
            { text: "<video> can only be used for video, while <embed> can be used for any type of media.", correct: true},
            { text: "<embed> does not support video while <video> does.", correct: false },
            { text: "<embed> is used in the header of the document while <video> can be used anywhere.", correct: false },
            { text: "<video> is semantic element while <embed> is not.", correct: false },
        ],
    },
    {
        question: "Why is the <div> tag not semantic?",
        answer: [
            { text: "It requires a closing tag.", correct: false },
            { text: "It provides context as to what content is inside of the tag.", correct: false },
            { text: "It provides no context as to what the content is inside the tag.", correct: true },
            { text: "It can be used multiple times throughout the code.", correct: false },
        ],
    },
    {
        question: "What is the purpose of indentation and whitespace?",
        answer: [
            { text: "To comment out code you don't need.", correct: false },
            { text: "To make code in an HTML file more readable", correct: true },
            { text: "To change the display of elements in the browser.", correct: false },
            { text: "To make sure the browser correctly interprets nested elements in an HTML file.", correct: false },
        ],
    },
    {
        question: "Why should the document type declaration be included in all HTML documents?",
        answer: [
            { text: "To specify what content will display in the browser.", correct: false },
            { text: "Without it, the web page will not be allowed on the internet.", correct: false },
            { text: "To specify the HTML standard being used in the content.", correct: true },
            { text: "Without it, any HTML code is invalid.", correct: false },
        ],
    }
]

startQuiz.addEventListener("click", function () {

    startQuiz.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionsContainer.classList.remove('hide')
    setNextQuestion()

    function startTimer() {
        underScoreArray = [];
        let secondsLeft = 120;
        timerDisplay.textContent = secondsLeft;
    }
    myTimer = setInterval(alertTime, 1000);

    function alertTime() {
        if (secondsLeft > 0) {
            secondsLeft--;
            return timerDisplay.textContent = secondsLeft;
        }
        clearInterval(myTimer);
    }
    startTimer()
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', SelectAnswer)
        questionButtonsElement.appendChild(button)
    })
}

function SelectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(questionButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide')
    } else {
        startQuiz.innerText = 'Restart'
        startQuiz.classList.remove('hide')
        pElement.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(questionButtonsElement.firstChild) {
        questionButtonsElement.removeChild
        (questionButtonsElement.firstChild)
    }
}
