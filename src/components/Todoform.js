import React,{useState} from 'react'

function Todoform({addtodo}) {
    const [value,setvalue]=useState("")
    const changehandler=(e)=>{
        e.preventDefault()
        addtodo(value)
        setvalue("")
    }
    return (
        <form className='TodoForm' onSubmit={changehandler}>
            <input type="text" value={value} className='todo-input' placeholder='what task for today..' onChange={(e)=>setvalue(e.target.value)}/>
            <button type='submit' className='todo-btn' >Add Task</button>
        </form>
    )
}

export default Todoform