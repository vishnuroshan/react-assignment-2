import React, { Component } from 'react';
import './App.css';
import Validate from './Validator/Validator';
import Char from './Char/Char';

class App extends Component {
  state = {
    string: '',
    seperated: []
  };

  onInputHandler = (event) => {
    this.setState({ string: event.target.value, seperated: event.target.value.split('') });
  };

  deletehandler = (index) => {
    let arr = this.state.seperated.filter((e, i) => i !== index);
    this.setState({ string: arr.join(''), seperated: arr });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>
            char seperator!!
          </h1>
          <input type="text" onChange={this.onInputHandler} value={this.state.string}></input>
          <Validate characters={this.state.string} />
          {this.state.string.split('').map((char, index) => {
            return <Char delete={() => this.deletehandler(index)} character={char} key={index} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
