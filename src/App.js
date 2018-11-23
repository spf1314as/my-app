// @flow
import React, { Component } from 'react';
import {HashRouter as Router,Link,Switch,Route,withRouter } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import {LoggingButton,ClickTest }from './components/This'
import ListComponent from "./components/list/list"
import Calculator from './components/calculator/calculator'
import Welcome from './components/common/dialog'
import TestThis from "./components/testthis/testthis"
import Fetch from "./components/fetch/fetch"
import TestState from "./components/state/state"
import Redux from "./components/redux/redux"
import RouterList from './components/router/router'
function Root(props){

    return (
        <div>
            <Fetch />
            <LoggingButton > </LoggingButton>
            <ClickTest> </ClickTest>
            <ListComponent> </ListComponent>
            <Calculator />
            <Welcome/>
            <TestThis  name="testthis" game="false"/>
            <TestState/>
            <RouterList/>
        </div>
    )
}



// app
class App extends Component {
    constructor(props){
        super(props)
    }

    handle(){
        console.log(this)
        console.log("app")
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
         <Router basename="/">
             <div>
                 <Link to="/"/>
                 <Switch>
                     <Route path="/" exact component={Root} />
                     <Route path="/redux" component={Redux}></Route>
                 </Switch>
             </div>
         </Router>
      </div>
    );
  }
}

export default App;
