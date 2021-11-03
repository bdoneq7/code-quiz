var body = document.body;
var headerEl = document.createElement("div");
var headerHighScoreEl = document.createElement("div");
var headerTimeEl = document.createElement("div");
var h1El = document.createElement("h1");
var quizEl = document.createElement("div");
var startQuizEl = document.createElement("div");
var buttonEl = document.querySelector("#start-quiz");

headerEl.textContent = "";
headerHighScoreEl.textContent = "View High Scores";
headerTimeEl.textContent = "Time:";
h1El.innerHTML = "Coding Quiz Challenge";
quizEl.innerHTML = "Try to answer the following code-related questions within the time limit.\r\n"; 
quizEl.innerHTML += "Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startQuizEl.textContent = "Start Quiz";

body.appendChild(headerEl);
headerEl.appendChild(headerHighScoreEl);
headerEl.appendChild(headerTimeEl);
body.appendChild(h1El);
body.appendChild(quizEl);
quizEl.appendChild(startQuizEl);

headerEl.setAttribute("style", "z-index: 9999; display: flex; width: 100%; padding: 30px 25px; background-color: #34495E; border-bottom: 5px solid #497980; color: #ffffff;");
headerHighScoreEl.setAttribute("style", "flex: 1; text-align: left; color: #ffffff;");
headerTimeEl.setAttribute("style", "flex: 1; text-align:right; color: #ffffff;");
h1El.setAttribute("style", "margin: auto; margin-bottom: 0; margin-top: 30px; width:50%; text-align:center;");
quizEl.setAttribute("style", "white-space: pre-line; margin:auto; margin-top: 20px; width:50%; text-align:center; height: 200px;");
startQuizEl.setAttribute("style", "margin:auto; margin-top: 20px; width:15%; text-align:center; height: 25px; background-color: #34495E; color: #ffffff; border: 2px solid #497980; border-radius: 15px;");

var beginQuiz = function () {
    h1El.innerHTML = "<h2>Question 1</h2>";
    quizEl.innerHTML = "Commonly used data types DO Not Include:";
    var q1a1El = document.createElement("div");
    q1a1El.innerHTML = "1. Strings";
    

};
