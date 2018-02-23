var lettersOfAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var guesses = [];
var userGuess = null;

var toBeGuessed = lettersOfAlphabet[Math.floor(Math.random() * lettersOfAlphabet.length)];

document.onkeyup = function(event){

var userGuess = event.key.toLowerCase();  

if (guesses.indexOf(userGuess) < 0 && lettersOfAlphabet.indexOf(userGuess) >= 0){

    guesses[guesses.length] = userGuess;
    guesses--;
}
else if (userGuess === toBeGuessed){
    wins++;
    guessesLeft = 9;
    guesses = [];
    toBeGuessed;

}

else if (guessesLeft === 0){
    losses++;
    guessesLeft = 9;
    guesses: [];
    toBeGuessed; 
}

};
