import React from 'react';

export default function Capture(props){

    function showCapture(){
        console.log('this is invoke in capture')
    }

    return (
        <div className="capture-wrapper">
            <h1> this is event invoke in capture </h1>
            <button className="btn" onClickCapture={showCapture}>click capture</button>
        </div>
    )
}
