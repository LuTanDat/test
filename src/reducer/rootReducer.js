
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  // name hien thi trong State Redux
  counter: counterReducer,
  user: userReducer
});

export default rootReducer;