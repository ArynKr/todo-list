import Todo from './Todo';
import './Todos.css';

export default function Todos({ todos }) {
  todos = todos.filter((todo) => {
    return todo.userId === 1;
  });
  return (
    <>
      <h2 className='todos-title'>Added tasks in to-do list</h2>
      <div className='todosList'>
        {todos.map((todo, idx) => (
          <Todo todo={todo} key={todo.id} idx={idx + 1} />
        ))}
      </div>
    </>
  );
}
