import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api/todos');
        console.log(response)
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title} - <span>{todo.completed ? 'completed' : 'not completed'}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default App;