import {createStore,applyMiddleware,bindActionCreators} from "redux"

const increaseAction = {type: 'increaseAction'};
const inputEvent =(value) => ({type:'inputEvent',input:value});

// define state to props
// state is entire store state
function mapStateToProps(state,ownProps) {
    return{
        value: state.count,
        list: state.list
    }

}

// define props to dispatch
// params function
// function mapDispatchToProps(dispatch,ownProps){
//     return {
//         increaseAction: () => dispatch(increaseAction),
//         inputEvent: (value) => dispatch(inputEvent(value))
//     }
// }
function mapDispatchToProps (dispatch) {
    return  bindActionCreators({increaseAction,inputEvent},dispatch);

}
/*
type: params  object
 const mapDispatchToProps = {
    addTodo: (content) => ({
        type: ADD_TODO,
        payload: {
            id: ++ nextTodoId,
            content
        }
    })
 };
* */

export {
    mapDispatchToProps,
    mapStateToProps
}