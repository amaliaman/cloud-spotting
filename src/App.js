import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Stage from './components/Stage';
import BottomBar from './components/BottomBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      level: 4
    };
  }

  render() {
    return (
      <div className="game-container">
        <Nav level={this.state.level} />
        <Stage level={this.state.level} />
        <BottomBar />
      </div>
    );
  }
}

export default App;
