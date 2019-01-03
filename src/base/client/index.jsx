import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { HashRouter as Router } from 'react-router-dom';

import InitialState from 'store/InitialState';
import ConfigureStore from 'store/ConfigureStore';

import Routes from 'base/routes';

const history = createBrowserHistory();

const store = ConfigureStore(history, InitialState);

const ReactApp = () => (
  <Provider store={ store }>
    <Router basename="/">
      <Routes />
    </Router>
  </Provider>
);

let App = ReactApp;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { hot } = require('react-hot-loader');
  App = hot(module)(ReactApp);
}

render(<App />, document.getElementById('root'));
