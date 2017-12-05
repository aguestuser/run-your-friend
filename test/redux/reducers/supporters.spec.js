import {expect} from 'chai';
import {actionTypes} from '../../../src/redux/actions/supporters';
import supporters from '../../../src/redux/reducers/supporters';
import {supporter0, supporter1} from '../../support/fixtures';

describe('supporters reducer', () => {

  it('defaults to an empty object', () => {
    expect(supporters()).to.eql({});
  });

  it('adds a supporter to an empty treee', () => {
    expect(supporters({}, {
      type: actionTypes.SUPPORTER_CREATED,
      payload: supporter0
    })).to.eql({
      [supporter0.id]: supporter0
    });
  });

  it('adds a supporter to a non-empty treee', () => {
    expect(supporters(
      {
        [supporter0.id]: supporter0
      },
      {
        type: actionTypes.SUPPORTER_CREATED,
        payload: supporter1
      }
    )).to.eql({
      [supporter0.id]: supporter0,
      [supporter1.id]: supporter1,
    });
  });
});
