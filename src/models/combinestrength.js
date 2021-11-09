 import { CombineStrength } from "../services/restAPI";

 export default {
    namespace: 'combinestrength',
  
    state: [],
  
    effects: {
      *combine({ payload, callback, error }, { call, put }) {
        const {cohort1, cohort2} = payload;
        try {
          const response = yield call(CombineStrength, cohort1, cohort2);
          callback(response)
        } catch (err) {
          console.log(err)
          error(err);
        }
      },
    },
  
    reducers: {},
  };
  