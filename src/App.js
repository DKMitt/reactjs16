import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to React 16" />
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
    const { text } = this.props;
    return (
      <h1 className="App-title">{text}</h1>
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
      <h3>Here is Something Too!</h3>
    )
  }
}


export default App;
