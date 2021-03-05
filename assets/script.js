const highScoreElement = document.getElementById('highScore');
const timerDisplay = document.getElementById('time-remaining');
const landingPage = document.getElementById('landing-container');
const startQuiz = document.getElementById('start-button');
const submitInitials = document.getElementById('submit-initials');
const createUl = document.createElement("ul");
const questionsPrompt = document.getElementById('question-prompt');
const questionsElement = document.getElementById('question');
const progressText = document.querySelector('#progressText')
const choices = Array.from(document.querySelectorAll('.choice-text'));

let secondsLeft = 120;
let highScore = 0;
let scorePoints = 100;
let maxQuestions = 5;
let questionIndex = 0;
let myTimer;
let currentQuestion = {};
underScoreArray = [];

let questions = [
    {
        question: "What is the correct definition of an HTML element?",
        choice1: "The second, or closing, HTML tag. Closing tags have a forward slash (/) inside them.",
        choice2: "HTML code that does not require opening or closing tags.",
        choice3: "An HTML tag and the content that it contains or marks up.",
        choice4: "The first, opening, HTML tag",
        answer: 3,
    },
    {
        question: "What's the difference between <embed> and <video>?",
        choice1: "<video> can only be used for video, while <embed> can be used for any type of media.",
        choice2: "<embed> does not support video while <video> does.",
        choice3: "<embed> is used in the header of the document while <video> can be used anywhere.",
        choice4: "<video> is semantic element while <embed> is not.",
        answer: 1,
    },
    {
        question: "Why is the <div> tag not semantic?",
        choice1: "It requires a closing tag.",
        choice2: "It provides context as to what content is inside of the tag.",
        choice3: "It provides no context as to what the content is inside the tag.",
        choice4: "It can be used multiple times throughout the code.",
        answer: 3,
    },
    {
        question: "What is the purpose of indentation and whitespace?",
        choice1: "To comment out code you don't need.",
        choice2: "To make code in an HTML file more readable",
        choice3: "To change the display of elements in the browser.",
        choice4: "To make sure the browser correctly interprets nested elements in an HTML file.",
        answer: 2,
    },
    {
        question: "Why should the document type declaration be included in all HTML documents?",
        choice1: "To specify what content will display in the browser.",
        choice2: "Without it, the web page will not be allowed on the internet.",
        choice3: "To specify the HTML standard being used in the content.",
        choice4: "Without it, any HTML code is invalid.",
        answer: 3,
    }
]

startQuiz.addEventListener("click", function() {

    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];

    function startGame() {
        underScoreArray = [];
        let secondsLeft = 120;
        timerDisplay.textContent = secondsLeft; 
        }
        myTimer = setInterval(alertTime, 1000);
    
    function alertTime() {
        if (secondsLeft > 0) {
            secondsLeft-- ;
            return timerDisplay.textContent = secondsLeft;
        }
        clearInterval(myTimer); 
    }
    startGame()
    getNewQuestion();
});













// Placeholder code to see how to get the questions to show up for the user.
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(scorePoints)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}
// Placeholder code to see how to get the questions to show up for the user.
