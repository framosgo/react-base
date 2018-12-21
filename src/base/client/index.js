import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { HashRouter } from 'react-router-dom'

import InitialState from 'store/InitialState'
import ConfigureStore from 'store/ConfigureStore'

import App from '../../App'

const history = createBrowserHistory()

const store = ConfigureStore(history, InitialState)

render(
  <Provider store={store}>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
