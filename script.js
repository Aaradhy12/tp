// Number Guessing Game logic

const targetNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const resultElement = document.getElementById('result');

    if (userGuess === '') {
        resultElement.innerText = 'Please enter a number.';
    } else {
        attempts++;

        if (parseInt(userGuess) === targetNumber) {
            resultElement.innerText = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
            disableInputAndButton('userGuess');
        } else {
            resultElement.innerText = 'Incorrect. Try again.';
        }
    }
}

// Rock, Paper, Scissors Game logic

function playRPS(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultElement = document.getElementById('rpsResult');

    if (playerChoice === computerChoice) {
        resultElement.innerText = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultElement.innerText = 'You win!';
    } else {
        resultElement.innerText = 'You lose!';
    }
}

// Color Guessing Game logic

const targetColor = generateRandomColor();
document.getElementById('colorGuess').placeholder = `e.g., ${targetColor}`;

function checkColorGuess() {
    const userColorGuess = document.getElementById('colorGuess').value.toLowerCase();
    const resultElement = document.getElementById('colorResult');

    if (userColorGuess === targetColor) {
        resultElement.innerText = 'Congratulations! You guessed the correct color!';
        disableInputAndButton('colorGuess');
    } else {
        resultElement.innerText = 'Incorrect. Try again.';
    }
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function disableInputAndButton(elementId) {
    document.getElementById(elementId).disabled = true;
    document.querySelector('button').disabled = true;
}
