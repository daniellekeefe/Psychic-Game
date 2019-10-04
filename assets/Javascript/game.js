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
let guessesLeft = 10;

//player guess 
document.onkeyup = function () {
  let playerGuess = String.fromCharCode(event.keyCode). //learned this from RPS vid
    toLocaleLowerCase();

    console.log(playerGuess);
//computer guess
    let computerGuess = letters[Math.floor(Math.random()*letters
      .length)];

    console.log(computerGuess);

   //letter match alert
    if ((playerGuess==computerGuess)){
      match++;
      console.log(match);
    }
    //letter does not match
    if ((playerGuess!=computerGuess)){
      noMatch++;
      console.log(noMatch);
    }   
    if((playerGuess)){
      guesses++ + guessesLeft--;
      console.log(guesses);
    }  
   
    if(guesses==10) { 
      return;
    
    }

      

 
  var html = "<p> Press a letter to see if the Psychic is on the same WAVELENGTH as you!</p>" +
  "<p>Match: " + match +"</p>" +
  "<p>No Match: " + noMatch +"</p>" +
  "<p>Guesses: " + guesses +"</p>" +
  "<p>Guesses Left: " + guessesLeft +"</p>"
  document.querySelector('#psychicGame').innerHTML = html;

}

