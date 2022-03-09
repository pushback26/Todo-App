import React from 'react'

function Todos({ todo, toggleComplete, removeTodo }) {
    const checkboxClickHandler = () => {
        toggleComplete(todo.id);
    }

    const removeClickHandler = () => {
        removeTodo(todo.id);
    }

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
        <input 
            type='checkbox' 
            onClick={checkboxClickHandler}
            style={{alignSelf: 'center'}}
            />
        <li 
        style={{
            // color: 'white',
            textDecoration: todo.completed ? 'line-through' : null
        }}>{todo.task}</li>
        <button onClick={removeClickHandler}>Remove</button>
    </div>
  )
}

export default Todos