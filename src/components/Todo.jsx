import { Button } from './elements';
import './Todo.css';
import done from '../components/assets/done.svg';
import axios from 'axios';

export default function Todo({ todo, idx, todos, setTodos }) {
  // mark complete task function
  async function markComplete() {
    try {
      const newTodos = todos.map((t) => {
        if (t.id === todo.id)
          return {
            ...todo,
            completed: true,
          };
        return t;
      });
      setTodos(newTodos);
      const res = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/:${todo.id}`,
        {
          ...todo,
          completed: true,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
      setTodos(todos);
    }
  }

  // mark incomplete task function
  async function markIncomplete() {
    try {
      const newTodos = todos.map((t) => {
        if (t.id === todo.id)
          return {
            ...todo,
            completed: false,
          };
        return t;
      });
      setTodos(newTodos);
      const res = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/:${todo.id}`,
        {
          ...todo,
          completed: false,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
      setTodos(todos);
    }
  }

  // delete task function
  async function deleteTask() {
    try {
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/:${todo.id}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
      setTodos(todos);
    }
  }

  const completed = todo.completed;
  return (
    <>
      <div className={`card ${completed ? 'completed' : 'shadow'}`}>
        <p className='num'>{idx}.</p>
        {completed && (
          <div className='done-box'>
            <img src={done} alt='done' />
          </div>
        )}
        <div className='title'>
          <p>{todo.title}</p>
        </div>
        <div className='actions'>
          <Button
            bg={`${completed ? 'nofill' : ''}`}
            width='w-2'
            text={`${completed ? 'Mark as incomplete' : 'Mark as completed'}`}
            handleClick={completed ? markIncomplete : markComplete}
          />
          <Button
            bg='nofill'
            text='Delete'
            color={`${completed ? 'mute' : 'pink'}`}
            handleClick={deleteTask}
          />
        </div>
      </div>
    </>
  );
}
