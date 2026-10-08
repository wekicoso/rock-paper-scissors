// Saving result in this variables
let humanScore = 0;
let computerScore = 0;

const result = document.querySelector("#result");
// Event delegation through <div> - buttons parent
const divButtons = document.querySelector("#buttons");
divButtons.addEventListener("click", (event) => {
    let target = event.target;

    if (target.id == "btnRock" || target.id == "btnPaper" || target.id == "btnScissors") {
        const humanChoice = target.textContent.toLowerCase();
        const computerChoice = getComputerChoise().toLowerCase();
        const winner = playRound(humanChoice, computerChoice);
        
        outputText(humanChoice, computerChoice, winner);
    }
});


function outputText(humanChoice, computerChoice, winner) {
    const paraHumanChoice = document.querySelector("#human");
    const paraComputerChoice = document.querySelector("#computer");
    const paraWinner = document.querySelector("#winner");

    paraHumanChoice.textContent = "HUMAN: " + humanChoice;
    paraComputerChoice.textContent = "COMPUTER: " + computerChoice;
    paraWinner.textContent = "WINNER: ";

    switch (winner) {
        case -1:
            paraWinner.textContent += "COMPUTER!";
            break;
        case 0:
            paraWinner.textContent += "TIE!";
            break;
        case 1:
            paraWinner.textContent += "HUMAN!";
    }
}

// Randomly choose for computer
function getComputerChoise() {
    const computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Function that is handling chooses and returning 1 / 0 / -1 (win / tie / lose);
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            return 1;
        } else if (computerChoice == "paper") {
            return -1;
        } else {
            return 0;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            return -1;
        } else if (computerChoice == "paper") {
            return 0;
        } else {
            return 1;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "scissors") {
            return 0;
        } else if (computerChoice == "paper") {
            return 1;
        } else {
            return -1;
        }
    }
}

// Reseting score, can be asigned to some new button
function endGame() {
    humanScore = 0;
    computerScore = 0;
}

// Printing score in console, could be asigned to some new button
function printFinalResult(computerScore, humanScore) {
    const textResult = (humanScore > computerScore) ? "*** WINNER IS HUMAN ***" :
        (computerScore > humanScore) ? "*** WINNER IS COMPUTER ***" : "*** TIE ***";
    console.log("FINAL RESULT" + "\nComputer: " + computerScore + "\nHuman: " + humanScore + "\n" + textResult);
}