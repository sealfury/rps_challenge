import React from 'react'
import { Button, Icon } from 'semantic-ui-react'


const RpsButtons = () => {

  return (
    <div>
    <Button animated='fade'>
      <Button.Content visible>
        <Icon name='hand rock'/>
      </Button.Content>
      <Button.Content hidden>Rock</Button.Content>
    </Button>
    <Button animated='fade'>
      <Button.Content visible>
        <Icon name='hand scissors'/>
      </Button.Content>
      <Button.Content hidden>Scissors</Button.Content>
    </Button>
    <Button animated='fade'>
      <Button.Content visible>
        <Icon name='hand paper'/>
      </Button.Content>
      <Button.Content hidden>Paper</Button.Content>
    </Button>
  </div>
  )
  }


export default RpsButtons