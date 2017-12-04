export const actionTypes = {
  NOMINATION_CREATED: 'NOMINATION_CREATED'
};

export const createNomination = nomination => ({
  type: actionTypes.NOMINATION_CREATED,
  payload: nomination,
});
