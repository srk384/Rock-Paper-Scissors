let playerMove = null;
let playerScore = 0;
let computerScore = 0;

const playerScoreDiv = document.getElementById("playerScore");
const computerScoreDiv = document.getElementById("computerScore");
const rules = document.querySelector(".rules-outside");
const rulesBtn = document.querySelector(".rulesbtn");
const rulesCloseBtn = document.querySelector(".rulesCloseBtn");
const playAgain = document.querySelector("#playAgain");

// fetching scores from localstorage onload
document.addEventListener("DOMContentLoaded", () => {
  const { player, computer } = JSON.parse(localStorage.getItem("scores"));
  playerScore = player;
  computerScore = computer;
  playerScoreDiv.innerHTML = player;
  computerScoreDiv.innerHTML = computer;
});

//game controllers
rock.addEventListener("click", () => {
  playerMove = null;
  playerMove = "Rock";
  gameFunctionality();
  playerHandImg.src = `/public/images/rock.svg`;
});
paper.addEventListener("click", () => {
  playerMove = null;
  playerMove = "Paper";
  gameFunctionality();
  playerHandImg.src = `/public/images/paper.svg`;
});
scissors.addEventListener("click", () => {
  playerMove = null;
  playerMove = "Scissors";
  gameFunctionality();
  playerHandImg.src = `/public/images/scissors.svg`;
});

//rules button
rulesBtn.addEventListener("click", () => {
  rules.classList.toggle("displaynone");
});
rulesCloseBtn.addEventListener("click", () => {
  rules.classList.toggle("displaynone");
});

function gameFunctionality() {
  const index = Math.floor(Math.random() * 3);
  const computerMoveArray = ["Rock", "Paper", "Scissors"];
  console.log(
    "playerMove: " + playerMove,
    "computerMove: " + computerMoveArray[index]
  );

  switch (computerMoveArray[index]) {
    case "Rock":
      if (playerMove === "Rock") {
        console.log("Tie");
        gameTie("Rock", "Rock");
      }
      if (playerMove === "Paper") {
        console.log("Player Won");
        playerWon("Paper", "Rock");
      }
      if (playerMove === "Scissors") {
        console.log("Computer Won");
        computerWon("Scissors", "Rock");
      }
      break;
    case "Paper":
      if (playerMove === "Rock") {
        console.log("Computer Won");
        computerWon("Rock", "Paper");
      }
      if (playerMove === "Paper") {
        console.log("Tie");
        gameTie("Paper", "Paper");
      }
      if (playerMove === "Scissors") {
        console.log("Player Won");
        playerWon("Scissors", "Paper");
      }
      break;
    case "Scissors":
      if (playerMove === "Rock") {
        console.log("Player Won");
        playerWon("Rock", "Scissors");
      }
      if (playerMove === "Paper") {
        console.log("Computer Won");
        computerWon("Paper", "Scissors");
      }
      if (playerMove === "Scissors") {
        console.log("Tie");
        gameTie("Scissors", "Scissors");
      }
      break;
  }
  localStorage.setItem(
    "scores",
    JSON.stringify({ player: playerScore, computer: computerScore }) //setiing scores to localstorage
  );
}

function playerWon(player, pc) {
  playerScore += 1;
  playerScoreDiv.innerHTML = playerScore;
  playerResult.style.display = "flex";
  pcResult.style.display = "none";
  whoWon.innerHTML = "YOU WIN";
  againstWho.innerHTML = "AGAINST PC";
  playAgain.innerHTML = "PLAY AGAIN";
  gameControls.style.display = "none";
  resultContainer.style.display = "flex";
  pcHandImg.src = `/public/images/${pc}.svg`;
  playerHand.classList.add(`${player}Result`);
  pcHand.classList.add(`${pc}Result`);
  nextbtn.style.display = "inline";
}
function computerWon(player, pc) {
  computerScore += 1;
  computerScoreDiv.innerHTML = computerScore;
  pcResult.style.display = "flex";
  playerResult.style.display = "none";
  whoWon.innerHTML = "YOU LOSE";
  againstWho.innerHTML = "AGAINST PC";
  playAgain.innerHTML = "PLAY AGAIN";
  gameControls.style.display = "none";
  resultContainer.style.display = "flex";
  pcHandImg.src = `/public/images/${pc}.svg`;
  playerHand.classList.add(`${player}Result`);
  pcHand.classList.add(`${pc}Result`);
  nextbtn.style.display = "none";
}
function gameTie(player, pc) {
  pcResult.style.display = "none";
  playerResult.style.display = "none";
  whoWon.innerHTML = "TIE UP";
  againstWho.innerHTML = "";
  playAgain.innerHTML = "REPLAY";
  gameControls.style.display = "none";
  resultContainer.style.display = "flex";
  pcHandImg.src = `/public/images/${pc}.svg`;
  playerHand.classList.add(`${player}Result`);
  pcHand.classList.add(`${pc}Result`);
  nextbtn.style.display = "none";
}

// play aagain button clicked
playAgain.addEventListener("click", () => {
  gameControls.style.display = "flex";
  resultContainer.style.display = "none";
  playerHand.classList.remove("RockResult", "PaperResult", "ScissorsResult");
  pcHand.classList.remove("RockResult", "PaperResult", "ScissorsResult");
  nextbtn.style.display = "none";
});

//next button clicked
nextbtn.addEventListener("click", () => {
  winningScreen.style.display = "flex";
  headerId.style.display = "none";
  gameControls.style.display = "none";
  resultContainer.style.display = "none";
  nextbtn.style.display = "none";
});

// play again from winning screen
playAgainWinScreen.addEventListener("click", () => {
  winningScreen.style.display = "none";
  headerId.style.display = "flex";
  gameControls.style.display = "flex";
});
