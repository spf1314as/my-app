import './router.scss';

import React,{Component} from 'react';
import {BrowserRouter as Router ,Route,Switch,Link,Redirect,withRouter} from 'react-router-dom';
import Loadable from "react-loadable" // dynamic import split code
import Children from '../children/children'
import List from '../list/list'
function About(props) {
    let {match }= props;
    console.log(props)
    console.dir(match)
    return (
        <div className="about">
            <div>this is about-page</div>
            <div>{match.params.about}</div>
           {/*react router */}
            <Route path={match.url + '/game'} render={({match}) => (<h1>{match.url}</h1>)}></Route>
        </div>
    )

}
function User({match}) {

    return (
        <div className="user">
            <div>
                id: {match.query}
            </div>
            <div>
                this is user-page
            </div>
        </div>
    )

}
function Re(props){
    console.log(props)

    return (
        <div>
            this is reDirect
        </div>
    )


}

const AsyncUser = Loadable({ // 按需加载
    loader:() => import(User), //*
    loading: About,  // *
})

class RouterList extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="router-wrapper">
                <h1>this is router</h1>
                <Router>
                   <div>
                       <ul>
                           <li><Link to="/">to home</Link></li>
                           <li><Link to="/about">to about</Link></li>
                           <li><Link to="/user?id=1">to user</Link></li>
                           <li><Link to="/go">to go</Link></li>
                       </ul>
                         <Switch>
                             <Route path="/" exact component={List}>
                             </Route>
                             <Route path="/:about" component={About}></Route>
                             <Route path="/user" exact component={AsyncUser}></Route>
                             <Route path="/user/render" render={() => (<h3>this is render</h3>)}></Route>
                             <Route render={() => (<h1>404</h1>)}></Route>
                             <Redirect from="/go" to={{pathName:'/center',search:'?utm=you',state:{referrer:'currentLocation'}}}></Redirect>
                             <Route path="/center" component={Re}></Route>
                         </Switch>

                   </div>
                </Router>
                <Children></Children>
            </div>
        )
    }



}

export default RouterList
