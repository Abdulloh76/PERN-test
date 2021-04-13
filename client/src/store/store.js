import { createStore, combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { deviceReducer } from './deviceReducer';

const rootReducer = combineReducers({
  user: userReducer,
  device: deviceReducer,
})


export const store = createStore(rootReducer);
