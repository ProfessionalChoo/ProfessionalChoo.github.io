import React, { useState } from 'react';
import { connect } from 'dva';
import { Button, message, Row, Col } from 'antd';

const BlackJackComponent = ({ dispatch }) => {
  const [deckId, setDeckId] = useState('');
  const [playerCards, setPlayerCards] = useState([]);
  const [buttonLoad, setButtonLoad] = useState(false);
  const [playerSum, setPlayerSum] = useState(0);

  const test = () => {
    //console.log(playerCards);
    let sum = 0;
    for (const [i, v] of playerCards.entries()) {
      let value = v.value;
      if (isNaN(value)) {
        sum += 10;
      } else {
        sum = sum + parseInt(v.value);
      }
      setPlayerSum(sum);
    }
    console.log(sum);
  };
  const CardList = props => {
    return <img src={props.img} style={{ maxHeight: '150px' }} alt="yes" />;
  };

  const PlayerComponent = () => {
    test();
    return (
      <div>
        <Row>
          <Col span={2} offset={10}>
            <h1>Player:</h1>
          </Col>
          <Col span={2}>
            <h1>{playerSum}</h1>
          </Col>
        </Row>
        <ul>
          {playerCards.map((card, i) => (
            <CardList key={card.img} img={card.img} />
          ))}
        </ul>
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
    setButtonLoad(true);
    dispatch({
      type: 'blackjack/shuffle',
      callback: response => {
        console.log(response);
        setDeckId(response.deck_id);
        setPlayerCards([]);
        setButtonLoad(false);
      },
      error: () => {
        message.error('failed to shufffle');
      },
    });
  };

  const draw = () => {
    setButtonLoad(true);

    dispatch({
      type: 'blackjack/draw',
      payload: {
        deckId: deckId,
      },
      callback: response => {
        const card = response.cards[0];
        console.log(card);
        setPlayerCards(playerCards.concat({ img: card.image, value: card.value }));
        setButtonLoad(false);
      },
      error: () => {
        message.error('failed to draw');
      },
    });
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>BLACKJACK</h1>
      <PlayerComponent />
      <HouseComponent />
      <Button onClick={shuffle} loading={buttonLoad}>
        New Game
      </Button>
      <Button onClick={draw} loading={buttonLoad}>
        Hit
      </Button>
      <Button onClick={test}>TEST</Button>
    </div>
  );
};

export default connect(({ blackjack }) => ({ blackjack }))(BlackJackComponent);
