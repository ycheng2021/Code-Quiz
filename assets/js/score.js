let highscoreEl = document.querySelector('.initial-score')
let clearButton = document.querySelector('.clear-score')

// gets score from local storage and displays it in the highscore box
function saveScore() {
    highscoreEl.innerHTML = "";
}
saveScore(); 

// clears the highscore
clearButton.addEventListener('click', function() {
    highscoreEl.textContent = "";

})