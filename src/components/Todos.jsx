import Todo from './Todo';
import './Todos.css';

export default function Todos({ todos, setTodos }) {
  todos = todos.filter((todo) => {
    return todo.userId === 1;
  });
  return (
    <>
      <h2 className='todos-title'>Added tasks in to-do list</h2>
      <div className='todosList'>
        {todos.map((todo, idx) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            idx={idx + 1}
          />
        ))}
      </div>
    </>
  );
}
