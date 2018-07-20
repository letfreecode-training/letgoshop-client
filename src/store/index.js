import { createStore, combineReducers } from 'redux';

const storeConfiguration = reducers => {
  return createStore(combineReducers(reducers));
};

export default storeConfiguration;
