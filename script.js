const  buttons =  document.querySelectorAll("button");

buttons.forEach((button) => {
   button.addEventListener("click", ()=> {
	const humanChoice = button.id;
	const computerChoice = getComputerChoice();
    	playRound(humanChoice, computerChoice);
 	console.log(`Human: ${humanScore}, computer: ${computerScore}`);
})
})
let humanScore = 0;
let computerScore = 0;

// generate the computers choice
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// increment the value of player who won the game
function counter(player, score) {
    if (player === "human") {
        humanScore += score;
    } else if (player === "computer") {
        computerScore += score;
    }
}
// get the user input
//function getHumanChoice() {
  //  const userInput = prompt("Enter your choice (rock, paper, or scissors):");
    //return userInput;
//}
// The game logic

function playRound(humanChoice, computerChoice) {
    const humanValue = humanChoice.toLowerCase();
    const computerValue = computerChoice.toLowerCase();

    if (computerValue === "rock" && humanValue === "scissors" ||
        computerValue === "paper" && humanValue === "rock" ||
        computerValue === "scissors" && humanValue === "paper") {
        counter('computer', 1);
        console.log(`You lose! ${computerValue} beats ${humanValue}`);
    } else if (humanValue === "rock" && computerValue === "scissors" ||
               humanValue === "paper" && computerValue === "rock" ||
               humanValue === "scissors" && computerValue === "paper") {
        counter('human', 1);
        console.log(`Hurray! You won! ${humanValue} beats ${computerValue}`);
    } else if (humanValue === computerValue) {
        console.log(`It's a tie! You both chose ${humanValue}`);
    } else {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
    }
}

//  implimentation of the game to allow for five trials
function playGame() {
    
    while(true) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    }
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

//playGame();
