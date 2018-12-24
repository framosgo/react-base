import React from 'react'
import { Route } from 'react-router-dom'
import Calculator from 'containers/Calculator/'
import Main from 'containers/Main/'
import WeatherStations from 'containers/WeatherStations/'

import './styles'

const App = () => (
  <>
    <Route exact path='/' component={Main} />
    <Route path='/calculator' component={Calculator} />
    <Route path='/weatherstations' component={WeatherStations} />
  </>
)

export default App
