import {expect} from 'chai';
import {actionTypes} from '../../../src/redux/actions/pledges';
import pledges from '../../../src/redux/reducers/pledges';
import {pledge0, pledge1} from '../../support/fixtures';

describe('pledges reducer', () => {

  it('defaults to an empty object', () => {
    expect(pledges()).to.eql({});
  });

  it('adds a pledge to an empty treee', () => {
    expect(pledges({}, {
      type: actionTypes.PLEDGE_CREATED,
      payload: pledge0
    })).to.eql({
      [pledge0.id]: pledge0
    });
  });

  it('adds a pledge to a non-empty treee', () => {
    expect(pledges(
      {
        [pledge0.id]: pledge0
      },
      {
        type: actionTypes.PLEDGE_CREATED,
        payload: pledge1
      }
    )).to.eql({
      [pledge0.id]: pledge0,
      [pledge1.id]: pledge1,
    });
  });
});
