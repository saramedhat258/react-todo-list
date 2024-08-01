import React, { useState } from 'react'
import Todoform from './Todoform'
import { v4 as uuidv4 } from 'uuid'
import TodoEditForm from './TodoEditForm'
import Todo from './Todo'
uuidv4()
function Todowarpper() {
    const [todos, settodos] = useState([])
    const addtodo = (todo) => {
        settodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }
    const toggletask = (id) => {
        settodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
    const deletetask = id => {
        settodos(todos.filter(todo => todo.id !== id))
    }
    const edittodo = id => {
        settodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
    const editTask = (task, id) => {
        settodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div className='TodoWrapper'>
            <h1>Get things Done</h1>
            <Todoform addtodo={addtodo} />

            {todos.map((todo, index) => (
                todo.isEditing ?
                    (<TodoEditForm edittodo={editTask} task={todo} key={todo.id} />)
                    : (<Todo
                        task={todo}
                        key={todo.id}
                        toggletask={toggletask}
                        deletetask={deletetask}
                        edittodo={edittodo} />)
            )
            )}

        </div>
    )
}
export default Todowarpper