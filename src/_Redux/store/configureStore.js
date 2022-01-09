import {createStore, combineReducers} from 'redux';

import InfoReducer from '../reducers/InfoReducer';

const reducers = combineReducers({
  save: InfoReducer,
});

const configureStore = () => {
  return createStore(reducers);
};

export default configureStore;
