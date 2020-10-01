export function getRandomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);

    let computerChoice;
// 1=rock, 2=paper, 3=scissors
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else if (randomNumber === 3) {
        computerChoice = 'scissors';   
    }
    return computerChoice;
}

export function didUserWin(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (player === 'rock' && computer === 'paper') {
        return 'lose';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } else if (player === 'paper' && computer === 'rock') {
        return 'win';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'lose';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'lose';
    }
}
