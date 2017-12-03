import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import nominees from './nominees';
import nominators from './nominators';

export default combineReducers({
  form,
  nominees,
  nominators,
});
