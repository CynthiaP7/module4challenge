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


function showQuestion() {
    var currentQuestion = questionBank[questionIndex];
    var currentPrompt = currentQuestion.question;
    var currentChoices = currentQuestion.choices;
    var promptHolder = document.getElementById("question-prompt");
    var choicesHolder = document.getElementById("question-choices");

    promptHolder.textContent = currentPrompt;


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
    console.log("checkAnswer")
    var selectedChoice = event.target.textContent;
    var currentQuestion = questionBank[questionIndex];
    var option = currentQuestion.choices.filter((choice) => choice.value === selectedChoice); 
    console.log (option[0].correct); 
    secondsLeft = secondsLeft - 2;
};



    questionIndex++
    showQuestion()


function endGame(){
    console.log("Game over")
    
}

function displayScore() {
    var quizContainerEl = document.getElementById("quiz-container");
    quizContainerEl.innerHTML = "Your Score:" + score };