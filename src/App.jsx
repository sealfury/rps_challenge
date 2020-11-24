import React, { Component } from 'react'
import RpsButtons from './components/RpsButtons';
import { Button , Icon } from 'semantic-ui-react'
import { rpsGame } from './helpers/rpsHelper';
import  Selector from './components/Selector'

 class App extends Component {
   state = {
     score: 0
   }

  handleUserChoice(props) {
    alert(`You chose ${props}`);
    this.setState({ score: this.state.score + 1 })
  }

  getComputerChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
  }

  didUserWin = (userChoice, computerChoice) => {
    if (userChoice === "rock" && computerChoice === "scissors") {
      return true
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
      return true
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
      return true
    }
    else if (userChoice === computerChoice) {
      alert('Draw! Try Again')
    }
    else {
      return false
    }
  }

  increaseScore(didUserWin) {
    if (didUserWin = true) {
      this.setState({ score: this.state.score ++})
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
            Your Score: {this.state.score}
          </p>
      </div>
    )
  }
}

export default App