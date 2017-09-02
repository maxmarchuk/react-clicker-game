import React, { Component } from 'react';
import './App.css';

import GameContainer from "./components/GameContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <GameContainer/>
      </div>
    );
  }
}

export default App;
