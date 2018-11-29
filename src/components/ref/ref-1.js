import React ,{Component} from "react"


// 0

class Input extends Component{
    constructor(props,context){
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

// 1

function InputFun(props){
    const ref = React.createRef();

    return (
        <div ref={ref}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, fugiat inventore provident quaerat quisquam reiciendis! Alias asperiores inventore iste laboriosam, minima natus numquam odit officiis quam quia rem soluta tempore!
        </div>
    )
}


// 2

function CustomTest(props){
    return (
        <input type="text" ref={props.inputRef} placeholder="this is pass ref through props"/>
    )
}

class Parent extends Component{

    render(){

        return (
            <CustomTest inputRef={el => this.inputRef = el }></CustomTest>
        )
    }
}

export default Input