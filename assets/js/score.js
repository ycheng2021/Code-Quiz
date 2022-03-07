let highscoreEl = document.querySelector('.initial-score');
let clearButton = document.querySelector('.clear-score');
let isClicked = false;
// gets score from local storage and displays it in the highscore box
function saveScore() {
    let savedScore = localStorage.getItem("score");
    let savedInitial = localStorage.getItem("initial");
    let highscore = document.createElement('li')
    highscore.textContent = "Score: " + savedScore + " Initial: " + savedInitial;
    highscoreEl.append(highscore)
    if (savedScore === null && savedInitial === null) {
        highscoreEl.textContent = "";
    }
}

saveScore(); 

// clears the highscore
clearButton.addEventListener('click', function() {
    localStorage.clear();
    highscoreEl.textContent = "";
})