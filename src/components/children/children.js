import React,{Component} from "react"
import PropTypes from "prop-types"

function Repeat( props) {
    let items = [];
    for( let i = 0;i<props.nums;i++){
        items.push(props.children(i))
    }
    return (<div>{items}</div>)

}
function List( ) {
    return (
        <Repeat nums={5}>
            {(index) => (<div key={index}>this is index {index} here!</div>)}
        </Repeat>
    )

}
// 属性值得类型进行验证
Repeat.propTypes = {
    nums: PropTypes.number,
    children: PropTypes.element.isRequired,
}
// 默认属性值
Repeat.defaultProps = {
    nums: 3,
}

export default List;