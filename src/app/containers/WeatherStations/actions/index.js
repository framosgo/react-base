import api from '../api';
import ActionTypes from '../actionTypes';

export const getWeatherStations = () => ({
  type: ActionTypes.WEATHERSTATIONS_REQUEST,
  request: api.fetchWeatherStations()
});

export const weatherStationSelected = id => ({
  type: ActionTypes.WEATHERSTATION_SELECTED,
  id: id
});

export const getWeather = (lat, lng) => ({
  type: ActionTypes.FORECAST_REQUEST,
  request: api.fetchWeather(lat, lng)
});
