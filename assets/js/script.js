// be able to click on start button to begin game
let startButton = document.querySelector('.start-btn');
let time = document.querySelector('.time');
let questionEl = document.querySelector('.question');
let answerChoices = document.querySelector('.multiple-choices');
let startText = document.querySelector('.startText');
let message = document.querySelector('.message');
let highscoreButton = document.querySelector('.highscores');
let hiddenInitial = document.querySelector('.hidden');
let submitButton = document.querySelector('.submit');
// let clearButton = document.querySelector('.clear-score');

// countdown timer
let timer = 60;
// track highscore 
let highscore = {
    score: 25,
    initials: "AC", 
}
let isCorrect = 0;
// be able to move from current question to next
let questionCounter = 0;
// sets the timer to 100 when page loads
time.textContent = timer;

// store all question, answers, and correct answer here to call on
const myQuestions = [
    {
        question: "What HTML tag is used to embed an image in a webpage?",
        answers: ["A: background-image", "B: img", "C: h1", "D: p"],
        correctAnswer: "B: img"
    },
    {
        question: "What CSS property do we use to change the text color?",
        answers: [ "A: font-color", "B: style", "C: hue", "D: color"],
        correctAnswer: "D: color"
    },
    {
        question: "What tag is used to create a list with numbers?",
        answers: [ "A: el", "B: ol", "C: ul", "D: il"],
        correctAnswer: "B: ol"
    },
    {
        question: "Which CSS property allows an element to stay in the same place even if the page is scrolled?",
        answers: ["A: position:fixed","B: position:relative","C: position:absolute","D: position:static"],
        correctAnswer: "C: position:absolute"
    },
    {
        question: "In HTML, what is the lowest level of heading?",
        answers: ["A: h1","B: h3","C: h6","D: h9"],
        correctAnswer: "C: h6"
    }
]

// timer function for score, when game ends, timer stops, keep note of score
function startTimer() {
    var timeInterval = setInterval( function() {
        // timer goes down by each second
        timer--;
        // time will be updated on the page each second
        time.textContent = timer;
        // if statement
        // when game ends, stop timer from running
        if (questionCounter > 4) {
            clearInterval(timeInterval)
            // highscore becomes leftover timer
            highscore.score = timer
        }
    }, 1000);
}

answerChoices.addEventListener('click', function(event) {
    // event listener parent of buttons and looks for a click
    let selectedAnswer = event.target;
    if (event.target.matches("button")) {
        // if the currect answer is not equal to the answer on the button
        if(myQuestions[questionCounter].correctAnswer !== selectedAnswer.dataset.answer) {
            // subtracts 10 seconds from time
            timer -= 10;
            // once user chooses an answer, currentQuestion++
            questionCounter++;
            // if answer is wrong, add text "Wrong" and change message back to visible
            message.textContent = "Wrong!";
            message.style.visibility = "visible";
        } else {
            questionCounter++;
            // if answer is correct, add text "Correct" and change message back to visible
            message.textContent = "Correct!";
            isCorrect++
            message.style.visibility = "visible";
        }
        displayQuestion();
        setTimeout(() => {
            message.textContent = "";
        }, 500);
    }
})

function displayQuestion() {
    // clears out answer choices each time before next question displays
    answerChoices.textContent = "";
    // display current question using questionCounter
    if (questionCounter === 5) {
        questionEl.textContent = "";
        displayFinalScore();
        return
    } else {
        questionEl.textContent = myQuestions[questionCounter].question
    }
    // create buttons for each answer
    for (let i=0; i<4; i++) {
        let answer = document.createElement('button')
        answer.textContent = myQuestions[questionCounter].answers[i]
        // add data-answer to button
        answer.dataset.answer = myQuestions[questionCounter].answers[i]
        answerChoices.append(answer);
        answer.setAttribute("class", "answer-btn");
    }
}

function displayFinalScore() {
    let timeOnPage = timer-1;
    //display score
    startText.textContent = "Congratulations, you finished the quiz! You scored " + isCorrect + "/5. And your score is " + timeOnPage
    // initial form appear
    hiddenInitial.style.display = "block";
    // store into local storage and get them
    localStorage.setItem("score", timeOnPage)
}


submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    let input = document.querySelector("#initials").value
    console.log(input)
    localStorage.setItem("initial", input);
    location.href= "score.html";
})


function startGame() {
    startText.textContent = "";
    startTimer();
    displayQuestion();
}

startButton.addEventListener('click', function() {
    startButton.remove();
    startGame();
    highscoreButton.style.visibility = "hidden";
});
