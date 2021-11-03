// Global Variables
var time = 0;
var body = document.body;

// Create HTML Elements
var headerEl = document.createElement("div");
var headerHighScoreEl = document.createElement("div");
var headerTimeEl = document.createElement("div");
var h1El = document.createElement("h1");
var quizEl = document.createElement("div");
var buttonEl = document.createElement("button");

// Generate HTML Element Content
headerEl.textContent = "";
headerHighScoreEl.textContent = "View High Scores";
headerTimeEl.textContent = "Time: " + time + "";
h1El.innerHTML = "<h1>Coding Quiz Challenge</h1>";
quizEl.innerHTML = "Try to answer the following code-related questions within the time limit.\r\n"; 
quizEl.innerHTML += "Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
buttonEl.innerHTML = "Start Quiz";
buttonEl.type = "submit";

// Place HTML Elements on Page
body.appendChild(headerEl);
headerEl.appendChild(headerHighScoreEl);
headerEl.appendChild(headerTimeEl);
body.appendChild(h1El);
body.appendChild(quizEl);
quizEl.appendChild(buttonEl);

// CSS Styles for HTML Elements
headerEl.className = "header";
headerHighScoreEl.className = "highscore";
headerTimeEl.className = "time";
h1El.className = "h1";
quizEl.className = "quiz";
buttonEl.className = "button";

// questionOne Function
var questionOne = function () {

    time = 75;
    headerTimeEl.textContent = "Time: " + time + "";

    h1El.innerHTML = "<h2>Commonly used data types DO Not Include:</h2>";
    quizEl.innerHTML = "";

    var q1A1El = document.createElement("button");
    q1A1El.innerHTML = "1. Strings";
    quizEl.appendChild(q1A1El);
    q1A1El.className = "answer";
    

    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q1A2El = document.createElement("button");
    q1A2El.innerHTML = "2. Booleans";
    quizEl.appendChild(q1A2El);
    q1A2El.className = "answer";
    
    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q1A3El = document.createElement("button");
    q1A3El.innerHTML = "3. Alerts";
    quizEl.appendChild(q1A3El);
    q1A3El.className = "answer";
    
    
    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q1A4El = document.createElement("button");
    q1A4El.innerHTML = "4. Numbers";
    quizEl.appendChild(q1A4El);
    q1A4El.className = "answer";
    
    q1A1El.addEventListener("click", wrongAnswer);
    q1A2El.addEventListener("click", wrongAnswer);
    q1A3El.addEventListener("click", correctAnswer);
    q1A4El.addEventListener("click", wrongAnswer);
    

};

// wrong alert function

var wrongAnswer = function () {
    time = time - 5;
    headerTimeEl.textContent = "Time: " + time + "";
    
    var wrong = document.createElement("div");
    // insert horizontal line
    wrong.innerHTML = "Wrong!";
    quizEl.appendChild(wrong);
    wrong.className = "wrong";
    // call next question
}

// correct alert function

var correctAnswer = function () {
    // insert horizontal line
    correct.innerHTML = "Correct!";
    quizEl.appendChild(correct);
    correct.className = "correct";
    // call next question
}

buttonEl.addEventListener("click", questionOne);
