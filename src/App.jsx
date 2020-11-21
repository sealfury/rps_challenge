import React, { Component } from 'react'
import RpsButtons from './components/RpsButtons';
import { Button , Icon } from 'semantic-ui-react'
import { rpsGame} from './helpers/rpsHelper';
import  Selector from './components/Selector'

 class App extends Component {
   

  render() {
    return (
      <div>
        <RpsButtons />
        <Selector />
      </div>
    )
  }
}

export default App