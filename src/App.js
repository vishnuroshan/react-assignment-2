import React, { Component } from 'react';
import './App.css';
import Validate from './Validator/Validator';
class App extends Component {

  state = {
    string: '',
    seperated: []
  };

  onInputHandler = (event) => {
    this.setState({ string: event.target.value, seperated: event.target.value.split('') });
    console.log(this.state.seperated);
  }

  deletehandler = (index) => {
    let arr = this.state.seperated;
    arr.splice(index, 1);
    this.setState({ string: arr.join('') });
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>
            char seperator!!
          </h1>
          <input type="text" onChange={this.onInputHandler}></input>
          <Validate delete={this.deletehandler} characters={this.state.string} />
        </div>
      </div>
    );
  }
}

export default App;
