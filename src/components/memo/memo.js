import React,{Children} from 'react'

function Memo(props){
    console.log(Children.count(props.children))
   const children = Children.map(props.children,(value,index) => {
      return  React.cloneElement(value,{name: 'index' + index})
    })

   return (
       <div className='memo-wrapper'>
       <h1>this like Purecomponent</h1>
        {children}
       </div>
   )

}

export default Memo
