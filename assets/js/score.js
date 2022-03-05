let highscoreEl = document.querySelector('.initial-score')
let clearButton = document.querySelector('.clear-score')

// gets score from local storage and displays it in the highscore box
function saveScore() {
    let savedScore = localStorage.getItem("score");
    let savedInitial = localStorage.getItem("initial");
    let highscore = document.createElement('li')
    highscore.textContent = "Score: " + savedScore + " Initial: " + savedInitial;
    highscoreEl.append(highscore)
}

saveScore(); 

// clears the highscore
clearButton.addEventListener('click', function() {
    localStorage.setItem("score", " ")
    localStorage.setItem("initial", " ")
    window.location.reload();
})