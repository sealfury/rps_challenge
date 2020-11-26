import React from 'react'
import { Button, Icon, Grid } from 'semantic-ui-react'



const RpsButtons = ( {handleUserChoice} ) => {


  return (
    <div>
    <Grid id='rps-grid' columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Button 
                size='massive' 
                color='red' 
                animated='fade' 
                id='rock' 
                name='rock' 
                onClick={() => handleUserChoice('rock')}
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
                onClick={() => handleUserChoice('paper')}
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
                onClick={() => handleUserChoice('scissors')}
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
  </div>
  )
}


export default RpsButtons