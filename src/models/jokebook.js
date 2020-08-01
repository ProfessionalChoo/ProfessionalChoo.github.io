import { JokeRequest } from '../services/restAPI';

export default {
  namespace: 'jokebook',

  state: [],

  effects: {
    *get({ payload, callback, error }, { call, put }) {
      try {
        const response = yield call(JokeRequest);
        callback(response);
      } catch (err) {
        error(err);
      }
    },
  },

  reducers: {},
};
