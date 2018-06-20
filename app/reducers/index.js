import { combineReducers } from 'redux';
import usersReducer from './users';
import nav from './nav';

const AppReducer = combineReducers({
  nav,
  usersReducer,
});

export default AppReducer;
