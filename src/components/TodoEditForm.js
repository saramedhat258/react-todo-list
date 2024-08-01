import React,{useState} from 'react'
function TodoEditForm({edittodo,task}) {
    const [value, setvalue] = useState(task.task)
    const changehandler = (e) => {
        e.preventDefault()
        edittodo(value,task.id)
    }
    return (
        <form className='TodoForm' onSubmit={changehandler}>
            <input type="text" value={value} className='todo-input' placeholder='what task for today..' onChange={(e) => setvalue(e.target.value)} />
            <button type='submit' className='todo-btn' >Update Task</button>
        </form>
    )
}

export default TodoEditForm