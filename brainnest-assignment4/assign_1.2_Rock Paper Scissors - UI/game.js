var GameCounter = {
  total: 0,
  wins: 0,
  loses: 0,
  draw: 0,
  botWins: 0,
  botLoses: 0,
};

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const reloadBtn = document.querySelector(".reload_button");

let text = document.querySelector(".text");
text.style.color = "black";
text.style.fontSize = "50px";
text.style.textAlign = "center";

let playerWins = document.querySelector(".player-score");
playerWins.textContent = 0;
let BotWins = document.querySelector(".bot-score");
BotWins.textContent = 0;

const wins = document.createElement("p");
wins.style.fontSize = "x-large";
wins.style.color = "blue";
wins.style.textAlign = "center";

const lost = document.createElement("p");
lost.style.fontSize = "x-large";
lost.style.color = "red";
lost.style.textAlign = "center";

const draw = document.createElement("p");
draw.style.fontSize = "x-large";
draw.style.color = "grey";
draw.style.textAlign = "center";

document.body.appendChild(wins);
document.body.appendChild(lost);
document.body.appendChild(draw);

rockBtn.addEventListener("click", rockClicked);
paperBtn.addEventListener("click", paperClicked);
reloadBtn.addEventListener("click", resetClicked);


function rockClicked() {
  game("rock");
}

function paperClicked() {
  game("paper");
}

function scissorsClicked() {
  game("scissors");
}


function resetClicked() {
  GameCounter = {
    total: 0,
    wins: 0,
    loses: 0,
    draw: 0,
    botWins: 0,
    botLoses: 0,
  };
  text.textContent = "";
  wins.innerHTML = "";
  lost.innerHTML = "";
  draw.innerHTML = "";

  BotWins.textContent = 0;
  playerWins.textContent = 0;
  rockBtn.addEventListener("click", rockClicked);
  paperBtn.addEventListener("click", paperClicked);
  reloadBtn.addEventListener("click", resetClicked);
}


function game(playerSelectionn) {
  // alert(playerSelectionn);
  //document.getElementById('status').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>";
  GameCounter.total = GameCounter.total + 1;

  const computerSelection = computerPlay();

  let playerSelection = playerSelectionn;
  switch (playRound(playerSelection, computerSelection)) {
    case 1:
      // alert(
      //   `You Win the round! ${playerSelection} beats ${computerSelection}`
      // );
      GameCounter.wins++;
      playerWins.textContent = GameCounter.wins;
      GameCounter.botLoses++;
      console.log(GameCounter);

      break;
    case 0:
      // alert(
      //   `You Lose the round! ${computerSelection} beats ${playerSelection}`
      // );
      GameCounter.botWins++;
      GameCounter.loses++;
      BotWins.textContent = GameCounter.botWins;

      console.log(GameCounter);
      break;
    case -1:
      // alert(
      //   `This round is a tie,! ${playerSelection} cant beat ${computerSelection}`
      // );
      GameCounter.draw++;
      console.log(GameCounter);
      break;
    case 101:
      //alert("Incorrect Input");

      break;
  }

  endGame();
}

function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];

  const random = Math.floor(Math.random() * options.length);

  return options[random];
}

function playRound(playerSelection, computerSelection) {
  let result = -10;

  computerSelection = computerSelection.toLowerCase();

  console.log("player Selected (" + playerSelection + ")");
  console.log("Computer Selected ( " + computerSelection + ")");
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    //tie
    result = -1;
    // console.log(result);
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    result = 0;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    result = 0;
    //  console.log(result);
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    result = 0;
    //  console.log(result);
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    result = 1;
    //   console.log(result);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = 1;
    //   console.log(result);
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = 1;
    //    console.log(result);
  } else {
    result = 101;
    //    console.log(result);
  }
  return result;
}



function endGame() {
  if (GameCounter.total == 5) {
    //display the score at the end of page
    if (GameCounter.wins > GameCounter.loses) {
      text.textContent = "Congratz, You have won the match. ";
      wins.innerHTML = "wins=" + GameCounter.wins;
      lost.innerHTML = "lost=" + GameCounter.loses;
      draw.innerHTML = "draws=" + GameCounter.draw;
    } else if (GameCounter.wins == GameCounter.loses) {
      text.textContent = "Not Bad, Its a draw ";
      wins.innerHTML = "wins=" + GameCounter.wins;
      lost.innerHTML = "lost=" + GameCounter.loses;
      draw.innerHTML = "draws=" + GameCounter.draw;
    } else {
      text.textContent = "Too bad,You lost the match";
      wins.innerHTML = "wins=" + GameCounter.wins;
      lost.innerHTML = "lost=" + GameCounter.loses;
      draw.innerHTML = "draws=" + GameCounter.draw;
    }

    //disable buttons

    rockBtn.removeEventListener("click", rockClicked);
    paperBtn.removeEventListener("click", paperClicked);
    scissorsBtn.removeEventListener("click", scissorsClicked);
  }
}
