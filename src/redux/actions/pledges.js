export const actionTypes = {
  PLEDGE_CREATED: 'PLEDGE_CREATED',
};

// Pledge -> { type: String, payload: Pledge }
export const createPledge = (pledge) => ({
  type: actionTypes.PLEDGE_CREATED,
  payload: pledge
});
