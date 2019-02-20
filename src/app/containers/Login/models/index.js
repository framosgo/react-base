import { Record } from 'immutable';

export const SessionModel = Record({
  token: sessionStorage.getItem('token') || '',
  user: sessionStorage.getItem('user') || ''
});

export const setInitialState = initialState => {
  initialState.Session = new SessionModel();
  return initialState;
};
