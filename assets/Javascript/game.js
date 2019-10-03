//array of all letters



//function onkeyup player letter & random letter generates. Both display on screen



//if else validation 
//player selection
//computer random letter


//Match = score for the player
//Each guess Guesses Left:incriment down by 1. Guesses so far go up
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let match = 0;
let noMatch = 0; 
let guesses = 0;
let guessesLeft = 0;

//player guess 
document.onkeyup = function () {
  var playerGuess = String.fromCharCode(event.keyCode). //learned this from RPS vid
    toLocaleLowerCase();

    console.log(playerGuess);
//computer guess
    var computerGuess = letters[Math.floor(Math.random()*letters
      .length)];

    console.log(computerGuess);

   //letter match alert
    if ((playerGuess==computerGuess)){
      match++;
      alert('We are on the same wave length!!! '+ match);
    }
    //letter does not match
    if ((playerGuess!=computerGuess)){
      noMatch++;
      alert('My Crystal Ball is cloudy!!! '+ noMatch);
    }
  }
  

