import React ,{Component} from "react"
class Input extends Component{
    constructor(props){
        super(props)
        this.input = null;
        this.handlSubmit = this.handlSubmit.bind(this);
    }
    handlSubmit(e){
        console.log(this.input.value)
        e.preventDefault()
    }
    render(){
        return (<div>
            <input type="text" defaultValue="game center" placeholder="input" ref={ (el) => this.input = el }/>
            <button type="submit" onClick={this.handlSubmit}>submit</button>
        </div>)
    }
}
export default Input