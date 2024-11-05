import React from 'react'
import './Todolist.css'

function Todolist({item,index,makeDone,deleteItem}) {
  return (
    <div className='todolistmain'>
        
        <p className={`${item.done? 'done-plist': ''} plist`}>{index+1}. {item.label}</p>
        <button className='donebtn' onClick={()=>makeDone(index)}>&#10004;</button>
        <button className='delbtn' onClick={()=>deleteItem(index)}>X</button>
    </div>
  )
}

export default Todolist