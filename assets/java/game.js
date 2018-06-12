var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all counters to zero
var wins = 0;                        //Counter for wins
var losses = 0;                      //Counter for losses
var guesses = 13;                    //Number of guesses set to half of numbers of leters in alphabet to even odds of wining
var guessesLeft = 13;                //Counter of guesses left
var guessedLetters = [];             //Letters that were guessed
var letterToGuess = null;            //Letters to guess


//Computer select random letter
var compGuess = letters[Math.floor(Math.random() * letters.length)];

//Return value in the HTML document with id="guessesleft"
var updateGuessesLeft = function() {
  document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

//Return value in the HTML document with id="guesses"
var updateGuessesSoFar = function() {
  document.querySelector('#guesses').innerHTML = "Your Guesses: " + guessedLetters.join('-');
};

var reset = function() {
  totalGuesses = 13;
  guessesLeft = 13;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//Computer is "listening" for key release event (press and release). Uses method fromCharCode to indentify event.keyCode,
// set the input to lower case to match the arrey of var letters
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

  //Calls the alerts for win or loss and register the wins or loses in the index.html document.Resets the game
        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Congratulations! You won!");
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you lost");
            reset();
        }
};