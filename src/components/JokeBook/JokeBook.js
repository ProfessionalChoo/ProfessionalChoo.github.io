import React, { useState } from 'react';
import { connect } from 'dva';
import { Button, message } from 'antd';
import styles from './style.module.css';

const JokeComponent = ({ dispatch }) => {
  const [setup, setSetup] = useState('');
  const [punchline, setPunchLine] = useState('');
  const [loading, setLoading] = useState(false);

  const generateJoke = () => {
    console.log('Generating Joke');
    setLoading(true);
    dispatch({
      type: 'jokebook/get',

      callback: response => {
        message.success(response.id);
        console.log(response);
        setLoading(false);

        setSetup(response.setup);
        setPunchLine(response.punchline);
      },

      error: () => {
        message.error('failed');
      },
    });
  };

  return (
    <div>
      <h1>JOKE: {setup}</h1>
      <h2>PUNCHLINE: {punchline}</h2>
      <Button onClick={generateJoke} loading={loading} className={styles.Button}>
        Click For Joke
      </Button>
    </div>
  );
};

export default connect(({ jokebook }) => ({ jokebook }))(JokeComponent);
