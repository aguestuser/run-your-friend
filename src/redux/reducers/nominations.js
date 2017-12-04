import {merge} from 'lodash';
import {actionTypes} from '../actions/nominations';

const nominations = (state = {}, action = {}) => {
  switch(action.type){
  case actionTypes.NOMINATION_CREATED:
    return merge({}, state, {[action.payload.id]: action.payload });
  default:
    return state;
  }
};

export default nominations;
