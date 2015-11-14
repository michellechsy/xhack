'use strict';

import React from 'react';
import classNames from 'classnames';

require('./styles.scss');


export default class Status extends React.Component {
  render() {
    return (
      <div className={classNames('status')}>
        <div className="container">
          Status
        </div>
      </div>
    );
  }
}
