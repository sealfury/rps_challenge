const didUserWin = (userChoice, computerChoice) => {
  if (userChoice == "rock" && computerChoice == "scissors") {
    return true
  }
  else if (userChoice == "scissors" && computerChoice == "paper") {
    return true
  }
  else if (userChoice == "paper" && computerChoice == "rock") {
    return true
  }
  else if (userChoice === computerChoice) {
    alert('Draw! Try Again')
  }
  else {
    alert('You lost')
    return false
  }
}

export { didUserWin }