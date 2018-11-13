import React,{Component} from "react"


import "./fetch.scss"

export default class Fetch extends Component{
    constructor( props ){
        super(props)
        this.state = {
            name: '',
            action: '',
        }
    }
    handlInput = (e) => {
        let value = e.target.value;
        let target = e.target.getAttribute("name");
        if(target === "name"){
            this.setState({
                name: value
            })
        }else {
            this.setState({
                action: value
            })
        }

    }

    handle = () => {
        fetch("http://127.0.0.1:7001/post",{
            method: "post",
            mode: "cors",
            credentials: "same-origin",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                action: this.state.action
            }),
            // body: {
            //     name: this.state.name,
            //     action: this.state.action
            // }
        }).then( (response) => {
            console.log(response)
            if (response.ok) {
                // console.log(response.json())
                // console.log(response)
                return response.json()
            } else {
                // Find some way to get to execute .catch()
            }
            }
        ).then(res => {
            console.log(res)
        }).catch( res => {
            console.log(res)
        })
    }

    render(){
        return (
            <main className="fetch-container">
                <header> this aims to test fetch</header>
                <div className="item">
                    <label htmlFor="">name:</label>
                    <input type="text" value={this.state.name} name="name" onChange = {this.handlInput}/>
                </div>
                <div className="item">
                    <label htmlFor="">action:</label>
                    <input type="text" value={this.state.action} name="action" onChange = {this.handlInput}/>
                </div>
                <button className="item" onClick={this.handle}>提交</button>
            </main>
        )
    }
}

