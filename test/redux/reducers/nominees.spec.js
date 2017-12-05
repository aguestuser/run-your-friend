import {expect} from 'chai';
import {actionTypes} from '../../../src/redux/actions/nominees';
import nominees, {getNominee, getNominator} from '../../../src/redux/reducers/nominees';
import {nominee0, nominee1, nominator0, nominator1, nomination0} from '../../support/fixtures';

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

  describe('selectors', () => {

    const state = {
      nominees: {
        [nominee0.id]: nominee0,
      },
      nominators: {
        [nominator0.id]: nominator0,
      },
      nominations: {
        [nomination0.id]: nomination0,
      }
    };

    it('selects a nominee', () => {
      expect(getNominee(state, nominee0.id)).to.eql(nominee0);
    });

    it('selects a nominator', () => {
      expect(getNominator(state, nominee0.id)).to.eql(nominator0);
    });
  });
});
