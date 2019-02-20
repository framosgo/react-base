import { createReducer } from 'base';
import { SessionModel } from '../models';
import ActionTypes from '../actionTypes';

const loginRequest = state => state;
const loginError = state => state;
const loginSuccess = (state) => state; 

const logoutRequest = state => state;
const logoutError = state => state;
const logoutSuccess = state => state.set('user', '')
  .set('token', '');

const actionHandlers = {
  [ActionTypes.LOGIN_REQUEST]: loginRequest,
  [ActionTypes.LOGIN_ERROR]: loginError,
  [ActionTypes.LOGIN_SUCCESS]: loginSuccess,
  [ActionTypes.LOGOUT_REQUEST]: logoutRequest,
  [ActionTypes.LOGOUT_ERROR]: logoutError,
  [ActionTypes.LOGOUT_SUCCESS]: logoutSuccess
};

export default createReducer(actionHandlers, new SessionModel());
