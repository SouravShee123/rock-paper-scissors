let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    return "scissors";
}
const outcomeEl = document.querySelector(".round-outcome");
const scoreEl = document.querySelector(".score-board");
const winnerEl = document.querySelector(".game-winner");

function playRound(humanSelection, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) return; // Stop after a player wins

    if (humanSelection === computerChoice) {
        outcomeEl.textContent = `It's a tie! Both chose ${humanSelection}.`;
    } else if (
        (humanSelection === "rock" && computerChoice === "scissors") ||
        (humanSelection === "paper" && computerChoice === "rock") ||
        (humanSelection === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        outcomeEl.textContent = `You win! ${humanSelection} beats ${computerChoice}.`;
    } else {
        computerScore++;
        outcomeEl.textContent = `You lose! ${computerChoice} beats ${humanSelection}.`;
    }

    scoreEl.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    // Check for game winner (e.g., first to 5)
    if (humanScore === 5) {
        winnerEl.textContent = "Congratulations! You won the game!";
    } else if (computerScore === 5) {
        winnerEl.textContent = "Computer won the game! Better luck next time.";
    }
}

// Attach Event Listeners
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = button.className.toLowerCase(); // "rock", "paper", or "scissors"
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
});