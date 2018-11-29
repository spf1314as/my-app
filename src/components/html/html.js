
import React ,{Component} from 'react'
import './html.scss'

export default class Html extends Component{
    constructor(props){
        super(props)
        this.inputRef = null;
        this.state = {
            value:''
        }
    }

    change = _ =>{
        console.log(this.controlRef.value)
        this.setState({
            value: this.controlRef.value
        })
    }

    getValue = _ => {
        console.log(this.inputRef.value)
    }

    render(){
        return (
            <div className='html-wrapper'>
                <h1>this is html in react</h1>
                <h3>this is &gt; no parse</h3>
                <div dangerouslySetInnerHTML={InnerHtml()}></div>
                <h3>this is onChange is defferent from Dom between React</h3>
                {/* onchange === oninput */}
                {/*uncontrolled from*/}
                <h3> uncontrolled from </h3>
                <input type="text" defaultValue="default" placeholder="input you name"  ref={(el) => this.inputRef = el} className="input"/>
                <br/>
                <button className="btn" classID="id" onClick={this.getValue}>click me get uncontrolled value</button>
                {/*controlled from*/}
                <h3>controlled from </h3>
                <input type="text" value={this.state.value} onChange={this.change} ref={(el) => this.controlRef = el} className="input" />

            </div>
        )
    }

}
function InnerHtml (props){
    return {
        __html: "Firse &gt;&gt; second"
    }
}
