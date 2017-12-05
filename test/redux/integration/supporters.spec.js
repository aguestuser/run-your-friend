import chai, {expect} from 'chai';
import {createStore} from 'redux';
import reducers from '../../../src/redux/reducers/root';
import supporters from '../../../src/redux/reducers/supporters';
import {createSupporter} from '../../../src/redux/actions/supporters';
import {supporter0} from '../../support/fixtures';

describe('supporter integration', () => {

  let store;
  
  describe('SUPPORTER_CREATED', () => {

    beforeEach(() => {
      store = createStore(reducers);
      store.dispatch(createSupporter(supporter0));
    });
    
    it('is handled by supporters reducer', () => {
      expect(store.getState().supporters).not.to.eql({});
    });
  });
});
