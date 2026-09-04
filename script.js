
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
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice){
    humanChoice.toLowerCase();
}