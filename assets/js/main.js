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

// BeginQuiz Function
var beginQuiz = function () {
    h1El.innerHTML = "<h2>Commonly used data types DO Not Include:</h2>";
    quizEl.innerHTML = "";

    var q1a1El = document.createElement("button");
    q1a1El.innerHTML = "1. Strings";
    quizEl.appendChild(q1a1El);
    q1a1El.className = "answer";

    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q1a2El = document.createElement("button");
    q1a2El.innerHTML = "2. Booleans";
    quizEl.appendChild(q1a2El);
    q1a2El.className = "answer";

    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q1a3El = document.createElement("button");
    q1a3El.innerHTML = "3. Alerts";
    quizEl.appendChild(q1a3El);
    q1a3El.className = "answer";

    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q1a4El = document.createElement("button");
    q1a4El.innerHTML = "4. Numbers";
    quizEl.appendChild(q1a4El);
    q1a4El.className = "answer";
    
};

buttonEl.addEventListener("click", beginQuiz);