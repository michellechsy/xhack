'use strict';

import 'es6-shim';

import React from 'react';
import App from './views/App';


require('../assets/favicon.ico');
require('../assets/app.scss');


document.addEventListener('DOMContentLoaded', function () {
  React.render(<App />, document.getElementById('root'));
});
