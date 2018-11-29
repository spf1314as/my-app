import React,{Component} from 'react'
import "../../asset/scss/commom.scss"
const src = require('../../asset/images/cat.png');
export default class Render extends Component{
    render(){
        return (
            <div className="render-wrapper">
                <h1>this is render props</h1>
                <Mouse render={mouse => (<Cat mouse={mouse}/>)}></Mouse>
            </div>
        )
    }
}

class Mouse extends Component{
    constructor(props){
        super(props)
        this.state = {
            x:0,
            y:0
        }
    }
    handleMouseMove = (e) =>{
        this.setState(
            {
                x: e.clientX,
                y: e.clientY
            }
        )
    }

    render(){
        return (
            <div style={{height:'50vh'}} onMouseMove={this.handleMouseMove.bind(this)}>
                <p>
                    the current mouse position is ({this.state.x},{this.state.y})
                    {this.props.render(this.state)}
                </p>
            </div>
        )
    }
}

class Cat extends Component{
    render(){
        const {x,y} = this.props.mouse;
        return (
            <img src={src} style={{width:'200px',height:'200px',position:'absolute',right:x,bottom:y}} alt=""/>
        )
    }
}