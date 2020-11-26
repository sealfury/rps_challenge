import React, { Component } from 'react'
import RpsButtons from './components/RpsButtons';
import { Button , Grid, Icon, Message, Segment } from 'semantic-ui-react'
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
    this.incrementScore(scoreWinner)
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

  incrementScore(didUserWin) {
    if (didUserWin == true) {
      this.setState({ score: {user: this.state.score.user + 1} })
    } 
    else if (didUserWin == false) {
      this.setState({ score: {computer: this.state.score.computer + 1} })
    }
  }

  render() {
    return (
      <Segment>
      <Grid columns={3}>
        <Grid.Row>
        <Grid.Column>
          <Button color='red' size='huge' animated='fade' id='rock' name='rock' onClick={() => this.handleUserChoice('rock')}>
            <Button.Content visible><Icon size='large' color='white' name='hand rock'></Icon></Button.Content>
            <Button.Content hidden>Rock</Button.Content>
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button size='huge' color='green' animated='fade' id='paper' name='paper' onClick={() => this.handleUserChoice('paper')}>
            <Button.Content visible><Icon size='large' color='white' name='hand paper'></Icon></Button.Content>
            <Button.Content hidden>Paper</Button.Content>
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button id='scissors' name='scissors' onClick={() => this.handleUserChoice('scissors')}>
            Scissors
          </Button>
        </Grid.Column>
        </Grid.Row>
      </Grid>
          <Message icon>
            <Icon color='red' name='star' />
            <Message.Content>
            <Message.Header>Scoreboard
            </Message.Header>
            <Message.List>
            <Message.Item>You: {this.state.score.user}</Message.Item>
            <Message.Item>Computer: {this.state.score.computer}</Message.Item>
            </Message.List>
            </Message.Content>
          </Message>
      </Segment>
    )
  }
}

export default App