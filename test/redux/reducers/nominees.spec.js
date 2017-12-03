import {expect} from 'chai';
import {actionTypes} from '../../../src/redux/actions/nominees';
import nominees from '../../../src/redux/reducers/nominees';
import {nominee0, nominee1} from '../../support/fixtures';

describe('nominees reducer', () => {


  it('defaults to an empty object', () => {
    expect(nominees()).to.eql({});
  });

  it('adds a nominee to an empty treee', () => {
    expect(nominees({}, {
      type: actionTypes.NOMINEE_CREATED,
      payload: nominee0
    })).to.eql({
      [nominee0.id]: nominee0
    });
  });

  it('adds a nominee to a non-empty treee', () => {
    expect(nominees(
      {
        [nominee0.id]: nominee0
      },
      {
        type: actionTypes.NOMINEE_CREATED,
        payload: nominee1
      }
    )).to.eql({
      [nominee0.id]: nominee0,
      [nominee1.id]: nominee1,
    });
  });
});
