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
h1El.innerHTML = "Coding Quiz Challenge";
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
    h1El.innerHTML = "<h2>Question 1</h2>";
    quizEl.innerHTML = "Commonly used data types DO Not Include:";
    
};


buttonEl.onclick = beginQuiz();