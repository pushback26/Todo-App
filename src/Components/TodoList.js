import React from 'react';
import Todos from './Todos'

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <div >
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