import React from 'react';
import { Route } from 'react-router-dom';
import Calculator from 'containers/Calculator/';
import Main from 'containers/Main/';
import WeatherStations from 'containers/WeatherStations/';
import App from 'containers/App';

const Routes = () => (
  <Route path="/" component={ () => (
    <App>
      <Route exact={ true } path="/" component={ Main } />
      <Route path="/calculator" component={ Calculator } />
      <Route path="/weatherstations" component={ WeatherStations } />
    </App>
  ) } />
);

export default Routes;
