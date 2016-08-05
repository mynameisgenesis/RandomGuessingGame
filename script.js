function guessNumber(guess){
  guess = parseInt(guess);
  if ( randomNumber === guess){
    document.write("How did you know!?<br>"); 
  }else if (guess > 6 || guess < 0)  {
    document.write("Hey! Enter a valid number buddy!<br>");
  }else {
    document.write("Haha! Guess again! The number was " + randomNumber + "<br>");
  }
}

do{
  var randomNumber = Math.floor( Math.random() * 6 ) + 1;
  var guess = prompt('I am thing of a number between 1 and 6. What is it?');

  guessNumber(guess);
  
  var answer = confirm("Would you like to try again?");
  
} while(answer);