// @flow
import React, { Component,lazy,Suspense} from 'react';
import {HashRouter as Router,Link,Switch,Route,withRouter } from 'react-router-dom'
import Loadable from "react-loadable" 
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
import Console from './components/common/console'
import Pure from './components/pure/pure'
import Api from './components/api/api'

console.log(process.env.NODE_ENV)

// const RouterList = lazy( _ => import('./components/router/router'))
// const Demo = lazy(_ => import('./components/demo/demo'))
// const Html = lazy(_ => import('./components/html/html'))
// const Event = lazy(_ => import('./components/event/event'))
const RouterList = Loadable({
    loader: _ => import('./components/router/router'),
    loading: function(){
        return (<div></div>)
    }
});
const Demo = Loadable({
    loader: _ => import('./components/demo/demo'),
    loading: function(){
        return (<div></div>)
    }
})
const Html = Loadable({
    loader: _ => import('./components/html/html'),
    loading: function(){
        return (<div></div>)
    }
})
const Event = Loadable({
    loader: _ => import('./components/event/event'),
    loading: function(){
        return (<div></div>)
    }
})




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
         <Router basename='/'>
             <div>
                <nav>
                    <Link to="/" className="link_a">首页</Link>
                    <Link to="/redux" className="link_a">redux</Link>
                    <Link to="/demo" className="link_a">demo</Link>
                    <Link to="/pure?name=pure&id=11" className="link_a">pure</Link>
                    <Link to="/api" className="link_a">api</Link>
                    <Link to="/html" className="link_a">html</Link>
                    <Link to="/event" className="link_a">event</Link>
                </nav>
                {/* <Suspense fallback={() => (<div> loading.... </div>)}> */}
                    <Switch>
                        <Route path="/" exact component={Root} />
                        <Route path="/redux" component={Redux}></Route>
                        <Route path="/demo" component={Demo}></Route>
                        <Route path="/pure" component={Pure}></Route>
                        <Route path="/api" component={Api}></Route>
                        <Route path="/html" component={Html}></Route>
                        <Route path="/event" component={Event}></Route>
                    </Switch>
                {/* </Suspense> */}
             </div>
         </Router>
          {/*<Console></Console>*/}
      </div>
    );
  }
}

export default App;
