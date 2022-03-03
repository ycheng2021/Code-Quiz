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
let startTime = $('.time');
let mainContainer = $('.container');

startTime.text(timer);

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
            question: "What CSS property do we use to change the text color?",
            answers: {
                a: "font-color:",
                b: "style:",
                c: "hue:",
                d: "color:"
            },
            correctAnswer: "d"
        },
        {
            question: "What tag is used to create a list with numbers?",
            answers: {
                a: "<el>",
                b: "<ol>",
                c: "<ul>",
                d: "<il>"
            },
            correctAnswer: "b"
        },
        {
            question: "Which CSS property allows an element to stay in the same place even if the page is scrolled?",
            answers: {
                a: "position:fixed",
                b: "position:relative",
                c: "position:absolute",
                d: "position:static"
            },
            correctAnswer: "a"
        },
        {
            question: "In HTML, what is the lowest level of heading?",
            answers: {
                a: "h1",
                b: "h3",
                c: "h6",
                d: "h9"
            },
            correctAnswer: "c"
        }
    ]

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

    // for loop, when answer is made

    // if answer is correct, add text "Correct" and change message back to visible

    // if answer is wrong, add text "Wrong" and change message back to visible

    // once user chooses an answer, currentQuestion++
    // retrieve next set of questions, answers, correct answer from myQuestions

    // highscore becomes leftover timer
    //store highscores into local storage and get them

    function askInitial() {
        
    }

}


startButton.addEventListener('click', playGame());