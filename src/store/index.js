import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const storeConfiguration = reducers => {
  return createStore(combineReducers(reducers), applyMiddleware(reduxThunk));
};

export default storeConfiguration;
