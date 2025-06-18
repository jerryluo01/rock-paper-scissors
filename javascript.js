function getComputerChoice() {
    let rando = Math.floor(Math.random() * 3);
    if (rando === 0) return "Rock";
    else if (rando === 1) return "Paper";
    else return "Scissors";
}

function getHumanChoice() {
    let ans = prompt("Rock, Paper, Scissors!");
    return ans;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        if (computerChoice === "Paper") {
            console.log("Computer Wins!");
            return 0;
        }
        else if (computerChoice === "Rock") {
            console.log("Draw");
            return 2
        }
        else {
            console.log("Human Wins!");
            return 1;
        }
    }
    
    else if (humanChoice === "paper") {
        if (computerChoice === "Scissors") {
            console.log("Computer Wins!");
            return 0;
        }
        else if (computerChoice === "Paper") {
            console.log("Draw");
            return 2
        }
        else {
            console.log("Human Wins!");
            return 1;
        }
    }

    else {
        if (computerChoice === "scissors") {
            console.log("Computer Wins!");
            return 0;
        }
        else if (computerChoice === "Scissors") {
            console.log("Draw");
            return 2
        }
        else {
            console.log("Human Wins!");
            return 1;
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let winner = playRound(humanSelection, computerSelection);

        if (winner === 0) computerScore++;
        else if (winner === 2) {
            computerScore++;
            humanScore++;
        }
        else humanScore++;

        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    }
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) console.log("Human Wins!");
    else console.log("Computer Wins!");
}

console.log(playGame());