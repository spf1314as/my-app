// @flow
import React, { Component } from 'react';
import {HashRouter as Router,Link,Switch,Route,withRouter } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import "./asset/scss/commom.scss"
import {LoggingButton,ClickTest }from './components/This'
import ListComponent from "./components/list/list"
import Calculator from './components/calculator/calculator'
import Welcome from './components/common/dialog'
import TestThis from "./components/testthis/testthis"
import Fetch from "./components/fetch/fetch"
import TestState from "./components/state/state"
import Redux from "./components/redux/redux"
import RouterList from './components/router/router'
import Demo from './components/demo/demo'
import Console from './components/common/console'

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
         <Router basename="/">
             <div>
                <nav>
                    <Link to="/" className="link_a">首页</Link>
                    <Link to="/redux" className="link_a">redux</Link>
                    <Link to="/demo" className="link_a">demo</Link>
                </nav>
                <Switch>
                     <Route path="/" exact component={Root} />
                     <Route path="/redux" component={Redux}></Route>
                     <Route path="/demo" component={Demo}></Route>
                 </Switch>
             </div>
         </Router>
          <Console></Console>
      </div>
    );
  }
}

export default App;
