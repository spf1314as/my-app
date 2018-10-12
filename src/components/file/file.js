import React,{Component} from "react"

class File extends Component{
    constructor(props){
        super(props)
        this.file = null;
    }
    handlFile = () =>{
        console.log(this.file.files[0].size + this.file.files[0].name)

    }
    render(){
        return (
            <div>
                <input type="file" ref={ (el) => this.file = el} onChange={this.handlFile}/>
            </div>
        )
    }
}

export default File