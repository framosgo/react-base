import { createActionType } from 'base';

export default createActionType([
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_ERROR',
  'LOGOUT_REQUEST',
  'LOGOUT_SUCCESS',
  'LOGOUT_ERROR'
]);
