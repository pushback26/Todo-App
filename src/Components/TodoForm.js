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
        style={{ width: '100%', height: '2rem', border: 'none', borderRadius: '3px'}}
        />
        <button  
            style={{
                background: '#FABB51', 
                border: 'none', 
                borderRadius: '5px', 
                padding: '3px 10px'}}
            type='submit'>Submit
        </button>
    </form>
  )
}

export default TodoForm