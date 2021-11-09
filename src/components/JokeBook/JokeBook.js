import React, { useState } from 'react';
import { connect } from 'dva';
import { Button, message } from 'antd';
import styles from './style.module.css';

const JokeComponent = ({ dispatch }) => {
  const [setup, setSetup] = useState('');
  const [delivery, setDelivery] = useState('');
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
        setDelivery(response.delivery);
      },

      error: () => {
        message.error('failed');
      },
    });
  };

  return (
    <div>
      <h1>JOKE: {setup}</h1>
      <h2>PUNCHLINE: {delivery}</h2>
      <Button onClick={generateJoke} loading={loading} className={styles.Button}>
        Click For Joke
      </Button>
      <br/>
      <a href="https://cors-anywhere.herokuapp.com/corsdemo"  style={{fontSize : 10}} >Click here if joke not working</a>

    </div>
  );
};

export default connect(({ jokebook }) => ({ jokebook }))(JokeComponent);
