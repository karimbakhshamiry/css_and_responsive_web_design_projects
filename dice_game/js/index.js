let playersTurn = document.getElementById('player-turn')
const p1ScoreParagraph = document.getElementById('player-one-score')
const p2ScoreParagraph = document.getElementById('player-two-score')
const p1Dice = document.getElementById('player-one-dice')
const p2Dice = document.getElementById('player-two-dice')
let p1Score = 0
let p2Score = 0
const dice = document.getElementById('dice')
const startOver = document.getElementById('start-over')
let currentPlayer = 1

startOver.disabled = true


function roll(){
    return Math.floor(Math.random()*6) + 1
}


dice.addEventListener('click', function(){
    const diceValue = roll()
    if (currentPlayer === 1) {
        p2Dice.classList.remove('roll')
        p1Dice.classList.add('roll')
        p1Score += diceValue
        p1ScoreParagraph.textContent = `Score: ${p1Score}`
        p1Dice.textContent = diceValue

        if(p1Score >= 20) {
            playersTurn.textContent = `Player ${currentPlayer} Won🎉🎊`
            dice.disabled = true
            startOver.disabled = false

        } else {
            currentPlayer = 2
            playersTurn.textContent = `Player ${currentPlayer} Turn`
            p2Dice.classList.add('active')
            p1Dice.classList.remove('active')
        }
        
        
    } else {
        p1Dice.classList.remove('roll')
        p2Dice.classList.add('roll')
        p2Score += diceValue
        p2ScoreParagraph.textContent = `Score: ${p2Score}`
        p2Dice.textContent = diceValue

        if(p2Score >= 20) {
            playersTurn.textContent = `Player ${currentPlayer} Won🎉🎊`
            dice.disabled = true
            startOver.disabled = false

        } else {
            currentPlayer = 1
            playersTurn.textContent = `Player ${currentPlayer} Turn`
            p1Dice.classList.add('active')
            p2Dice.classList.remove('active')
        }

    }
})

startOver.addEventListener('click', function(){
    playersTurn.textContent = 'Player 1 Turn'
    p1ScoreParagraph.textContent = 'Score: 0'
    p2ScoreParagraph.textContent = 'Score: 0'
    p1Dice.textContent = '-'
    p2Dice.textContent = '-'
    p2Dice.className = null
    p1Dice.className = 'active'
    p1Score = 0
    p2Score = 0
    currentPlayer = 1
    startOver.disabled = true
    dice.disabled = false

})
