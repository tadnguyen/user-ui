import { combineReducers } from 'redux';
import { usersReducer } from './userReducer';
import { pageReducer } from './pageReducer';
const rootReducer = combineReducers({
    usersReducer,
    pageReducer
  });
export default rootReducer;