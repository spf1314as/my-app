import React,{Component} from 'react'
import List from "../children/children.js"
import Input from "../ref/ref.js"
import InputSecond from "../ref/ref-1"
import File from "../file/file"
function Alert(props) {
    return (<div>this is mi live</div>)
}
// class component
class Dialog extends Component{

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

    shouldComponentUpdate(nextProps,nextState){
        return true

    }
    render(){
        return (
            <Dialog alert = {<Alert />} announce="this is announce">
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