import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Bob", age: 27},
      { name: "Will", age: 22},
      { name: "Tyrone", age: 38}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, let's try this</h1>
        <button>Change Name</button>
        <Person name={this.state.persons[0].name}>How are you?</Person>
      </div>
    );
  }
}

export default App;
