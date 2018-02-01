import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import dnd from './dnd';


export default combineReducers({
  dnd,
  router: routerReducer,
});
