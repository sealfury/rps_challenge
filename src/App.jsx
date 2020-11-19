import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react';
import RpsButtons from './components/RpsButtons';

 class App extends Component {
  render() {
    return (
      <div>
       <RpsButtons />
      </div>
    )
  }
}

export default App