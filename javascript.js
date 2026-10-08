// Saving result in this variables
let humanScore = 0;
let computerScore = 0;

// Event delegation through <div> - buttons parent
const divButtons = document.querySelector("#buttons");

divButtons.addEventListener("click", (event) => {
    let target = event.target;

    if (target.id == "btnRock" || target.id == "btnPaper" || target.id == "btnScissors") {
        console.log(playRound(target.textContent.toLowerCase(), getComputerChoise()));
    }
});

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

// Function that is handling chooses and returning winner
function playRound(humanChoice, computerChoice) {
    alert(humanChoice);
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            return "Computer: ROCK\nHuman: ROCK\nTie!";
        } else if (computerChoice == "paper") {
            computerScore += 1;
            return "Computer: PAPER\nHuman: ROCK\nYou lose!";
        } else {
            humanScore += 1;
            return "Computer: SCISSORS\nHuman: ROCK\nYou win!";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore += 1;
            return "Computer: ROCK\nHuman: PAPER\nYou win!";
        } else if (computerChoice == "paper") {
            return "Computer: PAPER\nHuman: PAPER\nTie!";
        } else {
            computerScore += 1;
            return "Computer: SCISSORS\nHuman: PAPER\n You lose!";
        }
    } else {
        if (computerChoice == "rock") {
            computerScore += 1;
            return "Computer: ROCK\nHuman: SCISSORS\nYou lose!";
        } else if (computerChoice == "paper") {
            humanScore += 1;
            return "Computer: PAPER\nHuman: SCISSORS\nYou win!";
        } else {
            return "Computer: SCISSORS\nHuman: SCISSORS\nTie!";
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