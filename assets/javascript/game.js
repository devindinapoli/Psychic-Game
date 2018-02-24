var lettersOfAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var guesses = [];
var userGuess = null;

var toBeGuessed = lettersOfAlphabet[Math.floor(Math.random() * lettersOfAlphabet.length)];

document.onkeyup = function (event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    if (guesses.indexOf(userGuess) < 0 && lettersOfAlphabet.indexOf(userGuess) >= 0) {
        guesses[guesses.length] = userGuess;
        guessesLeft--;
    }

    if (userGuess == toBeGuessed) {
        alert("You Win!");
        wins++;
        guessesLeft = 9;
        guesses = [];
        toBeGuessed  = lettersOfAlphabet[Math.floor(Math.random() * lettersOfAlphabet.length)];

    }


    if (guessesLeft == 0) {
        alert("Better Luck Next Time!");
        losses++;
        guessesLeft = 9;
        guesses = [];
        toBeGuessed  = lettersOfAlphabet[Math.floor(Math.random() * lettersOfAlphabet.length)];

    }

    var html = "<p><h1>Psychic Game</h1></p>" + "<p>What Letter Am I Thinking Of?</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Guesses So Far: " + guesses + "</p>";

    document.querySelector("#game").innerHTML = html;
}
