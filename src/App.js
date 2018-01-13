import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

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
        <Midcontent midtext="Here is Something Too!"/>
          <hr /><br />
        {this.state.toggle &&
          <p>Click the button to show and hide this<br />
          <img src={logo} className="App-logo" alt="logo" /></p>
          
        }
        
        <button onClick={this.toggle}>Show / Hide</button>
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
    const { midtext } = this.props;
    return (
      <h3 className="App-title">{midtext}</h3>
    )
  }
}


export default App;
