import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React.JS 16</h1>
          <p>Test code for React.JS 16</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <img className="img-round App-logo" src="https://global-uploads.webflow.com/586cc078fcd66fc24dc054b4/5975ab1d6e571824118fb904_Blue%20Code.svg" alt="test code logo"></img>
          <p>
              <h1>What's NEW In React.JS 16</h1>
          </p>
      </div>
    );
  }
}

export default App;
