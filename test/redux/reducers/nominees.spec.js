import {expect} from 'chai';
import {actionTypes} from '../../../src/redux/actions/nominees';
import nominees, {getNominee, getNominator, getSupporters, getBackers} from '../../../src/redux/reducers/nominees';
import { nominee0,
         nominee1,
         nominator0,
         nominator1,
         nomination0,
         supporter0,
         supporter1,
         pledge0,
         pledge1,
       } from '../../support/fixtures';

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
      },
      supporters: {
        [supporter0.id]: supporter0,
        [supporter1.id]: supporter1,
      },
      pledges: {
        [pledge0.id]: pledge0,
        [pledge1.id]: pledge1,
      }
    };

    it('selects a nominee', () => {
      expect(getNominee(state, nominee0.id)).to.eql(nominee0);
    });

    it('selects the nominator of a nominee', () => {
      expect(getNominator(state, nominee0.id)).to.eql(nominator0);
    });

    it('selects supporters of a nominee (incl nominator)', () => {
      expect(getSupporters(state, nominee0.id)).to.eql([
        supporter0,
        supporter1,
      ]);
    });

    it('selects all backers (nominator and supporters) of a nominee', () => {
      expect(getBackers(state, nominee0.id)).to.eql([
        nominator0,
        supporter0,
        supporter1,
      ]);
    });
  });
});
