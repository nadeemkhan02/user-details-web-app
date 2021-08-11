import {getUserCollegeAPI} from "../services/userServices.js"
export default {
  namespace: 'user',
  state: {
    colleges : [],
    allUser : []
  },

  effects: {
    *setState({ payload }, { put }) {
      yield put({
        type: 'save',
        payload,
      });
    },
    *getUserCollege({ payload }, { call, put }) {
      console.log("hello")
      try {
        const response = yield call(getUserCollegeAPI, payload);
        if (response.status == 200) {
          console.log('response of user', response);
          yield put({
            type: 'save',
            payload: { colleges: response.data }
          });
        }
      } catch (error) {
        console.error('error in user college api', error);
      }
    }
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
    clear() {
      return {
        colleges: []
      }
    }
  }
}
