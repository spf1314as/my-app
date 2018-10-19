import "./redux.css"
import React,{Component} from 'react'
import {connect,Provider} from 'react-redux'
import {createStore} from "redux"
import PropTypes from "prop-types"

class Counter extends Component{
    static propTypes ={
        value: PropTypes.number.isRequired,
        onIncreaseClick: PropTypes.func.isRequired
    }
    static contextTypes ={
        store: PropTypes.object
    }
    componentDidMount(){
        const {store} = this.context;  // provide 将store 挂在到 context上面
        console.log(this.context)
        console.log(store.getState())
    }
    render(){
        const {value, onIncreaseClick} = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

const increaseAction = {type: 'increase'};

// define state to props
function mapStateToProps(state) {
    return{
        value: state.count
    }

}

// define props to dispatch
function mapDispatchToProps(dispatch){
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// define action reduce
function counter(state= {count: 0},action){
        let count = state.count;
        switch(action.type){
            case 'increase':
                // console.log(count++)
                return {count: ++count};
            default:
                return state
        }
}
const store = createStore(counter);

// 包装之后的 Counter 组件
const App = connect(
    mapStateToProps,
    mapDispatchToProps
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



