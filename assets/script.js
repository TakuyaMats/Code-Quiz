// Make var with array and object for questions
// Make list of global variables
// Make a timer function
// Make timer button 
// Make timer trigger with the start button
// Make a function for the page screen to display when completing the quiz or once the timer runs out
// Input local storage initials and score

var highScore = document.getElementById('highScore');
var timeRemaining = document.getElementById('time-remaining');
var landingPage = document.getElementById('landing-container');
var startQuiz = document.getElementById('start-button');
var submitInitials = document.getElementById('submit-initials');
var questionsDiv = document.getElementById('questionsDiv');
var createUl = document.createElement("ul");

var count = 60;
var score = 0;
var questionIndex = 0;

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

// render the question prompt
function generateQuiz(questionIndex) {
    questionsDiv.innerHTML = "";
    createUl.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
}

startQuiz.addEventListener("click", function () {
    var interval = setInterval(function () {
        timeRemaining.innerHTML = count;
        count--;
        if (count === 0) {
            clearInterval(interval);
            alert("You're out of time!");
        }
    }, 5000);
    console.log(interval);
})

var currentQuestions = 0;
function getNextQuestion (userChoice) {
    var userQuestions = question[currentQuestions].answer; {
    
        if (userChoice===userQuestions) {
            console.log("Correct!")
        }
        else {
            console.log("Wrong Answer!")
        }
        getNextQuestion++
    }


}

var userQuestions = document.getElementById("questions");
var userAnswers = document.getElementById("answers");
function answersClicks() {
    var a = document.getElementById("answer1");
    var b = document.getElementById("answer2");
    var c = document.getElementById("answer3");
    var d = document.getElementById("answer4");

    a.addEventListener("click", function());
    b.addEventListener("click", function());
    c.addEventListener("click", function());
    d.addEventListener("click", function());
}