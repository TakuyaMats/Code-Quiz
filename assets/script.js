var highScore = document.getElementById('highScore');
var timeRemaining = document.getElementById('time-remaining');
var landingPage = document.getElementById('landing-container');
var startQuiz = document.getElementById('start-button');
var submitInitials = document.getElementById('submit-initials');
var questionsDiv = document.getElementById('questionsDiv');
var createUl = document.createElement("ul");
var userQuestions = document.getElementById("questions");
var userAnswers = document.getElementById("answers");

var count = 60;
var score = 0;
var questionIndex = 0;
var currentQuestions = 0;

var questions = [{
        title: "What is the correct definition of an HTML element?",
        choices: ["The second, or closing, HTML tag. Closing tags have a forward slash (/) inside them.", "HTML code that does not require opening or closing tags.", "An HTML tag and the content that it contains or marks up.", "The first, opening, HTML tag"],
        answer: "An HTML tag and the content that it contains or marks up."
    },
    {
        title: "The following code is supposed to display an image, but fails to do so. Why?",
        title: "<img https://www.example.com/laptop.jpg />",
        choices: ["The image URL should be all uppercase", "The <img> tag should be replaced with an <image> tag.", "The <img> tag can only display .png or .svg image formats.", "The src attribute is missing and must be set equal to the image URL, enclosed in double quotation marks."],
        answer: "The src attribute is missing and must be set equal to the image URL, enclosed in double quotation marks."
    }
]

startQuiz.addEventListener("click", function () {

    showQuestions();

    function getNextQuestion(userChoice) {
        let userQuestions = questions[currentQuestions].answer; 
            if (userChoice === userQuestions) {
                console.log("Correct!");
                score++;
            } else {
                console.log("Wrong Answer!")
            }
        currentQuestions++;
        getNextQuestion(currentQuestions);
    }

    var interval = setInterval(function () {
        timeRemaining.innerHTML = count;
        count--;
        if (count === 0) {
            clearInterval(interval);
            alert("You're out of time!");
        }
    }, 5000);
    console.log(interval);
    console.log(getNextQuestion())
    return getNextQuestion;
})

function showQuestions () {
    document.getElementById("questionsPrompt").innerHTML = questions[0].title;
}
