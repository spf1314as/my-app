import React,{Component} from "react"

class Button extends Component {
    showOut = () =>{
        console.log(this)
        console.log("this is component refs")
    }
    render(){
        return (
            <div>game center <div>this is component refs </div></div>
        )
    }
}
class Input extends Component{
    constructor(props){
        super(props)
        this.textInput = React.createRef();
        this.input = null;
    }
    focusInput = () => {
        console.log(this.textInput)
        console.log(this.textInput.current)
        this.input.focus()
    }
    componentDidMount(){
       console.log(this.textInput.current)
        console.log(this.textInput)
        this.textInput.current.showOut()
    }
    componentDidUpdate(){
        console.log(this.textInput.current)
        console.log(this.textInput)
    }
    render(){
        return (
            <div>
                <input type="text" ref={(el)=> this.input = el} placeholder="该输入框聚焦。。。"/>
                <button onClick = {this.focusInput }>click me</button>
                <Button ref= {this.textInput} />
            </div>
        )
    }
}
export default Input