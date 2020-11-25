import React, { Component } from 'react'
import RpsButtons from './components/RpsButtons';
import { Button , Icon } from 'semantic-ui-react'
import { rpsGame } from './helpers/rpsHelper';


 class App extends Component {
  state = {
    score: {
      user: 0,
      computer: 0
    }
  }
   
  handleUserChoice(userChoice) {
    const computerChoice = this.getComputerChoice()
    const scoreWinner = this.didUserWin(userChoice, computerChoice)
    this.increaseScore(scoreWinner)
  }

  getComputerChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
  }

  didUserWin = (userChoice, computerChoice) => {
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

  increaseScore(didUserWin) {
    if (didUserWin == true) {
      this.setState({ score: {user: this.state.score.user + 1} })
    } 
    else if (didUserWin == false) {
      this.setState({ score: {computer: this.state.score.computer + 1} })
    }
  }

  render() {
    return (
      <div>
          <button id='rock' name='rock' onClick={() => this.handleUserChoice('rock')}>
            Rock
          </button>
          <button id='paper' name='paper' onClick={() => this.handleUserChoice('paper')}>
            Paper
          </button>
          <button id='scissors' name='scissors' onClick={() => this.handleUserChoice('scissors')}>
            Scissors
          </button>
          <p>
            Your Score: {this.state.score.user}
            <br/>
            Computer Score: {this.state.score.computer}
          </p>
      </div>
    )
  }
}

export default App