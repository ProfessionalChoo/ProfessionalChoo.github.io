import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';

import { Button, message } from 'antd';

const JokeComponent = ({ dispatch }) => {
  const [setup, setSetup] = useState('');
  const [punchline, setPunchLine] = useState('');

  const generateJoke = () => {
    console.log('Generating Joke');
    dispatch({
      type: 'jokebook/get',

      callback: response => {
        message.success(response.id);
        console.log(response);
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
      <Button onClick={generateJoke}>Pressmefofrfjoks</Button>
    </div>
  );
};

export default connect(({ jokebook }) => ({ jokebook }))(JokeComponent);
