import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const ToDo = ({task, toggleComplete, deleteToDo, editToDo}) => {

    return (
        <div className={`ToDo ${task.completed ? 'completed' : ""}`}>
            <p onClick= {() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
            <div className='Icons'>
                <div className='Icon'>
                    <FontAwesomeIcon icon={faPenToSquare} onClick={() => editToDo(task.id)} />
                </div>
                <div className='Icon'>
                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)} />
                </div>
            </div>
        </div>
    )
}

export default ToDo;