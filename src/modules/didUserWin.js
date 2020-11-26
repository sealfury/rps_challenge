const didUserWin = (userChoice, computerChoice) => {
  if (userChoice == "rock" && computerChoice == "scissors") {
    alert('You won!')
    return true
  }
  else if (userChoice == "scissors" && computerChoice == "paper") {
    alert('You won!')
    return true
  }
  else if (userChoice == "paper" && computerChoice == "rock") {
    alert('You won!')
    return true
  }
  else if (userChoice === computerChoice) {
    alert('Draw! Try Again')
  }
  else {
    alert('You lost :(')
    return false
  }
}

export { didUserWin }