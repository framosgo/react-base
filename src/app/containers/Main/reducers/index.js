import { createReducer } from 'base';
import { MainModel } from '../models';
import ActionTypes from '../actionTypes';
import { LOGO_MOCK } from '../api';

const logoRequest = state => state;

const logoError = state => (
  state
    .set('id', LOGO_MOCK.id)
    .set('alt', LOGO_MOCK.alt)
    .set('src', LOGO_MOCK.src)
    .set('name', LOGO_MOCK.name)
    .set('width', LOGO_MOCK.width)
);

const logoSuccess = (state, { payload }) => (
  state
    .set('id', payload.id)
    .set('alt', payload.alt)
    .set('src', payload.src)
    .set('name', payload.name)
    .set('width', payload.width)
);

const actionHandlers = {
  [ActionTypes.LOGO_REQUEST]: logoRequest,
  [ActionTypes.LOGO_SUCCESS]: logoSuccess,
  [ActionTypes.LOGO_ERROR]: logoError
};

export default createReducer(actionHandlers, new MainModel());
