import makeRequest from '../utils/request';

export const JokeRequest = () => {
  const url = 'https://official-joke-api.appspot.com/random_joke';
  const response = makeRequest(url);
  return response;
};

export const ShuffleDeck = () => {
  const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6';
  const response = makeRequest(url);
  return response;
};

export const DrawCard = (deckId, count) => {
  const id = '9fuzf93nabvs';
  console.log(count);
  const url = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=${count}`;
  const response = makeRequest(url);
  return response;
};
