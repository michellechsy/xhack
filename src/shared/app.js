'use strict';
import { applyMiddleware, compose, createStore } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import reducers from '../reducers';


const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});


let store;
let middleware = [
  promiseMiddleware,
  loggerMiddleware
];


/**
 * Creates an application-wide redux store for handling events
 * with optional initial state.
 *
 * @param {Object} initialState initial state for the application store.
 * @return {Object} redux application store.
 */
export function createStoreWithMiddleware(initialState) {
  let finalCreateStore;

  if (process.env.NODE_ENV === 'production') {
    finalCreateStore = applyMiddleware(...middleware)(createStore);
  } else {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      devTools(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
  }

  if (store) {
    return store;
  }
  store = finalCreateStore(reducers, initialState);
  return store;
}
