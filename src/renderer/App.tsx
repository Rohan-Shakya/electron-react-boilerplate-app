import React, { useState } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../../assets/icon.png';
import { useActions } from './hooks/useAction';
import { useTypedSelector } from './hooks/useSelector';
import './App.global.scss';

const Todo = () => {
  const [text, setText] = useState('');
  const { addTodo } = useActions();
  const { loading, error, todoList } = useTypedSelector((state) => state.todos);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text !== '') {
      addTodo(text);
    }
    setText('');
  };

  return (
    <div className="container">
      <div className="img__container">
        <img width="100px" alt="icon" src={icon} />
      </div>

      <h1>Electron React Boilerplate App</h1>
      <h4>A Foundation for Scalable Desktop Apps</h4>

      <div className="todo__container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {!loading && !error && (
          <ul className="todo__list">
            {todoList.map((todo: Todo) => {
              return <li key={todo.id}>{todo.description}</li>;
            })}
          </ul>
        )}
      </div>
      <a
        href="https://electron-react-boilerplate.js.org/"
        target="_blank"
        rel="noreferrer"
        className="get_started"
      >
        <button type="button">
          <span role="img" aria-label="books">
            📚
          </span>
          Get Started
        </button>
      </a>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Todo} />
      </Switch>
    </Router>
  );
}
