import {expect} from 'chai';
import {createStore} from 'redux';
import reducers from '../../../src/redux/reducers/root';
import nominators from '../../../src/redux/reducers/nominators';
import {createNominator} from '../../../src/redux/actions/nominators';
import {nominator0} from '../../support/fixtures';

describe('nominator integration', () => {

  let store;

  describe('NOMINATOR_CREATED', () => {

    beforeEach(() => {
      store = createStore(reducers);
      store.dispatch(createNominator(nominator0));
    });

    it('is handled by nominators reducer', () => {
      expect(store.getState().nominators).not.to.eql({});
    });
  });
});
