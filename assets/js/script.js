// be able to click on start button to begin game
let startButton = $('.start-btn');
let startTime = $('.time');
let mainContainer = $('.container');
let questionEl = $('.question');
let answerChoices = $('.multiple-choices');
let startText = $('.startText');
let message = $('.message');

// countdown timer
let timer = 100;
// track highscore 
let highscore = {
    score: 25,
    initials: "AC", 
}
let isCorrect = false;
let isWrong = false;
// be able to move from current question to next
let questionCounter = 0;
startTime.text(timer);

let isClicked = false;

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
        correctAnswer: "D: color:"
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
        timer--;
        startTime.text(timer);

        // if statement
        // when game ends, stop timer from running
        if (questionCounter > 5) {
            clearInterval(timeInterval)
        }

    }, 1000);
}


function displayQuestion() {
    for (let i=0; i<4; i++) {
        questionEl.text(myQuestions[questionCounter].question)
        answerChoices.append('<li><button>' + myQuestions[questionCounter].answers[i] + '</button></li>').css('text-align', 'left')
        answerChoices.children().on('click', function(event) {
            let selectedAnswer = event.target;
            if(myQuestions[questionCounter].correctAnswer !== selectedAnswer.value) {
                timer -= 10;
                questionCounter++;
                return 
            } else {
                questionCounter++;
            }
        })
        // once user chooses an answer, currentQuestion++
        // retrieve next set of questions, answers, correct answer from myQuestions
    }
}

function checkAnswer() {
    // for loop, when answer is made

    // if answer is correct, add text "Correct" and change message back to visible

    // if answer is wrong, add text "Wrong" and change message back to visible

}
  
// highscore becomes leftover timer
//store highscores into local storage and get them

function startGame() {
    startText.text("");
    startTimer();
    displayQuestion();
}

function winGame() {

}

startButton.on('click', function() {
    startButton.remove()
    startGame()
});