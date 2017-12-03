import {expect} from 'chai';
import {actionTypes} from '../../../src/redux/actions/nominators';
import nominators from '../../../src/redux/reducers/nominators';
import {nominator0, nominator1} from '../../support/fixtures';

describe('nominators reducer', () => {

  it('defaults to an empty object', () => {
    expect(nominators()).to.eql({});
  });

  it('adds a nominator to an empty treee', () => {
    expect(nominators({}, {
      type: actionTypes.NOMINATOR_CREATED,
      payload: nominator0
    })).to.eql({
      [nominator0.id]: nominator0
    });
  });

  it('adds a nominator to a non-empty treee', () => {
    expect(nominators(
      {
        [nominator0.id]: nominator0
      },
      {
        type: actionTypes.NOMINATOR_CREATED,
        payload: nominator1
      }
    )).to.eql({
      [nominator0.id]: nominator0,
      [nominator1.id]: nominator1,
    });
  });
});
