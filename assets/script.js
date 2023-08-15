var startQuiz = document.querySelector("#start");
var secondsLeft = 10
var questionIndex = 0
var questionBank = [
    {
    question: "The condition in an if / else statement is enclosed within ____.",
    choices: [{
        value: "quotes",
        correct: false
    }, 
    {
        value: "curly brackets",
        correct: true
    },
    {
        value: "parentheses",
        correct: false
    },
    {
        value: "square brackets",
        correct: false
    }]

},
{
    question: "Commonly used data types DO NOT include",
    choices: [{
        value: "strings",
        correct: false
    }, 
    {
        value: "booleans",
        correct: false
    },
    {
        value: "alerts",
        correct: true
    },
    {
        value: "numbers",
        correct: false
    }]
}]

var score = 0;
console.log(questionBank)


startQuiz.addEventListener("click", startGame)

function startGame(){
    document.getElementById("begin").classList.add("hide")
    var quizContainerEl = document.getElementById("quiz-container")
    quizContainerEl.classList.remove("hide")
    questionIndex = 0
    startTimer()
    showQuestion()
}

function startTimer(){
    var timerEl = document.getElementById("countdown-timer")
    var timeInterval = setInterval(function(){
        timerEl.innerHTML = `Time Left: ${secondsLeft}`
        secondsLeft--
        if(secondsLeft <0){
            timerEl.innerHTML = ""
            clearInterval(timeInterval)
            endGame()
        }
    } , 1000)
}

function setupAnswerChoices() {
    var choiceHolder = document.getElementById("question-choices");
    choicesHolder.innerHTML = '';

    var currentChoices = questionBank[questionIndex].choices;
    currentChoices.forEach(function (choiceObj) {
        var choiceValue = choiceObj.value;
        var choiceElement = document.createElement('buton');
        choiceElement.textContent = choiceValue;
        choiceElement.addEventListener('click', checkAnswer);
        choicesHolder.appendChild(choiceElement)
    });
}

function showQuestion() {
    var currentQuestion = questionBank[questionIndex];
    var currentPrompt = currentQuestion.question;
    var currentChoices = currentQuestion.choices;
    var promptHolder = document.getElementById("question-prompt");
    var choicesHolder = document.getElementById("question-choices");
    var resultElement = document.querySelector('.result');

    promptHolder.textContent = currentPrompt;
    resultElement.textContent = '';


    choicesHolder.innerHTML = '';

    currentChoices.forEach(function(choiceObj) {
        var choiceValue = choiceObj.value;
        var choiceElement = document.createElement('button');
        choiceElement.textContent = choiceValue;
        choiceElement.addEventListener('click', checkAnswer);
        choicesHolder.appendChild(choiceElement);
    });
}


function checkAnswer(event){
    var selectedChoice = event.target.textContent;
    var currentQuestion = questionBank[questionIndex];
    var option = currentQuestion.choices.filter((choice) => choice.value === selectedChoice); 
    console.log (option[0].correct); 

    var resultElement = document.querySelector('.result');
    resultElement.textContent = option[0].correct ? 'Correct' : 'Incorrect';

    if (option[0].correct) {
        score++;
    } else {}
    secondsLeft = secondsLeft - 2;

console.log (questionIndex);


    setTimeout(function() {
        questionIndex++;
    
    if(questionIndex < questionBank.length) {
    secondsLeft = 10;
        showQuestion();
    } else {
        endGame();
    }
}, 1000);

}
 
function checkResult (){

}

function endGame(){
    console.log("Game over");
    displayScore();

    var playerNameInput = document.getElementById("player-name");
    var saveScoreButton = document.getElementById("save-score");
    playerNameInput.classList.remove("hide");
    saveScoreButton.classList.remove("hide");
    
}

function displayScore() {
    var quizContainerEl = document.getElementById("quiz-container");
    quizContainerEl.innerHTML = "Your Score:" + score; 
};

// var playerNameInput = document.getElementById("player-name");
var saveScoreButton = document.getElementById("save-score");
saveScoreButton.addEventListener("click", saveScore);

function saveScore() {
    var playerNameInput = document.getElementById("player-name");
    var playerName = playerNameInput.value.trim();
    if (playerName !== "") {
        var scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({name: playerName, score:score});
    localStorage.setItem("scores", JSON.stringify(scores));
    displayHighScores ();
} else {
    alert ("Please enter your name to save score");
};
}

function displayHighScores () {
    var highScoreContainerEl = document.getElementById("high-score");
    highScoreContainerEl.classList.remove("hide");
    var quizContainerEl = document.querySelector(".container");
    quizContainerEl.classList.add("hide");


    var scores = JSON.parse(localStorage.getItem("scores")) || [];
    for (var i = 0; i < scores.length ; i++) {
        console.log (scores [i])
    }
   

// create element is javascript then append to the for loop

}



