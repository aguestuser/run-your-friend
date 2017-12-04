import {merge, values, find, get} from 'lodash';
import {actionTypes} from '../actions/nominees';

const nominees = (state = {}, action = {}) => {
  switch(action.type){
  case actionTypes.NOMINEE_CREATED:
    return merge({}, state, {[action.payload.id]: action.payload });
  default:
    return state;
  }
};

// TODO: it would be better to derrive both of these given a nomination id
// see unnecessary O(N) operation in `getNominator`

export const getNominee = (state, id) => state.nominees[id];
export const getNominator = (state, nomineeId) => {
  const nominatorId = get(
    find(values(state.nominations), { nomineeId: nomineeId }),
    'nominatorId'
  );
  return get(state.nominators, nominatorId);
};

export default nominees;
