import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo({task,toggletask,deletetask,edittodo}) {
    return (
        <div className='Todo'>
            <p onClick={()=>toggletask(task.id)} className={`${task.completed?'completed':'incompleted'}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={()=>edittodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={()=>deletetask(task.id)}/>
            </div>
        </div>
    )
}

export default Todo