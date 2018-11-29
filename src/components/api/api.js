import './api.scss'
import React,{Component} from 'react'
import Render from '../render/render'
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
            num: 0,
            hasError: false
        }
    }
    static defaultProps = {
        num: 0,
    }
    // catch error and then render
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }

    }
    // catch error and record info
    componentDidCatch(error,info){

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
    increase = _ => this.setState({ txt: this.state.txt + 1},_ =>{
        console.log(this.state)
    })

    toggleDisable = () =>{

        console.log(this.ref.current.disabled)
        this.ref.current.setAttribute('disabled',!this.ref.current.disabled)
        setTimeout(_ => {
            this.ref.current.removeAttribute('disabled')
        },3*1000)


    }
    testState = _ => {
        this.setState( (state,props) => {
            let num = this.state.num;
            console.log(this.state.num)
            console.log(state.num)
            return { num: ++num}
            // called in didUpdate
        },_ => console.log('setState is completed'))
    }

    render(){
       if(this.state.hasError){
           return (<div>
               something is wrong!
           </div>)
       }
        return (
            <div>
                <h3>this is forwardRef</h3>
                <RefBtn ref={this.ref} toggle={this.toggleDisable}> click me toggle</RefBtn>
                <h3>test getDerivedStateFromProps</h3>
                <div>{this.state.txt} <button className="btn" onClick={this.increase}>click me</button> </div>
                <div>test state num:{this.state.num} <button className="btn" onClick={this.testState}>test state</button></div>
                <Render></Render>
            </div>
        )
    }
}