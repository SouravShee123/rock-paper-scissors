let humanScore = 0;
let computerScore = 0;

// Getting computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Storing the Score and Winner of a round
function playRound(humanSelection, computerChoice) {
    let humanInput = humanSelection.toLowerCase();
    if (humanInput === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanInput === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if (humanInput === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (humanInput === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanInput === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanInput === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else {
        console.log("Its a draw! Lets go again");
    }
}

// Add EventListener 
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const humanSelection = button.className;  // assigns the value by the className of the button
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    })
})

