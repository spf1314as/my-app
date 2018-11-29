import React from 'react'
import "./common.scss";
export default function Loading(props){
    var style = {
        borderColor: props.color ? props.color: 'black',
        borderBottomColor: props.radius ? props.radius: '#CE5848'
    }
    return (
        <div className="loading-wrapper" style = {style}>
        </div>
    )
}