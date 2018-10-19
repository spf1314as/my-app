import React,{Component} from "react"
import './list.css'

const list = [1,2,3,4,5,6];


class ListComponent extends Component{
    constructor(props){
        super(props)
        this.number = list;
    }
    // render(){
    //     let listItems = list.map((num) =>{
    //         return (<li key={num.toString()}>{num*2}</li>)
    //     })
    //
    //     return <ul>{listItems}</ul>
    // }

    render(){


        return (<ul>{list.map((num) => (<li key={num.toString()}>{num*2}</li>))}</ul>)
    }


}
 export default ListComponent


