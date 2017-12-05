import {merge, values, find, compact, get} from 'lodash';
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

// TODO: it might be better to derrive nominator and nominee from a nomination id
// to retrive nominators or in O(1) time instead of O(n)

export const getNominator = (state, nomineeId) => {
  const nominatorId = get(
    find(values(state.nominations), { nomineeId: nomineeId }),
    'nominatorId'
  );
  return state.nominators[nominatorId]
};

export const getSupporters = (state, nomineeId) =>
  compact( // in case we find any null/undefined values
    values(state.pledges)
      .filter(pledge => pledge.nomineeId === nomineeId)
      .map(pledge => state.supporters[pledge.supporterId])
  );

export const getBackers = (state, nomineeId) =>
  [
    getNominator(state, nomineeId),
    ...getSupporters(state, nomineeId)
  ]

export default nominees;
