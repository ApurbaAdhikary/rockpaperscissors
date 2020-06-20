function computerPlay(){
  const options = ["rock", "paper", "scissors"];
  const randomOption = options[Math.floor(Math.random() * options.length)];
  return randomOption;
}

function playRound(playerSelection, computerSelection) {
	if (computerSelection === playerSelection){
  // This is a Tie 
    console.log("opps! This is a tie!")
    return;
  }
  // Rock
  if (playerSelection === "rock"){
    if (computerSelection === "scissors"){
      console.log("You win! Rock Beats Scissors");
      return;
    }else{
      console.log("You lose! Rock Beats Scissors")
   return;
    }
  }
// Paper
if (playerSelection === "paper"){
  if (computerSelection === "scissors"){
    console.log("You Lose! Scissors Beats Paper");
    return;
  }else{
    console.log("You Win! Scissors Beats Paper")
 return;
  }
}
 // Scissors
if (playerSelection === "scissors"){
  if (computerSelection === "rock"){
    console.log("You lose! Rock Beats Scissors");
    return;
  }else{
    console.log("You Win! Scissors Beats paper")
 return;
  }
}
}

const playerSelection = window.prompt("Rock, Paper or scissors ?").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))