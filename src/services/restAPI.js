import makeRequest from '../utils/request';

export const JokeRequest = () => {
  const url = 'https://official-joke-api.appspot.com/random_joke';
  const response = makeRequest(url);
  return response;
};
