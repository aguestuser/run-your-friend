import {expect} from 'chai';
import {actionTypes, createNominator} from '../../../src/redux/actions/nominators';
import {nominator0} from '../../support/fixtures';

describe('nominator actions module', () => {

  it('creates a nominator', () => {
    expect(createNominator(nominator0)).to.eql({
      type: actionTypes.NOMINATOR_CREATED,
      payload: nominator0,
    });
  });
});
