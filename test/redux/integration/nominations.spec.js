import chai, {expect} from 'chai';
import {createStore} from 'redux';
import reducers from '../../../src/redux/reducers/root';
import nominations from '../../../src/redux/reducers/nominations';
import {createNomination} from '../../../src/redux/actions/nominations';
import {nomination0} from '../../support/fixtures';

describe('nomination integration', () => {

  let store;
  
  describe('NOMINATION_CREATED', () => {

    beforeEach(() => {
      store = createStore(reducers);
      store.dispatch(createNomination(nomination0));
    });
    
    it('is handled by nominations reducer', () => {
      expect(store.getState().nominations).not.to.eql({});
    });
  });
});
