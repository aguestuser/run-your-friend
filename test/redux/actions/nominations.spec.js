import {expect} from 'chai';
import {actionTypes, createNomination} from '../../../src/redux/actions/nominations';

describe('nomination actions module', () => {

  const nomination = {
    nominatorId: 'fakeId0',
    nomineeId: 'fakeId1',
  };

  it('creates a nomination', () => {
    expect(createNomination(nomination)).to.eql({
      type: actionTypes.NOMINATION_CREATED,
      payload: nomination,
    });
  });
});
