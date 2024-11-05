import React, { useState } from 'react'
import './Todo.css'
import Todolist from './Todolist'

function Todo() {
    const [data,setdata]=useState('')
    const [datalist,setdatalist]=useState([])

    function adddata(event){
        setdata(event.target.value) 
    }

    function addlist(){
        setdatalist([...datalist,{label:data,done:false}])
        setdata('')
    }

    function makeDone(index){
        const temp=[...datalist]
        temp[index].done=true
        setdatalist(temp)
    }

    function deleteItem(index){
        const temp=[...datalist]
        temp.splice(index,1)
        setdatalist(temp)
    }

  return (
    <div className='todomain'>
        <p className='ptodo'>Todo</p>
        <input className='inpTodo' onChange={adddata} type="text" placeholder='Enter Task...' value={data}/>
        <button className='btntodo' onClick={addlist}>+</button>

        <div className='todolist'>
        
            {
            datalist.map((ele,index)=><Todolist item={ele} index={index} key={index} makeDone={makeDone} deleteItem={deleteItem}/>)
            }
        </div>
    </div>
  )
}

export default Todo
