import makeRequest from '../utils/request';

export const JokeRequest = () => {
  const url = 'https://v2.jokeapi.dev/joke/Any';
  const response = makeRequest(url);
  return response;
};

export const ShuffleDeck = () => {
  const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
  const response = makeRequest(url);
  return response;
};

export const DrawCard = (deckId, count) => {
  const id = deckId;
  console.log(count);
  const url = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=${count}`;
  const response = makeRequest(url);
  return response;
};

export const joinStrength = (cohort1, cohort2) => {
  const url = `https://djangobells.herokuapp.com/playground/str/?c1=${cohort1}&c2=${cohort2}`;
  console.log(url)
  const response = makeRequest(url);
  return response;
};
//  https://djangobells.herokuapp.com/playground/hello/?a=1&b=2
//   `https://djangobells.herokuapp.com/playground/hello/?a=${cohort1}&b=${cohort2}`