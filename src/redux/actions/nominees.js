export const actionTypes = {
  NOMINEE_CREATED: 'NOMINEE_CREATED',
};

// Nominee -> { type: String, payload: Nominee }
export const createNominee = (nominee) => ({
  type: actionTypes.NOMINEE_CREATED,
  payload: nominee
});
