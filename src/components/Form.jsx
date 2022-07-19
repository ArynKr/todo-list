import axios from 'axios';
import React, { useState } from 'react';
import { Button } from './elements';
import './Form.css';

export default function Form({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).slice(7);
    const data = {
      userId: 1,
      id: id,
      title: newTodo,
      completed: false,
    };
    setTodos([data, ...todos]);
    setNewTodo('');

    try {
      if (data.title.length < 1) throw new Error('Cannot enter empty task');

      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        data
      );
      console.log(res);
    } catch (err) {
      console.log(err);
      setTodos(todos.filter((todo) => todo.id !== id));
      setNewTodo(data.title);
    }
  };

  return (
    <form className='form' autoComplete='off' onSubmit={handleAddTodo}>
      <div className='data'>
        <label htmlFor='newTodo' className='data-label'>
          Add a new task in the list
        </label>
        <input
          className='data-input'
          type='text'
          name='newTodo'
          id='newTodo'
          placeholder='Enter the task here'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <div className='submit'>
        <Button text='Submit' />
      </div>
    </form>
  );
}
