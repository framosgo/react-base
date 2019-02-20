import { camelize } from 'base/shared/utils';

export const AppModel = {
  lang: camelize(navigator.language)
};

export const setInitialState = (initialState = {}) => ({
  ...AppModel,
  ...initialState
});
