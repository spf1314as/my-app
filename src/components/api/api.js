import './api.scss'
import React,{Component} from 'react'

// React.forwardRef
const RefBtn = React.forwardRef((props,ref) =>{
    return (
        <button ref={ref} className='btn' onClick={props.toggle}>{props.children}</button>
    )
})




export default class Api extends Component{
    constructor(props){
        super(props)
        this.ref = React.createRef();
        this.state = {
            txt: 0,
            num: 0
        }
    }
    static defaultProps = {
        num: 0,
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
         
    // }
    // network request

    componentDidMount(){

    }
// user PureComponent instead of by hand
    shouldComponentUpdate(nextProps,nextState){
      return true

    }
    // network request

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log(this.state.num)
    }
    // getSnapshotBeforeUpdate(prevProps,prevState){
        
    // }
    componentWillUnmount(){

    }
    componentDidCatch(){

    }
    // instanceof setState() forceUpdate() props state
    //class defaultProps dispalyName
    // error  use this.state in object params,shoule use fuction params
    incrister = _ => this.setState({ txt: this.state.txt + 1},_ =>{
        console.log(this.state)
    })

    toggleDisable = () =>{

        console.log(this.ref.current.disabled)
        this.ref.current.setAttribute('disabled',!this.ref.current.disabled)
        setTimeout(_ => {
            this.ref.current.removeAttribute('disabled')
        },3*1000)


    }
    TestState = _ => {
        this.setState( (state,props) => {
            let num = this.state.num;
            console.log(this.state.num)
            console.log(state.num)
            return { num: ++num}
            // called in didUpdate
        },_ => console.log('setState is completed'))
    }

    render(){
        
        return (
            <div>
                <h1>this is api component</h1>
                <h3>this is forwardRef</h3>
                <RefBtn ref={this.ref} toggle={this.toggleDisable}> click me toggle</RefBtn>
                <h3>test getDerivedStateFromProps</h3>
                <div>{this.state.txt} <button className="btn" onClick={this.incrister}>click me</button> </div> 
                <div>test state num:{this.state.num} <button className="btn" onClick={this.TestState}>test state</button></div>
            </div>
        )
    }
}