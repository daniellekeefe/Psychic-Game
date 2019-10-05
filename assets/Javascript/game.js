//Each guess Guesses Left:incriment down by 1. Guesses so far go up
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let match = 0;
let noMatch = 0;
let guessCount = '';
let guessesLeft = 9;
let losses = 0;

//computer guess
let computerGuess = letters[Math.floor(Math.random() * letters
  .length)];
console.log(computerGuess);

//player guess onkeyup player letter & random letter generates & display on screen
document.onkeyup = function () {
  let playerGuess = String.fromCharCode(event.keyCode). //learned this from RPS vid
  toLocaleLowerCase();
  console.log(event.key) //suggestion from tutor as I was hoping to keep guesses only to valid alphabet letters
  console.log(playerGuess);

  //match statement
  if ((playerGuess == computerGuess)) {
    match++;
    reset();
    console.log(match);
    if (match == 9) {
      console.log("you are the ultimate champion") //console log of the success
    }
    //if not matched move on to....
  } else {
    guessesLeft--;
    if (guessesLeft > 0) {
      noMatch++
      if (guessesLeft < 8) {
        guessCount += ", "; //player guesses that are not a match to then be displayed on screen
      }
      guessCount += playerGuess;
      console.log(noMatch);
    } else {
      losses++;
      if (losses == 9) {
        console.log("don't quit your dayjob"); // console log that someone did pretty bad
      }
      reset();
      console.log(losses);
    }
  }
  var html = "<p> Guess what letter I am thinking of...</p>" +
    "<p>Wins: " + match + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Guesses: " + guessCount + "</p>"
  document.querySelector('#psychicGame').innerHTML = html;

}
//Made a function that says when conditions are met, matched guess, guesses left reaches zero, reset guess count letters, guessesLeft, and computer give new guess. 
function reset() {
  guessCount = '';
  guessesLeft = 9;
  computerGuess = letters[Math.floor(Math.random() * letters.length)];
  //note with console log to validate, kept in there to easily test  
  console.log("crystal ball:", computerGuess);
}