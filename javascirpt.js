
let humanScore = 0;
let computerScore = 0;
let btns = document.querySelectorAll(".choices");


btns.forEach(button => {
    button.addEventListener('click', (event) => {
        const btnsValue = button.value;
        const player_display = document.querySelector("#player");
        const display = document.createElement("h1")
        display.textContent = btnsValue;
        player_display.appendChild(display)
    });
});

//This is player input
function humanChoice(){
    return new Promise((resolve) => {
    btns.forEach(button => {
        button.addEventListener('click', (event) => {
            const btnsValue = button.value;
            console.log(btnsValue);
            resolve(btnsValue);
            });
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
    const bot_display = document.querySelector("#bot")
    const display = document.createElement("h1")
    if ( c_choice == 1){
        display.textContent = "rock";
        display.style.color = "white";
        bot_display.appendChild(display)
        return "rock";
    } else if ( c_choice == 2){
        display.textContent = "paper";
        display.style.color = "white";
        bot_display.appendChild(display)
        return "paper";
    } else {
        display.textContent = "scissors";
        display.style.color = "white";
        bot_display.appendChild(display)
        return "scissors";
    }
};

// This is logic for winner & loser
async function playRound(){
    let playerChoice = await humanChoice();
    let botSelect = getComputer();
    if (playerChoice === "rock" && botSelect === "scissors"){
        console.log("You win!! Rock beat Scissors")
        humanScore++;
    } else if (playerChoice === "paper" && botSelect === "rock") {
        console.log("You win!! Paper beat Rock")
        humanScore++;
    } else if (playerChoice === "scissors" && botSelect ==="paper"){
        console.log("You win!! Scissors beat paper")
        humanScore++;
    } else if (playerChoice === botSelect){
        console.log("TIE!")
    } else{
        console.log("LOSE!")
        computerScore++;
    }
    };

//This start game   
async function playGame (){
    const round = 5 
    for (let i = 1; i <= round; i++){
        //const humanSelection = humanChoice();
        //console.log(humanSelection)
        //const computerSelection = getComputer();
        //console.log(computerSelection)
        // if call function without () it will be the same data
        await playRound()
        }
        console.log("Result")
        if (humanScore === computerScore){
            // console.log("TIE")
            // console.log("Your score: " + humanScore)
            // console.log("Opponent score: " + computerScore)
            const result_bot = document.querySelector("#bot_result")
            const bot_display_result = document.createElement("h3")
            bot_display_result.textContent = "TIE!"
            result_bot.appendChild(bot_display_result)
            const result = document.querySelector("#player_result")
            const display_result = document.createElement("h3")
            display_result.textContent = "TIE!"
            result.appendChild(display_result)
            bot_display_result.style.color = "white";
        } else if (humanScore > computerScore) {
            // console.log("You win!")
            // console.log("Your score: " + humanScore)
            // console.log("Opponent score: " + computerScore)
            const result_bot = document.querySelector("#bot_result")
            const bot_display_result = document.createElement("h3")
            bot_display_result.textContent = "LOSE!"
            result_bot.appendChild(bot_display_result)
            const result = document.querySelector("#player_result")
            const display_result = document.createElement("h3")
            display_result.textContent = "WIN!"
            result.appendChild(display_result)
            bot_display_result.style.color = "white";
        } else {
            // console.log("You lose...")
            // console.log("Your score: " + humanScore)
            // console.log("Opponent score: " + computerScore)
            const result_bot = document.querySelector("#bot_result")
            const bot_display_result = document.createElement("h3")
            bot_display_result.textContent = "WIN!"
            result_bot.appendChild(bot_display_result)
            const result = document.querySelector("#player_result")
            const display_result = document.createElement("h3")
            display_result.textContent = "Lose!"
            result.appendChild(display_result)
            bot_display_result.style.color = "white";
        }
    }

playGame()

