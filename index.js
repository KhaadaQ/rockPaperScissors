let wins = 0;
let losses = 0;
let ties = 0;

function createBtn() {
  const containerElem = document.querySelector(".container");

  for (let i = 1; i <= 3; i++) {
    const btn = document.createElement("button");
    btn.textContent = `Button ${i}`;
    btn.id = `button${i}`;
    containerElem.appendChild(btn);
  }
  const rock = document.getElementById("button1");
  const paper = document.getElementById("button2");
  const scissors = document.getElementById("button3");
  rock.textContent = "Rock";
  paper.textContent = "Paper";
  scissors.textContent = "Scissors";
}
createBtn();

function addEventListenerToBtn() {
  const rock = document.getElementById("button1");
  const paper = document.getElementById("button2");
  const scissors = document.getElementById("button3");

  rock.addEventListener("click", () => playGame("rock"));
  paper.addEventListener("click", () => playGame("paper"));
  scissors.addEventListener("click", () => playGame("scissors"));
}

addEventListenerToBtn();

function createData() {
  const container = document.querySelector(".data-container");
  const newDiv = document.createElement("div");
  newDiv.id = "result-data";
  newDiv.textContent = `Wins = ${wins} | Losses = ${losses} | Ties = ${ties}`;
  container.appendChild(newDiv);
}

function updateData() {
  const resultDataDiv = document.getElementById("result-data");
  resultDataDiv.textContent = `Wins = ${wins} | Losses = ${losses} | Ties = ${ties}`;
}

createData();

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
      ties++;
    } else if (computerMove === "paper") {
      result = "You lose.";
      losses++;
    } else if (computerMove === "scissors") {
      result = "You win.";
      wins++;
    }
  } else if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "Tie.";
      ties++;
    } else if (computerMove === "scissors") {
      result = "You lose.";
      losses++;
    } else if (computerMove === "rock") {
      result = "You win.";
      wins++;
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      result = "Tie.";
      ties++;
    } else if (computerMove === "rock") {
      result = "You lose.";
      losses++;
    } else if (computerMove === "paper") {
      result = "You win.";
      wins++;
    }
  }
  
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
  updateData();
}
