let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    let generateTarget = Math.floor(Math.random()*10);
    return generateTarget
}
console.log(generateTarget());


function compareGuesses(userGuess, computerGuess, secretGuess) {
if (userGuess === computerGuess) {
   return "The game is tie"
}else if(Math.abs(secretGuess - userGuess) < Math.abs(secretGuess - computerGuess)) {
    return true 
} else if (Math.abs(secretGuess - userGuess) > Math.abs(secretGuess - computerGuess)) {
    return  false 
} 
}

console.log(compareGuesses());



const updateScore = winner => {
    if (winner === 'human') {
      humanScore+=1;
    } else if (winner === 'computer') {
      computerScore+=1;
    }
  }


function advanceRound() {
let advanceRound = currentRoundNumber+=1;
return advanceRound
}

console.log(advanceRound());