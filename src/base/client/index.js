import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import InitialState from 'store/InitialState'
import ConfigureStore from 'store/ConfigureStore'

import App from 'containers/App/'
import Calculator from 'containers/Calculator/'
import Main from 'containers/Main/'
import WeatherStations from 'containers/WeatherStations/'

const history = createBrowserHistory()

const store = ConfigureStore(history, InitialState)

render(
  <Provider store={store}>
    <BrowserRouter basename='/'>
      <App>
        <Route exact path='/' component={Main} />
        <Route path='/calculator' component={Calculator} />
        <Route path='/weatherstations' component={WeatherStations} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
