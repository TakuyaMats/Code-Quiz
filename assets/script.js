var highScoreElement = document.getElementById('highScore');
var timerDisplay = document.getElementById('time-remaining');
var landingPage = document.getElementById('landing-container');
var startQuiz = document.getElementById('start-button');
var submitInitials = document.getElementById('submit-initials');
var createUl = document.createElement("ul");
var questionsPrompt = document.getElementById('question-prompt');
var questionsElement = document.getElementById('question');
var answerElement1 = document.getElementById('answer1');
var answerElement2 = document.getElementById('answer2');
var answerElement3 = document.getElementById('answer3');
var answerElement4 = document.getElementById('answer4');

var secondsLeft = 120;
var highScore = 0;
var questionIndex = 0;
var currentQuestions = 0;
underScoreArray = [];
var myTimer;

var questions = [{
    question: "What is the correct definition of an HTML element?",
    choices: ["The second, or closing, HTML tag. Closing tags have a forward slash (/) inside them.", "HTML code that does not require opening or closing tags.", "An HTML tag and the content that it contains or marks up.", "The first, opening, HTML tag"],
    answer: "An HTML tag and the content that it contains or marks up."
}, ]

startQuiz.addEventListener("click", function() {

    function startGame() {
        underScoreArray = [];
        var secondsLeft = 120;
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
});






function showQuestions() {
    document.getElementById('questionsPrompt').innerHTML = questions[0].title;
}