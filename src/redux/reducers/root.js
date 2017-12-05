import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import nominees from './nominees';
import nominators from './nominators';
import nominations from './nominations';
import supporters from './supporters';
import pledges from './pledges';

export default combineReducers({
  form,
  nominees,
  nominators,
  nominations,
  supporters,
  pledges,
});
