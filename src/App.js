import React, { Component } from 'react';
import logo from './logo.svg';
import Card from "./components/Card";
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div id='text' onClick="changeText" MenuTrigger style={{ cursor: 'pointer' }}>this is text</div>
        <div>
         < Card />
        </div>
      </div>
    );
  }
}

export default App;
