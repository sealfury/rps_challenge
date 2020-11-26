import React, { Component } from 'react'
import { Button , Container, Grid, Icon, Message, Header } from 'semantic-ui-react'
import { didUserWin } from './modules/didUserWin';
import './styling/App.css';
import { getComputerChoice } from './modules/getComputerChoice';

 class App extends Component {
  state = {
    score: {
      user: 0,
      computer: 0
    }
  }
   
  handleUserChoice(userChoice) {
    const computerChoice = getComputerChoice()
    const scoreWinner = didUserWin(userChoice, computerChoice)
    this.incrementScore(scoreWinner) 
    this.checkForVictory()
  }

  incrementScore(didUserWin) { 
    if (didUserWin === true) {
      this.setState({ score: {user: this.state.score.user + 1, computer: this.state.score.computer} })
    } 
    else if (didUserWin === false) {
      this.setState({ score: {computer: this.state.score.computer + 1, user: this.state.score.user} })
    }
  }

  checkForVictory() {
    if (this.state.score.user === 5) {
      this.setState( { score: { user: 0, computer: 0 } })
      alert('Game over, You Win')
    }
    else if (this.state.score.computer === 5) {
      this.setState( { score: { user: 0, computer: 0 } })
      alert('Game over, You Lose')
    }
  }
  
  render() {
    return (
      <body id='body'>
      <Container id='container'>
        <Header as='h1' id='header'>
          Welcome To Rock/Paper/Scissors!
        </Header>
        <Header as='h2' id='header-2'>
          Click To Start Playing
        </Header>
        <Grid id='rps-grid' columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Button 
                size='massive' 
                color='red' 
                animated='fade' 
                id='rock' 
                name='rock' 
                onClick={() => this.handleUserChoice('rock')}
              >
                <Button.Content visible>
                  <Icon size='large' color='white' name='hand rock'></Icon>
                </Button.Content>
                <Button.Content hidden>
                  Rock
                </Button.Content>
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button 
                size='massive' 
                color='green' 
                animated='fade' 
                id='paper' 
                name='paper' 
                onClick={() => this.handleUserChoice('paper')}
              >
                <Button.Content visible>
                  <Icon size='large' color='white' name='hand paper'></Icon>
                </Button.Content>
                <Button.Content hidden>
                  Paper
                </Button.Content>
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button 
                size='massive' 
                color='purple' 
                animated='fade' 
                id='scissors' 
                name='scissors' 
                onClick={() => this.handleUserChoice('scissors')}
              >
                <Button.Content visible>
                  <Icon size='large' color='white' name='hand scissors'></Icon>
                </Button.Content>
                <Button.Content hidden>
                  Scissors
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>       
        <Message id='message' icon>
        <Icon color='red' name='star' />
          <Message.Content>
            <Message.Header id='scoreboard'>
              Scoreboard
            </Message.Header>
            <Message.Header id='first'>First To 5 Wins</Message.Header>
            <Message.List>
              <Message.Item>
                You: {this.state.score.user}
              </Message.Item>
              <Message.Item>
                Computer: {this.state.score.computer}
              </Message.Item>
            </Message.List>
          </Message.Content>
        </Message>
      </Container>
      </body>
    )
  }
}

export default App