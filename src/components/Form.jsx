import React from 'react';
import { Button } from './elements';
import './Form.css';

export default function Form() {
  return (
    <form className='form'>
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
        />
      </div>
      <div className='submit'>
        <Button />
      </div>
    </form>
  );
}
