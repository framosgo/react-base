import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { AppModel } from '../models';

const setLanguage = (state, { payload }) => ({
  ...state,
  lang: payload
});

const actionHandlers = {
  [ActionTypes.SET_LANGUAGE]: setLanguage
};

export default createReducer(actionHandlers, AppModel);
