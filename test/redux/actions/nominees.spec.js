import {expect} from 'chai';
import {nominee0} from '../../support/fixtures';
import {actionTypes, createNominee} from '../../../src/redux/actions/nominees.js';

describe('nominees actions module', () => {

  it('creates a nominee', () => {
    expect(createNominee(nominee0)).to.eql({
      type: actionTypes.NOMINEE_CREATED,
      payload: nominee0,
    });
  });
});
