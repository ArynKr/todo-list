import React, { useEffect, useState } from 'react';
import Form from './Form';
import axios from 'axios';

import Todos from './Todos';
import './TodoApp.css';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(res.data);
    }
    getTodos();
  }, []);

  return (
    <>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <div className='new-todo'>
        <Form todos={todos} setTodos={setTodos} />
      </div>
      <div className='todos'>
        <Todos todos={todos} />
      </div>
    </>
  );
}
