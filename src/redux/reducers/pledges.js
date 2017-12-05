import {merge} from 'lodash';
import {actionTypes} from '../actions/pledges';

const pledges = (state = {}, action = {}) => {
  switch (action.type){
  case actionTypes.PLEDGE_CREATED:
    return merge({}, state, { [action.payload.id]: action.payload });
  default:
    return state;
  }
};

export default pledges;
