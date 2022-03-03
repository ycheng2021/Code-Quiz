// countdown timer
let timer = 100;
// track highscore 
let highscore = {
    score: '',
    initials: '', 
}
// be able to move from current question to next
let questionCounter = 0;
// be able to click on start button to begin game
let startButton = $('.start-btn');
let startTime = $('.time');
let mainContainer = $('.container');
let question = $('.question');
let answerChoices = $('.multiple-choices');
startTime.text(timer);

// store all question, answers, and correct answer here to call on
const myQuestions = [
    {
        question: "What HTML tag is used to embed an image in a webpage?",
        answers: ["A: <background-image>", "B: <img>", "C: <h1>", "D: <p>"],
        correctAnswer: "myQuestions[0].answers[1]"   
    },
    {
        question: "What CSS property do we use to change the text color?",
        answers: [ "A: font-color:", "B: style:", "C: hue:", "D: color:"],
        correctAnswer: "myQuestions[1].answers[3]"
    },
    {
        question: "What tag is used to create a list with numbers?",
        answers: [ "A: <el>:", "B: <ol>:", "C: <ul>", "D: <il>"],
        correctAnswer: "myQuestions[2].answers[1]"
    },
    {
        question: "Which CSS property allows an element to stay in the same place even if the page is scrolled?",
        answers: ["A: position:fixed","B: position:relative","C: position:absolute","D: position:static"],
        correctAnswer: "myQuestions[3].answers[2]"
    },
    {
        question: "In HTML, what is the lowest level of heading?",
        answers: ["A: h1","B: h3","C: h6","D: h9"],
        correctAnswer: "myQuestions[4].answers[2]"
    }
]

console.log(myQuestions[0].answers[1])

// set all questions into an array
let availableQuestions = []
for (let i=0; i<myQuestions.length; i++) {
    availableQuestions.push(myQuestions[i].question);
}

let availableAnswers = []
for (let i=0; i<5; i++) {
    availableAnswers.push(myQuestions[i].answers);
}

console.log(availableQuestions)
console.log(availableAnswers);

// timer function for score, when game ends, timer stops, keep note of score
function startTimer() {
    var timeInterval = setInterval( function() {
        timer--;
        startTime.text(timer);

        // if statement
        // when game ends, stop timer from running

        // call askInitial function

    }, 1000);
}

function startGame() {

    question.text(availableQuestions[questionCounter]);

    answerChoices.append('<li>' + availableAnswers[0] + '</li>')
    // for loop, when answer is made

    // if answer is correct, add text "Correct" and change message back to visible

    // if answer is wrong, add text "Wrong" and change message back to visible

    // once user chooses an answer, currentQuestion++
    // retrieve next set of questions, answers, correct answer from myQuestions

    // highscore becomes leftover timer
    //store highscores into local storage and get them
}

startButton.on('click', startGame());