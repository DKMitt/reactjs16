import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = "Welcome to React 16";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome />
          <Subtitle />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Midcontent />
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    return (
      <h1 className="App-title">{welcome}</h1>
    )
  }
}

class Subtitle extends Component {
  render() {
    return (
      <p>Code sandbox for reviewing the New React.JS 16</p>
    )
  }
}

class Midcontent extends Component {
  render() {
    return (
      <h3>These are Somethings</h3>
    )
  }
}
export default App;
