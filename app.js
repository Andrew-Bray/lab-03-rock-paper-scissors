// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from './utils.js';

const playButton = document.getElementById('play-button');
const winDisplay = document.getElementById('win-display');
const lossDisplay = document.getElementById('loss-display');
const drawDisplay = document.getElementById('draw-display');
const resetDisplay = document.getElementById('reset-display');
const assessGame = document.getElementById('assess-game');
const resetButton = document.getElementById('reset-button');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;


// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const computerChoice = getRandomThrow();
// get the user's choice, based on which one they checked
    const userChoice = document.querySelector(':checked').value;
// deliver the outcome of the game
    const outcome = didUserWin(userChoice, computerChoice);

// what happens based on each possible outcome
    if (outcome === 'draw') {
        draws++;
        drawDisplay.textContent = draws;
        assessGame.textContent = `Bully, it seems we have come to a head. we both chose ${userChoice}.`;
    } else if (outcome === 'lose') {
        losses++;
        lossDisplay.textContent = losses;
        assessGame.innerHTML = `Tough luck <em>sport!</em>  I chose ${computerChoice} and you sadly chose ${userChoice}.`;
    } else if (outcome === 'win') {
        wins++;
        winDisplay.textContent = ` ${wins}`;
        assessGame.textContent = `Aha! It seems with your ${userChoice} you bested my ${computerChoice}.`;
    }

});
let resets = 0;
resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    resets++;
    winDisplay.textContent = 0;
    lossDisplay.textContent = 0;
    drawDisplay.textContent = 0;
    assessGame.textContent = '';
    resetDisplay.textContent = resets;

});


// 1. Imports:
//     - Your `getRandomThrow` and `doesUserWin` functions
// 1. Reference needed DOM elements:
//     - The radio buttons with the user's throw choice
//         - You can alternatively use `document.querySelector('input:checked')` in your event handler to get 
//         the actively checked radio button each time the play button is clicked
//     - The button the user will click for playing
//     - The element(s) needed to display:
//         - throw result (win, lose, or draw)
//         - current wins, losses, and draws counts
// 1. Setup Application State (what will change over time)
//    - wins
//    - losses
//    - draws
// 1. Add event listener(s):
//    - Subscribe to the button's click event using `addEventListener`