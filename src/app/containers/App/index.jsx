import React, { Component, Suspense } from 'react';

import { HashRouter as Router, Switch } from 'react-router-dom';
import { Routes } from 'routes';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Suspense fallback={ <div>Loading...</div> }>
            <Switch>
              <Routes />
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
