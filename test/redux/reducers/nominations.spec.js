import {expect} from 'chai';
import {actionTypes} from '../../../src/redux/actions/nominations';
import nominations from '../../../src/redux/reducers/nominations';
import {nomination0, nomination1} from '../../support/fixtures';

describe('nominations reducer', () => {

  it('defaults to an empty object', () => {
    expect(nominations()).to.eql({});
  });

  it('adds a nomination to an empty treee', () => {
    expect(nominations({}, {
      type: actionTypes.NOMINATION_CREATED,
      payload: nomination0
    })).to.eql({
      [nomination0.id]: nomination0
    });
  });
  
  it('adds a nomination to a non-empty treee', () => {
    expect(nominations(
      {
        [nomination0.id]: nomination0
      },
      {
        type: actionTypes.NOMINATION_CREATED,
        payload: nomination1
      }
    )).to.eql({
      [nomination0.id]: nomination0,
      [nomination1.id]: nomination1,
    });
  });
});
