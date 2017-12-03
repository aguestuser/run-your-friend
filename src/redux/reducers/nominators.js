import {merge} from 'lodash';
import {actionTypes} from '../actions/nominators';

const nominators = (state = {}, action = {}) => {
  switch (action.type){
  case actionTypes.NOMINATOR_CREATED:
    return merge({}, state, { [action.payload.id]: action.payload });
  default:
    return state;
  }
};

export default nominators;
