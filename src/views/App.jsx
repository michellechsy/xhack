'use strict';

import React from 'react';

import Nav from './Nav';
import Banner from './Banner';
import Status from './Status';


class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div className="container">
            <Nav />
            <Banner />
            <h2>App</h2>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
