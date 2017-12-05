import {expect} from 'chai';
import {actionTypes, createSupporter} from '../../../src/redux/actions/supporters';

describe('supporter actions module', () => {

  const supporter = {
    nominatorId: 'fakeId0',
    nomineeId: 'fakeId1',
  };

  it('creates a supporter', () => {
    expect(createSupporter(supporter)).to.eql({
      type: actionTypes.SUPPORTER_CREATED,
      payload: supporter,
    });
  });
});
