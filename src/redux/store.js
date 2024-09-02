import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'; //(middleware use fetch api)
import rootReducer from '../reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);


export default store;