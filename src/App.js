import './App.css';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <main className='App'>
      <div className='todo-app'>
        <TodoApp />
      </div>
      <div className='footer'>
        <p>
          Made by{' '}
          <a href='https://www.aryankumar.in' target='_blank' rel='noreferrer'>
            Aryan Kumar
          </a>
        </p>
      </div>
    </main>
  );
}

export default App;
