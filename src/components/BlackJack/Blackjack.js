import React, { useState } from 'react';
import { connect } from 'dva';
import { Button, message } from 'antd';

const BlackJackComponent = ({ dispatch }) => {
  const [deckId, setDeckId] = useState('');
  const [playerCards, setPlayerCards] = useState({ img: '', value: 0 });

  const PlayerComponent = () => {
    return (
      <div>
        <h1>PLAYER:</h1>
        <img src={playerCards.img} style={{ maxHeight: '150px' }} alt="yes" />
      </div>
    );
  };
  const HouseComponent = () => {
    return (
      <div>
        <h1>House:</h1>
      </div>
    );
  };
  const shuffle = () => {
    dispatch({
      type: 'blackjack/shuffle',
      callback: response => {
        console.log(response);
        setDeckId(response.deck_id);
      },
      error: () => {
        message.error('failed to shufffle');
      },
    });
  };
  const draw = () => {
    dispatch({
      type: 'blackjack/draw',
      payload: {
        deckId: deckId,
      },
      callback: response => {
        const card = response.cards[0];
        console.log(card);

        setPlayerCards({ img: card.image, value: card.value });
      },
      error: () => {
        message.error('failed to draw');
      },
    });
  };
  return (
    <div>
      <h1>BLACKJACK</h1>
      <PlayerComponent />
      <HouseComponent />

      <Button onClick={shuffle}>New Game</Button>
      <Button onClick={draw}>Hit</Button>
    </div>
  );
};

export default connect(({ blackjack }) => ({ blackjack }))(BlackJackComponent);
