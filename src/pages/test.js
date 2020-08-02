import React, { useState } from 'react';
import styles from './cool.module.css';
import {} from 'antd';
import Counter from '../components/counter';
import JokeComponent from '../components/JokeBook/JokeBook';
import BlackJackComponent from '../components/BlackJack/Blackjack';
import { TodoComponent } from '../components/TodoList/TodoList';

const TestPage = () => {
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TodoComponent />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BlackJackComponent />
    </div>
  );
};

export default TestPage;
