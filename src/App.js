import React, { Component } from 'react';
import logo from './logo.svg';
import Qatar from './img/Qatar_2022_bid_logo.png';
import './App.css';
import Clock from './Clock.jsx';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      deadline: 'November 21, 2022'
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={Qatar} className="App-Qatar" alt="Qatar 2022"/>
          <h1 className="App-title">Countdown in React for next world cup</h1>
        </header>
        <div> Countdown to next world cup in Qatar - {this.state.deadline}</div>
           <Clock 
              deadline={this.state.deadline}
           />
      </div>
    )
  }
}

export default App;
