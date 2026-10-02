// Computer has to choose randomly between rock / paper / scissors using getComputerChoise function
// Human has to type in choice - use getHumanChoice function and prompt()
// We need to track scores : humanScore / computerScore in the global scope, start init will be 0
// Create function playRound() with 2 arguments - humanScore and computerScore, case insensitive, console.log()
// playRound function - 5 rounds, declares winner at the end. playRound is inside of playGame.

let humanScore = 0;
let computerScore = 0;

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
