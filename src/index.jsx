'use strict';
import 'babel/polyfill';
import debug from 'debug';
import React from 'react';
import { Provider } from 'react-redux';

import { app } from './shared';
import Flashsale from './views/Flashsale';


const store = app.createStoreWithMiddleware();

(() => {
  React.render(<h2>Hello</h2>, document.body);
})();


/*
(() => {
  debug('[storefront] start initializing application...');
  // Finds all dom elements with name='flashsale' on the page
  // & render its promotion info. using `data-id` value (product code)
  // if there's any.
  window.flashsale = {
    render(dataType) {
      const elements = document.getElementsByName('flashsale');
      for (let index = 0; index < elements.length; index++) {
        let dom = elements[index];
        let type = dataType ? dom.getAttribute('data-type') : 'default';

        // TODO existing render dom.
        if (type !== null) {
          let dataId = dom.getAttribute('data-id');
          React.render(
            <Provider store={store}>
              {() => <Flashsale data={ { id: dataId } } />}
            </Provider>,
            dom
          );
        }
      }
    }
  };
})();
*/
