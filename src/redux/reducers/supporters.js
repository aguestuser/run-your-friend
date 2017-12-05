import {merge} from 'lodash';
import {actionTypes} from '../actions/supporters';

const supporters = (state = {}, action = {}) => {
  switch(action.type){
  case actionTypes.SUPPORTER_CREATED:
    return merge({}, state, {[action.payload.id]: action.payload });
  default:
    return state;
  }
};

export default supporters;
