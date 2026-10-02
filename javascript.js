// Computer has to choose randomly between rock / paper / scissors using getComputerChoise function
// Human has to type in choice - use getHumanChoice function and prompt()
// We need to track scores : humanScore / computerScore in the global scope, start init will be 0
// Create function playRound() with 2 arguments - humanScore and computerScore, case insensitive, console.log()
// playGame function - 5 rounds, declares winner at the end. playRound is inside of playGame.

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

function getHumanChoice() {
    return String(prompt("Choose one: ROCK / PAPER / SCISSORS")).toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

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

    function endGame() {
        humanScore = 0;
        computerScore = 0;
    }

    function printFinalResult(computerScore, humanScore) {
        const textResult = (humanScore > computerScore) ? "*** WINNER IS HUMAN ***" :
            (computerScore > humanScore) ? "*** WINNER IS COMPUTER ***" : "*** TIE ***";
        console.log("FINAL RESULT" + "\nComputer: " + computerScore + "\nHuman: " + humanScore + "\n" + textResult);
    }

    console.log(playRound(getHumanChoice(), getComputerChoise()));
    console.log(playRound(getHumanChoice(), getComputerChoise()));
    console.log(playRound(getHumanChoice(), getComputerChoise()));
    console.log(playRound(getHumanChoice(), getComputerChoise()));
    console.log(playRound(getHumanChoice(), getComputerChoise()));

    printFinalResult(computerScore, humanScore);

    endGame();
}



playGame();