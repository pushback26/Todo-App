import React from 'react';
import Todos from './Todos'

function TodoList({ todos, toggleComplete, removeTodo, removeTask }) {

  return (
    <div style={{ background: 'rgba(10, 24, 59, 0.3)' ,borderRadius: '10px', height: '50vh', width: '75%'}}>
        {(todos.length >= 1) ? <button onClick={removeTask}>Clear List</button> : ''}
        <ul style={{ 
              margin: '0', 
              padding: '1rem', 
              listStyle: 'none', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center'}}>
            {todos.map( todo => (
                <Todos 
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>        

    </div>
  )
}

export default TodoList