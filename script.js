
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
        if(randomNumber===0){
            return "rock";
        }
        else if(randomNumber===1){
            return "paper";
        }
        else{
            return "scissors"
        }
}

function getHumanChoice() {
    let myChoice = parseInt(prompt("Enter 0 for rock, 1 for paper and 2 for scissors"));
    if(myChoice === 0){
        return "rock";
    }
    else if(myChoice === 1){
        return "paper";
    }
    else{
        return "scissors"
    }
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanSelection,computerChoice){
    let humanInput = humanSelection.toLowerCase();
    if(humanInput==="rock" && computerChoice==="paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if(humanInput==="paper" && computerChoice==="scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if(humanInput==="scissors" && computerChoice==="rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if(humanInput==="rock" && computerChoice==="scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if(humanInput==="paper" && computerChoice==="rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(humanInput==="scissors" && computerChoice==="paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else{
        console.log("Its a draw! Lets go again");

    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);