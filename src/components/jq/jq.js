import React,{Component} from 'react'

export default class jq extends Component{

    componentDidMount(){
        // 获取到dom

    }
    componentWillUnmount(){
        // 解除绑定
    }


    render(){
        return (
           <div ref = {(el) => this.el = el}></div>
        )
    }
}