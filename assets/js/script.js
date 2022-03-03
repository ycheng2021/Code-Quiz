// countdown timer
let timer = 100;
// track highscore 
let highscore = {
    score: '',
    initials: '', 
}
// be able to move from current question to next
let currentQuestion = 0;
// be able to click on start button to begin game
let startButton = $('.start-btn');

function playGame() {
    // store all question, answers, and correct answer here to call on
    const myQuestions = [
        {
            question: "What HTML tag is used to embed an image in a webpage?",
            answers: {
                a: "<background-image>",
                b: "<img>",
                c: "<h1>",
                d: "<p>"
            },
            correctAnswer: "b"   
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: ""
            },
            correctAnswer: ""
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: ""
            },
            correctAnswer: ""
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: ""
            },
            correctAnswer: ""
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: ""
            },
            correctAnswer: ""
        }
    ]

    // timer function for score, when game ends, timer stops, keep note of score
    function startTimer() {
        var timeInterval = setInterval( function() {
            timer -= 10;

        })
    }

    // for loop, when answer is made

    // if answer is correct, add text "Correct" and change message back to visible

    // if answer is wrong, add text "Wrong" and change message back to visible

    // once user chooses an answer, currentQuestion++
    // retrieve next set of questions, answers, correct answer from myQuestions

    // highscore becomes leftover timer
    //store highscores into local storage and get them

    //

}


startButton.addEventListener('click', playGame());