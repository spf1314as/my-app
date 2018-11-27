import React,{PureComponent} from 'react'
import {withRouter} from 'react-router-dom'
import '../../asset/scss/commom.scss'
import Memo from "../memo/memo"
function TestChildren(props){
    
    return (
        <div>
            this is test-children
        </div>
    )
}
export default class Pure extends PureComponent{
    state = {
        list: [],
        count: 0
    }
    constructor(props){
        super(props)

    }
    addList = () =>{
        let {list,count} = this.state;

       list = [...list,++count];
        this.setState(
            {list}
        )

    }
    change = _ =>{
        let {history,match,location} = this.props;
        console.log(match)
        console.log(location)
        console.log(history)
        if( _ === 'demo'){
            history.push('/demo',{
                target: 'demo'
            })
        }else if(_ === 'go'){
            history.go(-1)
        }else{
            history.push('/redux',{
                game: true
            })
        }
    }
    render(){

        return(
            <div className="pure-wrapper">
                <h1>this is a instanceof Purecomponent</h1>
                <ul>
                    {this.state.list.map((value,index) => (<li key={index.toString()}>{index}</li>))}
                </ul>
                <button className="btn" onClick={this.addList}>click add</button>
                <div>
                    <button className="btn" onClick={this.change.bind(this,'demo')}>go demo</button>
                    <button className="btn" onClick={this.change.bind(this,'go')}>go back</button>
                    <button className="btn" onClick={this.change.bind(this,'query')}>go query</button>
                </div>
                <Memo>
                   <div>memo in pure-component first</div>
                   <h3>memo in pure-component second</h3>
                   <TestChildren/>
                </Memo>        
            </div>
        )
    }
}
// export default withRouter(Pure)