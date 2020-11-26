
const didUserWin = (userChoice, computerChoice) => {
  if (userChoice === "rock" && computerChoice === "scissors") {
    alert(`Computer chose ${computerChoice}. You Win!`)
    return true
  }
  else if (userChoice === "scissors" && computerChoice === "paper") {
    alert(`Computer chose ${computerChoice}. You Win!`)
    return true
  }
  else if (userChoice === "paper" && computerChoice === "rock") {
    alert(`Computer chose ${computerChoice}. You Win!`)
    return true
  }
  else if (userChoice === computerChoice) {
    alert(`Computer chose ${computerChoice}. Draw!`)
  }
  else {
    alert(`Computer chose ${computerChoice}. You Lost :(`)
    return false
  }
}

export { didUserWin }