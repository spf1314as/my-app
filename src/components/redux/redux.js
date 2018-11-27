import "./redux.scss"
import React,{Component} from 'react'
import {connect,Provider} from 'react-redux'
import {createStore,applyMiddleware} from "redux"
import thunkMiddleware from 'redux-thunk'
import PropTypes from "prop-types"
import * as Reducers from './actions'

function Inputlist(props){
    let {list} = props;
    return (
        <ul>
            {list.map((value,index) => (<li key={index}>{value}</li>))}
        </ul>
    )
}


class Counter extends Component{
    constructor(props){
        super(props)
        this.state = '';
        this.input = null;
    }
    static propTypes ={
        value: PropTypes.number.isRequired,
        increaseAction: PropTypes.func
    }
    static contextTypes ={
        store: PropTypes.object
    }
    changeInput = () =>{
        if(!this.input) return
        let value = this.input.value;
        value && this.props.inputEvent(value)
    }

    componentDidMount(){
        const {store} = this.context;  // provide 将store 挂在到 context上面
        console.log(this.context)
        console.log(store.getState())
        console.log(this.props)
    }
    componentDidUpdate(){
        if(this.input.value){
            this.input.value = '';
        }
    }
    render(){
        const {value, increaseAction,list} = this.props;
        return (
            <div className="redux-container">
                <span>{value}</span>
                <button className="btn" onClick={increaseAction}>Increase</button>
                <input  className="input" type="text" maxLength={100} ref={ (el) => this.input = el} />
                <button className="btn" onClick={this.changeInput}>input text</button>
                <Inputlist list={list}></Inputlist>
            </div>
        )
    }
}



// define action reduce
function counter(state= {count: 0,list:[]},action){
        let count = state.count;
        switch(action.type){
            case 'increaseAction':
                // console.log(count++)
                return Object.assign({},state,{count: ++count});
            case 'inputEvent':
                if(action.input){
                    let input = action.input;
                    return Object.assign({},state,{list:[...state.list,input]})
                }
                return state

            default:
                return state
        }
}
const store = createStore(counter);

// 包装之后的 Counter 组件
const App = connect(
    Reducers.mapStateToProps,
    Reducers.mapDispatchToProps
)(Counter)


// Provider 容器
export default class Redux extends Component {
    render(){
        return (
            <Provider store = {store}>
               <App/>
            </Provider>
        )
    }
}



