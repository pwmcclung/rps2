let playerChoice = prompt('Please enter rock, paper, or scissors: ').toLowerCase();
let computer = '';
let playerScore = 0;
let computerScore = 0;
let tieCount = 0;
let choice = Math.random();

function getComputerChoice(choice){

    if (choice < 0.33){
       computer = 'rock';
    }else if (choice < 0.67){
        computer = 'paper';
    }else{
        computer = 'scissors';
    }
    return computer;
}

let computerChoice = getComputerChoice();

function playRound(playerChoice, computerChoice){

    if (playerChoice == computerChoice){
        return 'tie';
    }else if (playerChoice == 'rock' && computerChoice == 'scissors'){
        return 'player';
    }else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        return 'player';
    }else if (playerChoice == 'paper' && computerChoice == 'rock'){
        return 'player';
   }else if (playerChoice == 'scissors' && computerChoice == 'rock'){
        return 'computer';
   }else if (playerChoice == 'paper' && computerChoice == 'scissors'){
      return 'computer';
   }else if (playerChoice == 'rock' && computerChoice == 'paper'){
      return 'computer';
   }
}



// playRound(playerChoice, computerChoice);
function game(playerChoice,computerChoice){
    let count = 0;
    while (count < 5){
        if (playRound(playerChoice, computerChoice) == 'tie'){
            tieCount++;
        };
        if (playRound(playerChoice, computerChoice) == 'player'){
            playerScore++;
        };
        if (playRound(playerChoice, computerChoice) == 'computer'){
            computerScore++;
        }
        count++;
    }
    if (playerScore > computerScore && playerScore > tieCount){
        console.log(`Player won ${playerScore} games!`);
    }else if (playerScore < computerScore && computerScore > tieCount){
        console.log(`Computer won ${computerScore} games!`);
    }else{
        console.log('We have a tie!')
    }
}
game(playerChoice, computerChoice)
