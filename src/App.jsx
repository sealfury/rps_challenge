import React, { Component } from 'react'
import RpsButtons from './components/RpsButtons';
import { rpsGame} from './helpers/rpsHelper';
// import { Selector } from './components/Selector';

 class App extends Component {
   state = {
     player1: null,
     player2: null,
   };


  render() {
    return (
      <div>
        <select id='rps-selector'>
          <option value="rock">Rock</option>
          <option value="paper">Paper</option>
          <option value="scissors">Scissors</option>
        </select>
       <RpsButtons />
      </div>
    )
  }
}

export default App