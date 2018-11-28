import { makeAsyncActionCreator } from "redux-toolbelt";

const initialState = {
  fetching: false,
  rulesTime: [],
  message: ""
};

export const getColorsCounterTime = makeAsyncActionCreator(
  "GET_COLORS_COUNTER_TIME"
);

const idleReducer = (state = initialState, action) => {
  switch (action.type) {
    case getColorsCounterTime.TYPE: {
      return Object.assign({}, state, { fetching: true });
    }
    case getColorsCounterTime.success.TYPE: {
      return Object.assign({}, state, {
        fetching: false,
        rulesTime: action.payload,
        message: "Colores estan aquí"
      });
    }
    case getColorsCounterTime.failure.TYPE: {
      return Object.assign({}, state, {
        fetching: false,
        message: action.payload
      });
    }
    default:
      return state;
  }
};

export default idleReducer;
