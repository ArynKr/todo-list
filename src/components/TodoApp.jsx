import React from 'react';
import Form from './Form';
import './TodoApp.css';

export default function TodoApp() {
  return (
    <>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <div className='new-todo'>
        <Form />
      </div>
    </>
  );
}
