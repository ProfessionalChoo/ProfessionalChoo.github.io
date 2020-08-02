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

export const DrawCard = async deckId => {
  const id = 'zavvqjzq4z4m';
  const url = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`;
  const response = await makeRequest(url);
  return response;
};
