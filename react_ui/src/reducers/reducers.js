import {combineReducers} from 'redux';
import dnd from './dnd';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  dnd,
  router: routerReducer
});
