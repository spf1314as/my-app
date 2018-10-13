import React,{Component} from "react"
class TestThis extends Component {
     constructor(props){
         super(props)
     }
     handle = () => {
         let {name,game} = {...this.props};
         console.log(this)
         console.log(`name:${name},game:${game}`)
     }

     render(){
         return (
             <div>
                 this aims to test "this"
                 <br/>
                 <button onClick = {this.props.click}> click test this</button>
                 <button onClick = {this.handle}> click show props</button>
             </div>
         )
     }
}



export default TestThis;