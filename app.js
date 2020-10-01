// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from './utils.js';

const playButton = document.getElementById('play-button');
const winDisplay = document.getElementById('win-display');
const lossDisplay = document.getElementById('loss-display');
const drawDisplay = document.getElementById('draw-display');
const assessGame = document.getElementById('assess-game');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;


// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const computerChoice = getRandomThrow();
// get the user's choice, based on which one they checked
    const checkedRadioButton = document.querySelector(':checked');
    const userChoice = checkedRadioButton.value;
// deliver the outcome of the game
    const outcome = didUserWin(userChoice, computerChoice);

// what happens based on each possible outcome
    if (outcome === 'draw') {
        draws++;
        drawDisplay.textContent = draws;
    } else if (outcome === 'lose') {
        losses++;
        lossDisplay.textContent = losses;
    } else if (outcome === 'win') {
        wins++;
        winDisplay.textContent = wins;
    }

}
);


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