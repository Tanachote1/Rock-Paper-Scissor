
let humanScore = 0
let computerScore = 0
let btns = document.querySelectorAll(".choices");

function userSelect(){
btns.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(button.value)
    });
});
};

// This input player choice
//  function humanChoice(){
//      const choice = prompt("Enter Rock, Paper, Scissor").toLowerCase()
//      return choice
//  };
//This random choice
function getComputer(){
    const c_choice = Math.floor(Math.random() * 3) +1;
    if ( c_choice == 1){
        return "rock"
    } else if ( c_choice == 2){
        return "paper"
    } else {
        return "scissor"
    }
}
// This is logic for winner & loser
function playRound(userSelect,getComputer){
    if (humanChoice === "rock" && getComputer === "scissor"){
        console.log("You win!! Rock beat Scissor")
        humanScore++;
    } else if (humanChoice === "paper" && getComputer === "rock") {
        console.log("You win!! Paper beat Rock")
        humanScore++;
    } else if (humanChoice === "scissor" && getComputer ==="paper"){
        console.log("You win!! Scissor beat paper")
        humanScore++;
    } else if (humanChoice === getComputer){
        console.log("TIE!")
    } else{
        console.log("LOSE!")
        computerScore++;
    }
    }
    
//This start game   
function playGame (){

    const round = 5 
    for (let i = 1; i <= round; i++){
        const humanSelection = humanChoice();
        //console.log(humanSelection)
        const computerSelection = getComputer();
        //console.log(computerSelection)
        // if call function without () it will be the same data
        playRound(humanSelection,computerSelection)
        }
        console.log("Result")
        if (humanScore === computerScore){
            console.log("TIE")
            console.log("Your score: " + humanScore)
            console.log("Opponent score: " + computerScore)
        } else if (humanScore > computerScore) {
            console.log("You win!")
            console.log("Your score: " + humanScore)
            console.log("Opponent score: " + computerScore)
        } else {
            console.log("You lose...")
            console.log("Your score: " + humanScore)
            console.log("Opponent score: " + computerScore)
        }
    }
    


