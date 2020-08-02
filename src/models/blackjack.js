import { ShuffleDeck, DrawCard } from '../services/restAPI';

export default {
  namespace: 'blackjack',

  state: [],

  effects: {
    *shuffle({ payload, callback, error }, { call, put }) {
      try {
        const response = yield call(ShuffleDeck);
        callback(response);
      } catch (err) {
        error(err);
      }
    },
    *draw({ payload, callback, error }, { call, put }) {
      const { deckId, count } = payload;
      try {
        const response = yield call(DrawCard, deckId, count);
        callback(response);
      } catch (err) {
        error(err);
      }
    },
  },

  reducers: {},
};
