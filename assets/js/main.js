var time = 75;
var stopTime = 0;


// Create HTML Elements
var body = document.body;
var headerEl = document.createElement("div");
var headerHighScoreEl = document.createElement("button");
var headerTimeEl = document.createElement("div");
var h1El = document.createElement("h1");
var quizEl = document.createElement("div");
var buttonEl = document.createElement("button");

// Generate HTML Element Content
headerEl.textContent = "";
headerHighScoreEl.textContent = "View High Scores";
headerTimeEl.textContent = "Time: " + time;
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
headerHighScoreEl.className = "button-long";
headerTimeEl.className = "time";
h1El.className = "h1";
quizEl.className = "quiz-index";
buttonEl.className = "button";


// time function
var timeTracker = setInterval(function() {
    headerTimeEl.textContent = "Time: " + time + "";
    if (time > 0 && stopTime == 0) {
        time--;
    } 
    else {
        clearInterval(timeTracker);
        headerTimeEl.textContent = "";
    }
},1000);


// questionOne Function
var questionOne = function () {

    startTime = 1;
    headerTimeEl.textContent = "Time: " + time + "";

    h1El.innerHTML = "<h2>Commonly used data types DO Not Include:</h2>";
    h1El.className = "h1-questions";
    quizEl.innerHTML = "";
    quizEl.className = "quiz";

    

    // create container for answer buttons and align left
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
    
    q1A1El.addEventListener("click", wrongAnswerQ1);
    q1A2El.addEventListener("click", correctAnswerQ1);
    q1A3El.addEventListener("click", wrongAnswerQ1);
    q1A4El.addEventListener("click", wrongAnswerQ1);
    

};




// questionTwo Function
var questionTwo = function () {

    headerTimeEl.textContent = "Time: " + time + "";

    h1El.innerHTML = "<h2>The condition in an if/else statement is enclosed with ________.</h2>";
    quizEl.innerHTML = "";
    quizEl.className = "quiz";

    var q2A1El = document.createElement("button");
    q2A1El.innerHTML = "1. Quotes";
    quizEl.appendChild(q2A1El);
    q2A1El.className = "answer";
    

    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q2A2El = document.createElement("button");
    q2A2El.innerHTML = "2. Curly Brackets";
    quizEl.appendChild(q2A2El);
    q2A2El.className = "answer";
    
    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q2A3El = document.createElement("button");
    q2A3El.innerHTML = "3. Parenthesis";
    quizEl.appendChild(q2A3El);
    q2A3El.className = "answer";
    
    
    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q2A4El = document.createElement("button");
    q2A4El.innerHTML = "4. Square Brackets";
    quizEl.appendChild(q2A4El);
    q2A4El.className = "answer";
    
    q2A1El.addEventListener("click", wrongAnswerQ2);
    q2A2El.addEventListener("click", wrongAnswerQ2);
    q2A3El.addEventListener("click", correctAnswerQ2);
    q2A4El.addEventListener("click", wrongAnswerQ2);
    

};




// questionThree Function
var questionThree = function () {

    headerTimeEl.textContent = "Time: " + time + "";

    h1El.innerHTML = "<h2>Arrays in Javascript can be used to store ________.</h2>";
    quizEl.innerHTML = "";
    quizEl.className = "quiz";

    var q3A1El = document.createElement("button");
    q3A1El.innerHTML = "1. Numbers and Strings";
    quizEl.appendChild(q3A1El);
    q3A1El.className = "answer";
    

    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q3A2El = document.createElement("button");
    q3A2El.innerHTML = "2. Other Arrays";
    quizEl.appendChild(q3A2El);
    q3A2El.className = "answer";
    
    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q3A3El = document.createElement("button");
    q3A3El.innerHTML = "3. Booleans";
    quizEl.appendChild(q3A3El);
    q3A3El.className = "answer";
    
    
    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q3A4El = document.createElement("button");
    q3A4El.innerHTML = "4. All of the Above";
    quizEl.appendChild(q3A4El);
    q3A4El.className = "answer";
    
    q3A1El.addEventListener("click", wrongAnswerQ3);
    q3A2El.addEventListener("click", wrongAnswerQ3);
    q3A3El.addEventListener("click", wrongAnswerQ3);
    q3A4El.addEventListener("click", correctAnswerQ3);
    

};



// questionFour Function
var questionFour = function () {

    headerTimeEl.textContent = "Time: " + time + "";

    h1El.innerHTML = "<h2>String values must be enclosed within ________ when being assigned to variables.</h2>";
    quizEl.innerHTML = "";
    quizEl.className = "quiz";

    var q4A1El = document.createElement("button");
    q4A1El.innerHTML = "1. Commas";
    quizEl.appendChild(q4A1El);
    q4A1El.className = "answer";
    

    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q4A2El = document.createElement("button");
    q4A2El.innerHTML = "2. Curly Brackets";
    quizEl.appendChild(q4A2El);
    q4A2El.className = "answer";
    
    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q4A3El = document.createElement("button");
    q4A3El.innerHTML = "3. Quotes";
    quizEl.appendChild(q4A3El);
    q4A3El.className = "answer";
    
    
    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q4A4El = document.createElement("button");
    q4A4El.innerHTML = "4. Parenthesis";
    quizEl.appendChild(q4A4El);
    q4A4El.className = "answer";
    
    q4A1El.addEventListener("click", wrongAnswerQ4);
    q4A2El.addEventListener("click", correctAnswerQ4);
    q4A3El.addEventListener("click", wrongAnswerQ4);
    q4A4El.addEventListener("click", wrongAnswerQ4);
    

};




// questionFive Function
var questionFive = function () {

    headerTimeEl.textContent = "Time: " + time + "";

    h1El.innerHTML = "<h2>A very useful tool used during development and debugging for printing content to the debugger is:</h2>";
    quizEl.innerHTML = "";
    quizEl.className = "quiz";

    var q5A1El = document.createElement("button");
    q5A1El.innerHTML = "1. JavaScript";
    quizEl.appendChild(q5A1El);
    q5A1El.className = "answer";
    

    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q5A2El = document.createElement("button");
    q5A2El.innerHTML = "2. Terminal/Bash";
    quizEl.appendChild(q5A2El);
    q5A2El.className = "answer";
    
    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q5A3El = document.createElement("button");
    q5A3El.innerHTML = "3. For Loops";
    quizEl.appendChild(q5A3El);
    q5A3El.className = "answer";
    
    
    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var q5A4El = document.createElement("button");
    q5A4El.innerHTML = "4. Console.log";
    quizEl.appendChild(q5A4El);
    q5A4El.className = "answer";
    
    q5A1El.addEventListener("click", wrongAnswerQ5);
    q5A2El.addEventListener("click", wrongAnswerQ5);
    q5A3El.addEventListener("click", correctAnswerQ5);
    q5A4El.addEventListener("click", wrongAnswerQ5);
    

};



// Question 1 Wrong function

var wrongAnswerQ1 = function () {
    time = time -10

    headerTimeEl.textContent = "Time: " + time + "";
    
    var wrong = document.createElement("div");
    wrong.innerHTML = "<hr/> Wrong!";
    quizEl.appendChild(wrong);
    wrong.className = "wrong";
    setTimeout(questionTwo, 1000);
    
}

// Question 1 Correct function

var correctAnswerQ1 = function () {
    var correct = document.createElement("div");
    correct.innerHTML = "<hr/> Correct!";
    quizEl.appendChild(correct);
    correct.className = "correct";
    setTimeout(questionTwo, 1000);
    
}

// Question 2 Wrong function

var wrongAnswerQ2 = function () {
    time = time - 10;
    
    headerTimeEl.textContent = "Time: " + time + "";
    
    var wrong = document.createElement("div");
    wrong.innerHTML = "<hr/> Wrong!";
    quizEl.appendChild(wrong);
    wrong.className = "wrong";
    setTimeout(questionThree, 1000);
    
}

// Question 2 Correct function

var correctAnswerQ2 = function () {
    var correct = document.createElement("div");
    correct.innerHTML = "<hr/> Correct!";
    quizEl.appendChild(correct);
    correct.className = "correct";
    setTimeout(questionThree, 1000);
}

// Question 3 Wrong function

var wrongAnswerQ3 = function () {
    time = time - 10;

    headerTimeEl.textContent = "Time: " + time + "";
    
    var wrong = document.createElement("div");
    wrong.innerHTML = "<hr/> Wrong!";
    quizEl.appendChild(wrong);
    wrong.className = "wrong";
    setTimeout(questionFour, 1000);
}

// Question 3 Correct function

var correctAnswerQ3 = function () {
    var correct = document.createElement("div");
    correct.innerHTML = "<hr/> Correct!";
    quizEl.appendChild(correct);
    correct.className = "correct";
    setTimeout(questionFour, 1000);
}


// Question 4 Wrong function

var wrongAnswerQ4 = function () {
    time = time - 10;

    headerTimeEl.textContent = "Time: " + time + "";
    
    var wrong = document.createElement("div");
    wrong.innerHTML = "<hr/> Wrong!";
    quizEl.appendChild(wrong);
    wrong.className = "wrong";
    setTimeout(questionFive, 1000);
}

// Question 4 Correct function

var correctAnswerQ4 = function () {
    var correct = document.createElement("div");
    correct.innerHTML = "<hr/> Correct!";
    quizEl.appendChild(correct);
    correct.className = "correct";
    setTimeout(questionFive, 1000);
}

// Question 5 Wrong function

var wrongAnswerQ5 = function () {
    time = time - 10;

    headerTimeEl.textContent = "Time: " + time + "";
    
    var wrong = document.createElement("div");
    wrong.innerHTML = "<hr/> Wrong!";
    quizEl.appendChild(wrong);
    wrong.className = "wrong";
    setTimeout(gameOver, 1000);
}

var correctAnswerQ5 = function () {
    var correct = document.createElement("div");
    correct.innerHTML = "<hr/> Correct!";
    quizEl.appendChild(correct);
    correct.className = "correct";
    setTimeout(gameOver, 1000);
}



// gameOver Function
var gameOver = function () {

    stopTime = 1;

    localStorage.setItem('time', (time));
    localStorage.getItem(time);
    headerTimeEl.textContent = "Time: " + time + "";
    
    h1El.innerHTML = "<h2>All done!</h2>";

    quizEl.innerHTML = "Your final score is " + time + ".";
    quizEl.className = "final-score";

    var initialText = document.createElement("div");
    initialText.innerHTML = "<br/>Enter Initials:";
    quizEl.appendChild(initialText);
    initialText.className = "initial-text";



    var enterInitials = document.createElement("input");
    enterInitials.type = "text";
    enterInitials.value = "";
    quizEl.appendChild(enterInitials);
    enterInitials.className = "input";

    var initialInput = enterInitials.value;
    localStorage.setItem('initialInput', (initialInput));
    

    var finalSubmitEl = document.createElement("button");
    finalSubmitEl.innerHTML = "Submit";
    finalSubmitEl.type = "submit";
    quizEl.appendChild(finalSubmitEl);
    finalSubmitEl.className = "submit-button";
    

    finalSubmitEl.addEventListener("click", finalScore);

};


// high score function

var finalScore = function(initialInput) {

    localStorage.getItem(time);
    localStorage.getItem(initialInput);

    h1El.innerHTML = "<h2>High Scores</h2>";

    quizEl.innerHTML = "1. " + initialInput + " - " + time;

    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);
    

    var goBackEl = document.createElement("button");
    goBackEl.textContent = "Go Back";
    goBackEl.type = "submit";
    quizEl.appendChild(goBackEl);
    goBackEl.className = "button";

    var space = document.createElement("div");
    space.innerHTML ="";
    quizEl.appendChild(space);

    var clearScoresEl = document.createElement("button");
    clearScoresEl.textContent = "Clear High Scores";
    clearScoresEl.type = "submit";
    quizEl.appendChild(clearScoresEl);
    clearScoresEl.className = "button-long";

    goBackEl.addEventListener("click", restart);
    clearScoresEl.addEventListener("click", noScores);


};

var restart = function () {
    gameOver();
};

var noScores = function () {
    h1El.innerHTML = "<h2>High Scores Cleared</h2>";

    quizEl.innerHTML = "";
};



buttonEl.addEventListener("click", questionOne);
headerHighScoreEl.addEventListener("click", finalScore);







// show final score/time and get initials
// Set Timer Object to Local Storage
// localStorage.setItem('user', JSON.stringify(user));
// var item = JSON.parse(localStorage.getItem(user));