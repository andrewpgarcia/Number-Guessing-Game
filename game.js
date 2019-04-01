//create secretnumber
var secretNumber = 4;


//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess); //turns stringGuess into a number ie: no more "" around it

//check guess
if(guess === secretNumber){
	alert("YOU GOT IT RIGHT!");
}

else if(guess > secretNumber){
	alert("Too high. Guess again.");
}

else {
	alert("Too low. Guess again.");
}