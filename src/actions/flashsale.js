'use strict';
import { consts, http } from '../shared';
import ActionTypes from './ActionTypes';


export function fetchFlashsale(key) {
  let url = `${consts.api}/restrictions/products/${key}`;
  return {
    meta: key,
    type: ActionTypes.fetchFlashsale,
    payload: http.get(url).then(response => response.body)
  };
}
