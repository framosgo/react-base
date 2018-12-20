import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { BrowserRouter } from 'react-router-dom'

import InitialState from 'store/InitialState'
import ConfigureStore from 'store/ConfigureStore'

import Routes from '../Routes'

const history = createBrowserHistory()

const store = ConfigureStore(history, InitialState)

render(
  <Provider store={store}>
    <BrowserRouter basename='/'>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
