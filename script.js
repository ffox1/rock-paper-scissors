let choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

game();

function getComputerSelection() {
    // Randomly return rock, paper or scissors
    let randChoice = choices[Math.floor(Math.random() * choices.length)];
    return randChoice;
}

function playRound(playerSelection, computerSelection) {
    // Plays a single round
    switch (true) {
        case playerSelection === 'Rock' && computerSelection === 'Paper':
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;

        case playerSelection === 'Rock' && computerSelection === 'Scissors':
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;

        case playerSelection === 'Paper' && computerSelection === 'Rock':
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;

        case playerSelection === 'Paper' && computerSelection === 'Scissors':
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;

        case playerSelection === 'Scissors' && computerSelection === 'Rock':
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;

        case playerSelection === 'Scissors' && computerSelection === 'Paper':
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;

        default:
            return `It's a tie!`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerSelection(), getComputerSelection()));
    }

    if (computerScore > playerScore) {
        console.log(`Computer wins with a score of ${computerScore} - ${playerScore}`);
    }
    else {
        console.log(`You win with a score of ${playerScore} - ${computerScore}`);
    }
}

function getPlayerSelection() {
    let playerSelection = window.prompt('Choose your weapon');
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    while (!choices.includes(playerSelection)) {
        playerSelection = window.prompt('Choose between rock, paper, and scissors');
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
    return playerSelection;
}