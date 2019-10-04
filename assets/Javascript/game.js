//array of all letters



//function onkeyup player letter & random letter generates. Both display on screen



//if else validation 
//player selection
//computer random letter


//Match = score for the player
//Each guess Guesses Left:incriment down by 1. Guesses so far go up
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let match = 0;
let noMatch = 0;
let guesses = 0;
let guessCount ='';
let guessesLeft = 9;
let losses = 0;

//computer guess
let computerGuess = letters[Math.floor(Math.random() * letters
  .length)];

console.log(computerGuess);
//player guess 

document.onkeyup = function () {
  let playerGuess = String.fromCharCode(event.keyCode). //learned this from RPS vid
  toLocaleLowerCase();

  console.log(playerGuess);
  //letter does not match
  if ((playerGuess != computerGuess)) {
    noMatch++ + guesses++ + guessesLeft--;
    console.log(noMatch);
  }

 if ((playerGuess == computerGuess)) {
    match++;
    guessesLeft = 9;
    console.log(match);
  }
  if (noMatch ==9) {
    losses ++;
    guessesLeft = 9;
    console.log(losses);
  }

  var html = "<p> Press a letter to see if the Psychic is on the same WAVELENGTH as you!</p>" +
    "<p>Wins: " + match + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Guesses: " + guessCount + "</p>"
  document.querySelector('#psychicGame').innerHTML = html;

}
