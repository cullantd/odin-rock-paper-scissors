function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let winnerMessage = null;
    switch (true) {
        case (playerSelection === 'rock' && computerSelection === 'rock') :
            winnerMessage = "It's a tie!";
            break;
        case (playerSelection === 'paper' && computerSelection === 'rock') :
            winnerMessage = "Paper covers rock! Player wins this round! ";
            break;
        case (playerSelection === 'scissors' && computerSelection === 'rock') :
            winnerMessage = "Rock smashes scissors! Computer wins this round! ";
            break;
        case (playerSelection === 'rock' && computerSelection === 'paper') :
            winnerMessage = "Paper covers rock! Computer wins this round! ";
            break;
        case (playerSelection === 'paper' && computerSelection === 'paper') :
            winnerMessage = "It's a tie! ";
            break;
        case (playerSelection === 'scissors' && computerSelection === 'paper') :
            winnerMessage = "Scissors cuts paper! Player wins this round! ";
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissors') :
            winnerMessage = "Rock smashes scissors! Player wins this round! ";
            break;
        case (playerSelection === 'paper' && computerSelection === 'scissors') :
            winnerMessage = "Scissors cuts paper! Computer wins this round! ";
            break;
        case (playerSelection === 'scissors' && computerSelection === 'scissors') :
            winnerMessage = "It's a tie! ";
            break;
    }
    return winnerMessage;
}

function appendToTextDisplay(message, textDisplay) {
    textDisplay.appendChild(document.createTextNode(message));
}

function clearElement(elementID) {
    var div = document.getElementById(elementID);
      
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let i = 1;

    let computerSelection = null;
    let winnerMessage = null;
    let playerScoreDiv = document.getElementById('player-score-num');
    let computerScoreDiv = document.getElementById('computer-score-num');
    const resultsDiv = document.getElementById('results-display');

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id === 'reset') { //reset messages and scores
                clearElement(resultsDiv.id);
                playerScore = 0;
                playerScoreDiv.textContent = 0;
                computerScore = 0;
                computerScoreDiv.textContent = 0;
                i = 1;
            }
            computerSelection = computerPlay();
            winnerMessage = playRound(button.id, computerSelection);
            if (winnerMessage !== null) {
                if (winnerMessage.includes("Player")) {
                    playerScoreDiv.textContent = parseInt(playerScoreDiv.textContent) + 1;
                    playerScore++;
                } else if (winnerMessage.includes("Computer")) {
                    computerScoreDiv.textContent = parseInt(computerScoreDiv.textContent) + 1;
                    computerScore++;
                }
                appendToTextDisplay("Round " + i + ": " + winnerMessage + "\n", resultsDiv);
                i++;
            }
        
            if (playerScore === 5) {
                appendToTextDisplay("Player has 5 points, player wins the game! \n", resultsDiv);
                return;
            } else if (computerScore === 5) {
                appendToTextDisplay("Computer has 5 points, computer wins the game! \n", resultsDiv);
                return;
            }
        });
    });

}

//main

game();