import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import nominees from './nominees';

export default combineReducers({
  form,
  nominees,
});
