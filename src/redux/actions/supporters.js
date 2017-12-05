export const actionTypes = {
  SUPPORTER_CREATED: 'SUPPORTER_CREATED',
};

// Nominee -> { type: String, payload: Nominee }
export const createSupporter = (supporter) => ({
  type: actionTypes.SUPPORTER_CREATED,
  payload: supporter
});
