import {merge} from 'lodash';
import {actionTypes} from '../actions/nominees';

const nominees = (state = {}, action = {}) => {
  switch(action.type){
  case actionTypes.NOMINEE_CREATED:
    return merge({}, state, {[action.payload.id]: action.payload });
  default:
    return state;
  }
};

export const getNominee = (state, id) => state.nominees[id];

export default nominees;
