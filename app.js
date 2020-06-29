function computerPlay(){
  const options = ["rock", "paper", "scissors"];
  const randomOption = options[Math.floor(Math.random() * options.length)];
  return randomOption;
}
function playRound(playerSelection, computerSelection) {
	if (computerSelection === playerSelection){
  // This is a Tie 
  document.write("opps! This is a tie!")
  return;
  }
  // Rock
  if (playerSelection === "rock"){
    if (computerSelection === "scissors"){
      document.write("You win! Rock Beats Scissors");
      return;
    }else{
      document.write("You lose! Rock Beats Scissors")
   return;
    }
  }
// Paper
if (playerSelection === "paper"){
  if (computerSelection === "scissors"){
    document.write("You Lose! Scissors Beats Paper");
    return;
  }else{
    document.write("You Win! Scissors Beats Paper")
 return;
  }
}
 // Scissors
if (playerSelection === "scissors"){
  if (computerSelection === "rock"){
    document.write("You lose! Rock Beats Scissors");
    return;
  }else{
    document.write("You Win! Scissors Beats paper")
 return;
  }
}
}

// const playerSelection = window.prompt("Rock, Paper or scissors ?").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
document.write("<h1>Refresh to play again</h1>")