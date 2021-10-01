let playerScore = 0;
let computerScore = 0;

const gameButtons = document.querySelectorAll('.game-buttons');
const replayButton = document.querySelector('#replay');
const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');
const result = document.querySelector('.result');


gameButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        game(playerSelection);
    });
});

replayButton.addEventListener('click', playAgain);

function playAgain(){
    playerScore = 0;
    computerScore = 0;

    result.textContent = "";
    playerScoreText.textContent = `Player: 0`;
    computerScoreText.textContent = `Computer: 0`;

    replayButton.style.display = 'none';
    gameButtons.forEach(button => {
        button.style.display = 'block';
    });
    
}

function game(playerSelection) {

    result.textContent = playRound(playerSelection, getComputerSelection());
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
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

function endGame() {
    if (computerScore > playerScore) {
        result.textContent = `Computer wins with a score of ${computerScore} - ${playerScore}!`;
    }
    else if (playerScore > computerScore) {
        result.textContent = `You win with a score of ${playerScore} - ${computerScore}!`;
    }
    else {
        result.textContent = `${playerScore} - ${computerScore}! It's a tie!`;
    }

    gameButtons.forEach(button => {
        button.style.display = 'none';
    });
    replayButton.style.display = 'block';
}

function getComputerSelection() {
    // Randomly return rock, paper or scissors
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randChoice = choices[Math.floor(Math.random() * choices.length)];
    return randChoice;
}