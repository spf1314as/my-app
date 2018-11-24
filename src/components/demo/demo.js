import React,{Component} from 'react';
import Welcome,{Dialog,Alert} from '../common/dialog'
import '../../asset/scss/commom.scss'
export default class Demo extends Component{
    constructor(props){
        super(props)
        this.state = {
            dialog:{
                show: false
            },
            alert:{
                show: false
            }
        }
    }
    // render 开始执行时就开始执行页面里面的事件,所以不能写成函数调用的形式
    showContent = (target,e) => {
        this.setState({
            [target]:{
                show: !this.state[target].show
            }
        })
    }

    render(){
        return (
            <div className="demo-wrapper">
                <h1>here is demo</h1>
                <h3>show dialog  <button className="btn" onClick={(e) => this.showContent('dialog',e)} >show</button> </h3>
                {this.state.dialog.show && (<Dialog announce="this is dialog in demo">
                    <div>show</div>
                </Dialog>)}
                <h3>show alert <button className="btn" onClick={this.showContent.bind(this,'alert')}>show alert</button></h3>
                {
                  this.state.alert.show && (<Alert title="demo show alert" click={this.showContent.bind(this,'alert')}>
                      this is alert in demo,here is demo
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus molestias natus sunt. Asperiores consectetur corporis distinctio earum ipsum iure maiores, nam nostrum possimus quos tempora tempore temporibus tenetur voluptatibus voluptatum.
                  </Alert>)
                }
            </div>
        )
    }

}