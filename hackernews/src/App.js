import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = 'Welcome to my website';
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
      </div>
    );
  }
}

export default App;
