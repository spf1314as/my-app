import React,{Component,lazy} from 'react'
import '../../asset/scss/commom.scss'
import './event.scss'
import Loading from "../common/loading"
import Capture from "./capture"
export default class Event extends Component{
    constructor(props){
        super(props)
        this.trans = null;
    }
    
    componentDidMount(){
        setTimeout( _ =>   this.trans.className = this.trans.className + ' trans')
    }

    showEvent = e =>{
        e.persist() // 不使用时，函数执行完e会重置为null
        console.log(e.target) 
        console.log(e)
        setTimeout(() => {
            console.log(e)
        }, 3*1000);
    }
    

    render(){
        return (
            <div className='event-wrapper' onScroll={this.showEvent}>
                <h1>this is event wrapper</h1>
                <button className='btn' onClick={e => console.log(e)}>click me</button>
                <div className="scroll">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dolorem quas beatae, iure deleniti amet saepe et sint suscipit temporibus mollitia in minus dolor deserunt incidunt error accusamus non quam! 
                </div>
                <h3>transition event</h3>
                <div onTransitionEnd={this.showEvent} ref={el => this.trans = el}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quod perferendis explicabo, quis praesentium consectetur, illum corrupti in ratione fugit sapiente quasi animi dignissimos voluptas. Sit tenetur accusantium provident id!
                </div>
                <Capture/>
               <Loading color="red" radius="white"></Loading>
            </div>

        )

    }
}

function ComponentEnd(props){

    return (
        <div>this is toggle end</div>
    )
}