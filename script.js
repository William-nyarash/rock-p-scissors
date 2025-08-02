const body = document.querySelector(".canvas");
const mesg = document.querySelector(".mesg")
const buttons = document.querySelectorAll("button");
const resultTracker = document.createElement('div');
const results = document.createElement('div');

mesg.appendChild(resultTracker);
body.appendChild(results);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function counter(player, score) {
    if (player === "human") {
        humanScore += score;
    } else if (player === "computer") {
        computerScore += score;
    }
}

function playRound(humanChoice, computerChoice) {
    const humanValue = humanChoice.toLowerCase();
    const computerValue = computerChoice.toLowerCase();

    if (
        (computerValue === "rock" && humanValue === "scissors") ||
        (computerValue === "paper" && humanValue === "rock") ||
        (computerValue === "scissors" && humanValue === "paper")
    ) {
        counter('computer', 1);
        results.textContent = `Computer chose ${computerValue}, you chose ${humanValue}. Computer wins this round.`;
    } else if (
        (humanValue === "rock" && computerValue === "scissors") ||
        (humanValue === "paper" && computerValue === "rock") ||
        (humanValue === "scissors" && computerValue === "paper")
    ) {
        counter('human', 1);
        results.textContent = `You chose ${humanValue}, computer chose ${computerValue}. You win this round.`;
    } else {
        results.textContent = `It's a tie! You both chose ${humanValue}.`;
    }

    resultTracker.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    resultTracker.textContent = "Score - You: 0, Computer: 0";
    results.textContent = "Make your move!";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (humanScore >= 5 || computerScore >= 5) return;

            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);

            if (humanScore >= 5 || computerScore >= 5) {
                if (humanScore > computerScore) {
                    results.textContent = " You win the game!";
                } else if (computerScore > humanScore) {
                    results.textContent = "Computer wins the game!";
                } else {
                    results.textContent = "It's a tie game!";
                }
            }
        });
    });
}

playGame();
