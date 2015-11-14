'use strict';
import { ActionTypes } from '../actions';


// TODO proper error handling (both here & view component).
function flashsale(state = {}, action) {
  switch (action.type) {
  case ActionTypes.fetchFlashsale:
    if (action.error) {
      return state;
    }
    const { expires, countdownDuration, counterType } = action.payload;
    let nextState = {};
    nextState[action.meta] = {
      expires,
      type: counterType,
      duration: countdownDuration
    };
    return Object.assign({}, state, nextState);

  default:
    return state;
  }
}

export default flashsale;
