import * as api from '../api';
import ActionTypes from '../actionTypes';

export const loginRequest = (user, password) => ({
  type: ActionTypes.LOGIN_REQUEST,
  request: api.loginRequest(user, password)
});

export const logoutRequest = () => ({
  type: ActionTypes.LOGOUT_REQUEST,
  request: api.logoutRequest()
});