import React, { useState } from 'react';
import { connect } from 'dva';
import { Button, message, Row, Col, Modal } from 'antd';

const BlackJackComponent = ({ dispatch }) => {
  const [deckId, setDeckId] = useState('');
  const [cardCount, setCardCount] = useState(1);
  const [playerCards, setPlayerCards] = useState([]);
  const [buttonLoad, setButtonLoad] = useState(false);
  const [playerSum, setPlayerSum] = useState(0);
  const [houseSum, setHouseSum] = useState(0);
  const [modalState, setModalState] = useState(false);

  let cards = null;

  const checkSum = () => {
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
      if (sum > 21) {
        setModalState(true);
      }
    }
  };
  const CardList = props => {
    return <img src={props.img} style={{ maxHeight: '150px' }} alt="yes" />;
  };

  const PlayerComponent = () => {
    checkSum();
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
          {playerCards.map((cards, i) => (
            <CardList key={cards.img} img={cards.img} />
          ))}
        </ul>
      </div>
    );
  };
  const HouseComponent = () => {
    return (
      <div>
        <Row>
          <Col span={2} offset={10}>
            <h1>House:</h1>
          </Col>
          <Col span={2}>
            <h1>{houseSum}</h1>
          </Col>
        </Row>
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
        resetGame();
        setButtonLoad(false);
      },
      error: () => {
        message.error('failed to shufffle');
      },
    });
  };

  const draw = async () => {
    setButtonLoad(true);
    await dispatch({
      type: 'blackjack/draw',
      payload: {
        deckId: deckId,
        count: cardCount,
      },
      callback: response => {
        cards = response.cards;
        console.log(cards);
        message.success(' draw');
      },
      error: () => {
        message.error('failed to draw');
      },
    });
  };

  const deal = async () => {
    resetGame();
    setCardCount(2, console.log(cardCount));

    await draw();
    //console.log(cards);
    setButtonLoad(false);
  };

  const hit = async () => {
    setCardCount(1);
    await draw();
    console.log(cards);

    setPlayerCards(playerCards.concat({ img: cards[0].image, value: cards[0].value }));
    setButtonLoad(false);
  };
  const stand = () => {
    resetGame();
    setButtonLoad(false);
  };
  const resetGame = () => {
    setPlayerCards([]);
    setPlayerSum(0);
  };

  const handleOk = () => {
    resetGame();
    setModalState(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>BLACKJACK</h1>
      <HouseComponent />

      <PlayerComponent />
      <Button onClick={shuffle} loading={buttonLoad} disabled={false}>
        New Game
      </Button>
      <Button onClick={hit} loading={buttonLoad}>
        Hit
      </Button>
      <Button onClick={deal} loading={buttonLoad}>
        deal
      </Button>
      <Button onClick={stand} loading={buttonLoad}>
        Stand
      </Button>
      <Modal title="Game Over" visible={modalState} onOk={handleOk} onCancel={handleOk}>
        YOU LOSE LOSER
      </Modal>
    </div>
  );
};

export default connect(({ blackjack }) => ({ blackjack }))(BlackJackComponent);
