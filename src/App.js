// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {LoggingButton,ClickTest }from './components/This'
import ListComponent from "./components/list/list"
import Calculator from './components/calculator/calculator'
import Welcome from './components/common/dialog'


// app
class App extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <LoggingButton > </LoggingButton>
       <ClickTest> </ClickTest>
          <ListComponent> </ListComponent>
          <Calculator />
            <Welcome/>
      </div>
    );
  }
}

export default App;
