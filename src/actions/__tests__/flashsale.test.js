'use strict';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import ActionTypes from '../ActionTypes';
import { fetchFlashsale } from '../flashsale';


describe('actions.flashsale', () => {
  it(`dispatch action to fetch flashsale promotion`, () => {
    let product = '0002';
    let result = fetchFlashsale(product);

    expect(result.meta).to.equal(product);
    expect(result.type).to.equal(ActionTypes.fetchFlashsale);
  });
});
