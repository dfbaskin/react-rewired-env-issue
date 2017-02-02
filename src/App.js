import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const envItem = process.env.REACT_APP_MY_ITEM;
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Env: [{envItem}]</h2>
      </div>
    );
  }
}

export default App;
