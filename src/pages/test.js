import React, { useState } from 'react';
import styles from './cool.module.css';
import { Form, Input, Button, Checkbox } from 'antd';
import Counter from '../components/counter';
import JokeComponent from '../components/JokeBook/JokeBook';

const TestPage = () => {
  const [todos, setTodos] = useState([
    { text: 'Hello World', isCompleted: false },
    { text: 'Goodbye World', isCompleted: false },
    { text: 'Sayonara World', isCompleted: false },
  ]);
  const [value, setValue] = useState('');
  const Todo = ({ index, todo }) => {
    return (
      <div>
        <h1>{todo.text}</h1>
      </div>
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!e.value) return;
    addTodo(e.value);
    setValue('');
  };

  const TodoForm = ({ addTodo }) => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Add Todo..."
        />
      </form>
    );
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className={styles.test}>
      <h1>Testing 12321</h1>
      <div>
        <Counter />
        <Counter />
        <Counter />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <JokeComponent />
    </div>
  );
};

export default TestPage;
