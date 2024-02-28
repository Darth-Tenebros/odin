const choices = ['rock', 'paper', 'scissors']

const winner = document.getElementById('winner')

function decideWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'TIE';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins';
        } else { // computerChoice === 'scissors'
            return 'User wins';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'User wins';
        } else { // computerChoice === 'scissors'
            return 'Computer wins';
        }
    } else { // userChoice === 'scissors'
        if (computerChoice === 'rock') {
            return 'Computer wins';
        } else { // computerChoice === 'paper'
            return 'User wins';
        }
    }
}


function handleChoice(choice){
    var compChoice = choices[Math.floor(Math.random() * choices.length)]
    
    decision = decideWinner(choice, compChoice)

    winner.textContent = decision
}
