import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'containers/App';

import InitialState from 'store/InitialState';
import ConfigureStore from 'store/ConfigureStore';

const store = ConfigureStore(InitialState);

const ReactApp = () => (
  <Provider store={ store }>
    <App />
  </Provider>
);

render(<ReactApp />, document.getElementById('root'));
