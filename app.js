function computerPlay(){
  const options = ["rock", "paper", "scissors"];
  const randomOption = options[Math.floor(Math.random() * options.length)];
  return randomOption;
}

console.log(computerPlay());

function game()
