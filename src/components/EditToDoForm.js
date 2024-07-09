import { React, useState } from 'react';


export const EditToDoForm = ({editToDo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        //prevent the page from reloading on submit
        e.preventDefault();

        editToDo(value, task.id);

        //on submit, erase the value
        setValue("");
    }

    return (
        <form className='ToDoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' 
            //handle user input
            //use console.log(e.target.value) for inspection
            value={value}
            placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
  )
}

export default EditToDoForm;