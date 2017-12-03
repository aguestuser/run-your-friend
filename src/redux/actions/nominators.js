export const actionTypes = {
  NOMINATOR_CREATED: 'NOMINATOR_CREATED',
};

export const createNominator = (nominator) => ({
  type: actionTypes.NOMINATOR_CREATED,
  payload: nominator,
});
