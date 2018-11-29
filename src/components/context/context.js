import "../../asset/scss/commom.scss"
import React,{Component} from 'react'

const ThemeContext = React.createContext('light');

export default class App extends Component{


    render(){
        return(
           <div>
               <ThemeContext.Provider value="dark">
                   <Toolbar></Toolbar>
               </ThemeContext.Provider>
               <Consumer></Consumer>
           </div>
        )
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton></ThemedButton>
        </div>
    )

}

class ThemedButton extends Component{
    static contextType = ThemeContext;
    render (){
        return (
            <Button theme={this.context}></Button>
        )
    }
}
function Button( props) {
    return (
        <button className="btn" classID="id">{`button defined theme(${props.theme})`}</button>
    )

}

function Consumer (props){

    return (
        <ThemeContext.Consumer>
            {
                (value) => (<div>this is consumer {value}</div>)
            }

        </ThemeContext.Consumer>
    )
}

















