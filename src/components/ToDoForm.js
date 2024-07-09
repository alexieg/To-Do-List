import { React, useState } from 'react';
import ToDoWrapper from './ToDoWrapper';

export const ToDoForm = ({addToDo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        //prevent the page from reloading on submit
        e.preventDefault();

        addToDo(value);

        //on submit, erase the value
        setValue("");
    }

    return (
        <form className='ToDoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' 
            //handle user input
            //use console.log(e.target.value) for inspection
            value={value}
            placeholder='What will you accomplish today?' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>+</button>
        </form>
  )
}

export default ToDoForm;