import {merge} from 'lodash';

const nominees = (state = {}, action = {}) => {
  switch(action.type){
  case 'NOMINEE_ADDED':
    return merge({}, state, {[action.payload.id]: action.payload });
  default:
    return state;
  }
};

export default nominees;
