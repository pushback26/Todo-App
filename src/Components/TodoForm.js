import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
    const [todo, setTodos] = useState({
        id: '',
        task: '',
        completed: false
    });

    const taskInputHandler = (e) => {
        setTodos({...todo, task: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() })
            //reset task input
            setTodos({ ...todo, task: ''})
        }
    }

  return (
    <form onSubmit={submitHandler}>
        <input
        name='task' 
        type='text'
        value={todo.task}
        onChange={taskInputHandler}
        style={{ width: '50%', height: '2rem', borderRadius: '3px'}}
        />
        <button  
            style={{
                color: '#fff',
                fontSize: '1rem',
                background: '#396EB0', 
                border: 'none', 
                borderRadius: '5px', 
                padding: '7px 10px',
                margin: '5px'}}
            type='submit'>Submit
        </button>
    </form>
  )
}

export default TodoForm