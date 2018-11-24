import React,{Component} from 'react'
import List from "../children/children.js"
import Input from "../ref/ref.js"
import InputSecond from "../ref/ref-1"
import File from "../file/file"
import "./dialog.scss"
export function Alert(props,context) { // arguments props context
    return (<div className="alert-wrapper">
        <div className="content-wrapper">
            <h1 className="title">{props.title}</h1>
            <div className="content">
                {props.children}
            </div>
            <span className="close-btn" onClick={props.click}>
                &times;
            </span>
        </div>

</div>)
}
// class component
export class Dialog extends Component{

    render(){
        return (
            <div className="dialog">
                <div>
                    {this.props.alert}
                </div>
               <div>
                   {this.props.children}
               </div>
                <div>
                    {this.props.announce}
                </div>
            </div>
        )
    }
}

class Welcome extends Component{

    shouldComponentUpdate(nextProps,nextState,nextContext){
        return true

    }
    render(){
        return (
            <Dialog announce="this is announce">
                <div>
                    Thank you for visiting our website!
                </div>
                { 0 === 0 &&  <List/>}
                <Input/>
                <InputSecond />
                <File />
            </Dialog>
        )
    }

}

export default Welcome