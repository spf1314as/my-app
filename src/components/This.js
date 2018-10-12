import React, {
    Component
} from "react";
class LoggingButton extends Component {
    constructor (props){
        super(props)
        this.state = {
            name: 'hello world'
        }
        this.handleClick = this.handleClick.bind(this)
        this.show = this.showLog.bind(this)
    }
    handleClick (name,e){
        console.log('this is:', this);
        console.log(e.target)
        console.log(name)
    }
    showLog(e){
        console.log(e)
    }
    render() {
        // This syntax ensures `this` is bound within handleClick
        return ( <div>
                <
                    button onClick = {
                    this.handleClick.bind(this,this.state.name)
                    // 箭头函数绑定 this
                    // (e) => {
                    //     this.handleClick(this.state.name,e)
                    // }
                } className="btn" >
                    Click me </button>
                <button onClick={this.show}>handl-func</button>
            </div>
        );
    }
}
class ClickTest extends Component{
    constructor (props){
        super(props)
        this.state = {
            name: 'this is arrow',
            show: false
        }
    }
    handleClick = (name,event) => {
        console.log(this)
        console.log(event.target)
        console.log(name)
        this.setState({
            show: !this.state.show
        })
        // 处理异步状态的变化
        // this.setState((prevState,props) => ({
        //     show: !prevState.show
        // }))
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick.bind(this,this.state.name)} className="btn">click me </button>
                {this.state.show && <p>show</p>}
                <p>{ this.state.show ? 'show': 'hide'}</p>
            </div>

        )
    }
}

export {LoggingButton, ClickTest}