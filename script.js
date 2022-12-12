var userChoice = prompt("How many rounds do you want to play?");
let randomNumber = Math.floor(Math.random()*3)
var userChoice = prompt("Do you pick rock, paper, or scissors? (enter r, p, or s)");
let computerChoice;
if (randomNumber === 0) {
    computerChoice = "r";
} else {
    computerChoice = "p";
} else {
    computerChoice = "s";
}
if (computerChoice === userChoice){
    alert("You guessed right!");
} else {
    alert("Sorry, wrong guess");
} else {
    alert("tie");
}




// let userChoice = prompt("How many rounds do you want to play?")
//if (userChoice != null)
//document.getElementById("demo").innerHTML =

//cpuScor = 0
//playerScore = 0
//tieScore = 0
//possibleHands = ["R", "P", "S"]

//def checkForWinners(playerHand, computerHand):
//    if(playerHand == "R" and computerHand == "P");
 //   print("Sorry you lost.")
 //   return "cpu"
 //   {
  //      else(playerHand == "R" and computerHand == "S")
  //  }
