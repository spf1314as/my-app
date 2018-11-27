
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
        console.log(this.inputRef.value)
        this.setState({
            value: this.inputRef.value
        })
    }

    render(){
        return (
            <div className='html-wrapper'>
                <h1>this is html in react</h1>
                <h3>this is &gt; no parse</h3>
                <div dangerouslySetInnerHTML={InnerHtml()}></div>
                <h3>this is onChange is defferent from Dom between React</h3>
                {/* onchange === oninput */}
                <input type="text" defaultValue="default" placeholder="input you name" onChange={this.change} ref={(el) => this.inputRef = el} className="input"/>
            </div>
        )
    }

}
function InnerHtml (props){
    return {
        __html: "Firse &gt;&gt; second"
    }
}
