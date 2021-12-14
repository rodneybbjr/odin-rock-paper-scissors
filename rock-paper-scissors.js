function computerPlay() {
  const possibleHands = ["rock", "paper", "scissors"];
  const randomHand =
    possibleHands[Math.floor(Math.random() * possibleHands.length)];
  return randomHand;
}

function isLegalChoice(playerSelection) {
  switch (playerSelection) {
    case "rock":
    case "paper":
    case "scissors":
      return true;
    default:
      return false;
  }
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

function playRound(e) {
  // plays round of game
  let playerWon = undefined;

  // let playerSelection = playerPlay();
  let playerSelection = e;
  console.log(playerSelection);

  if (!isLegalChoice(playerSelection)) {
    exit();
  }
  console.log(`Player: ${playerSelection}`);

  let computerSelection = computerPlay();
  console.log(`Computer: ${computerSelection}`);

  const winText = `You Won! ${playerSelection} beats ${computerSelection}`;
  const losetext = `You Lose! ${computerSelection} beats ${playerSelection}`;

  // to prevent draws
  // while (playerSelection === computerSelection) {
  //   computerSelection = computerPlay();
  //   console.log("skipping draw");
  //   console.log(`Redraw: ${computerSelection}`);
  // }

  if (playerSelection == computerSelection) {
    updateWinner(`Draw! You both chose ${playerSelection} try again.`);
    return;
  }

  if (isWinner(playerSelection, computerSelection)) {
    console.log(winText);
    playerWon = true;
  } else {
    console.log(losetext);
    playerWon = false;
  }
  // return result
  playerWon ? updateWinner(winText) : updateWinner(losetext);
  console.log(`Round Winner: ${playerWon}`);
  return playerWon;
}

function game() {
  // main game loop
  const numberOfRounds = 1;
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
    updateWinner(winText);
    console.log(winText);
    gamesWon++;
  } else {
    updateWinner(losetext);
    console.log(losetext);
  }
}

function updateWinner(winText) {
  const winnerDiv = document.querySelector(".results");
  winnerDiv.textContent = winText;
}
const keys = document.querySelectorAll(".key");
console.log(keys);

keys.forEach((key) =>
  key.addEventListener("click", function () {
    console.log(key.id);
    playRound(key.id);
  })
);
