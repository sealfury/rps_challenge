import React, { Component } from 'react'

 class Selector extends Component {
  state = {value: ''}

  handleChange = e => {
    this.setState({value: e.target.value});
    
  }

  handleSubmit = e => { 
    alert('Player 1 chose ' + this.state.value)
    e.preventDefault();
  }

  render() {
    return (
       <select 
       id='rps-selector'
       value={this.state.value}
       onChange={this.handleSubmit}
       >
          <option value="rock">Rock</option>
          <option value="paper">Paper</option>
          <option value="scissors">Scissors</option>
        </select>
    )
  }
}
export default Selector
