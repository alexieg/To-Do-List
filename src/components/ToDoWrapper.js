import { React, useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';
import { v4 as uuidv4 } from 'uuid';

uuidv4();

export const ToDoWrapper = () => {
    //get value from ToDoForm to ToDoWrapper
    const [todos, setToDos] = useState([]);

    //takes todo/value and makes copy of the current state
    const addToDo = todo => {
        setToDos([...todos, {id: uuidv4(), task: todo,
        completed: false, isEditing: false}]);
        console.log(todos);
    }
    //take a todo and check if id is equal
    //take a copy of the todo and update the completed value
    //return todo if not completed
    const toggleComplete = id => {
        setToDos(todos.map(todo => todo.id === id ? {...
        todo, completed: !todo.completed} : todo))
    }

    //filter each todo that is not equal to the id
    const deleteToDo = id => {
        setToDos(todos.filter(todo => todo.id !== id));
    }

    //pass in id, set todos and check if id is equal to the todo
    const editToDo = id => {
        setToDos(todos.map(todo => todo.id === id ? {...todo, 
        isEditing: !todo.isEditing} : todo));

    }

    const editTask = (task, id) => {
        setToDos(todos.map(todo => todo.id === id ? {...todo,
            task, isEditing: !todo.isEditing} : todo))
    }

    return (
        <div className='ToDoWrapper'>
            <h1>Let's Be Productive!</h1>
            <ToDoForm addToDo={addToDo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditToDoForm editToDo={editTask} task={todo} />
                ) : (
                    <ToDo task={todo} key={index}
                    toggleComplete={toggleComplete} deleteToDo={deleteToDo} 
                    editToDo={editToDo}/>
                )
            ))}
        </div>
    )
}

export default ToDoWrapper;