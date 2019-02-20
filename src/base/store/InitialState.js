import * as models from '../models';
import setGlobalState from './GlobalState';

// eslint-disable-next-line no-undef
const initialState = window.$REACTBASE_STATE || {};

setGlobalState(initialState, models);

export default initialState;
