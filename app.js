function computerPlay(){
  const options = ["rock", "paper", "scissors"];
  const randomOption = options[Math.floor(Math.random() * options.length)];
  console.log(randomOption);
}

computerPlay();