function guessingGame() {
    let answer = Math.floor(Math.random() * 100);
    let gameOver = false;
    let guesses = 0;
    
    return function guessNum(num){
        if(gameOver) return "The game is over, you already won!"
        guesses++
        if(num === answer){
            gameOver = true;
            return `You win! You found ${num} in ${guesses}`
        }
        if(num > answer) return `${num} is too high`
        if(num < answer) return `${num} is too low`
    }

}

module.exports = { guessingGame };
