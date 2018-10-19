import React,{Component} from "react"
import "./state.css"

export default class TestState extends Component{
    constructor( props ){
        super(props)
        this.state = {
            obj: {
                name: 'xiaomi'
            },
            age: 18,
            list:[1,2,3],
            canClick: true
        }
    }
    handler = (e) =>{
        if(e.target.disable === true) return
        this.setState(
            {
                des: 'this is xiaomi demo',
                obj: {
                    name: 'huyu'
                },
                list: this.state.list.concat(5)
            }
        )
        // 解决state props 异步变化时 state props的使用
        this.setState((preState,props) => {
            console.log(preState.list.length + "preState")
            if(preState.list.length > 6){
                console.log(true)
                return { canClick: false}
            }
        })

        // 此处的state 是dom 没有更新之前的值
        console.log(this.state.list.length)
        if(this.state.list.length > 6){
            this.setState({
                canClick: false
            })
        }
    }

    componentDidUpdate(){
        console.log(this.state.list.length + "update")
        if(this.state.list.length > 6 && this.state.canClick === true){
            this.setState({
                canClick: false
            })
        }
    }

    render(){
        return (
            <div className="state">
                <p>company:{this.state.obj.name} age:{this.state.age} des:{this.state.des}</p>
                {this.state.list.map( (value,index) => (<p key={index.toString()}>{index}-{value}</p>))}
                <button className="btn" disabled={!this.state.canClick} onClick={this.handler}> click me</button>
            </div>

        )
    }
}