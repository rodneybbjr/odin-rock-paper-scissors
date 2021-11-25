function computerPlay() {
  const possibleHands = ["rock", "paper", "scissors"];
  const randomHand = possibleHands[~~(Math.random() * possibleHands.length)];
  return randomHand;
}

function playerPlay() {
  // make case agnostic
  return prompt("Enter: 'Rock', 'Paper' or 'Scissors' to play.").toLowerCase();
}

function isWinner(playerSelection = "", computerSelection = "") {
  // takes players choice and computers choice and determins winner
  if (playerSelection === "rock" && computerSelection === "paper") {
    return false;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return false;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return false;
  } else {
    return true;
  }
}

function playRound() {
  // plays round of game
  let playerWon = undefined;

  let playerSelection = playerPlay();
  console.log(`Player: ${playerSelection}`);

  let computerSelection = computerPlay();
  console.log(`Computer: ${computerSelection}`);

  // to prevent draws
  while (playerSelection === computerSelection) {
    computerSelection = computerPlay();
    console.log("skipping draw");
    console.log(`Redraw: ${computerSelection}`);
  }

  if (isWinner(playerSelection, computerSelection)) {
    console.log(
      `You Won The Round! ${playerSelection} beats ${computerSelection}`
    );
    playerWon = true;
  } else {
    console.log(
      `You Lose The Round! ${computerSelection} beats ${playerSelection}`
    );
    playerWon = false;
  }
  // return result
  console.log(`Round Winner: ${playerWon}`);
  return playerWon;
}

function game() {
  // main game loop
  const numberOfRounds = 5;
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < numberOfRounds; i++) {
    if (playRound()) {
      playerScore++;
      console.log(`Player:${playerScore} Computer:${computerScore}`);
    } else {
      computerScore++;
      console.log(`Player:${playerScore} Computer:${computerScore}`);
    }
  }
  // determin winner
  if (playerScore > computerScore) {
    console.log(
      `You Won Game! Player:${playerScore} Computer:${computerScore}`
    );
    gamesWon++;
  } else {
    console.log(
      `You Lose Game! Computer:${computerScore} Player:${playerScore}`
    );
  }
}

game();
