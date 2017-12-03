import chai, {expect} from 'chai';
import {createStore} from 'redux';
import reducers from '../../../src/redux/reducers/root';
import nominees from '../../../src/redux/reducers/nominees';
import {createNominee} from '../../../src/redux/actions/nominees';
import {nominee0} from '../../support/fixtures';

describe('nominee integration', () => {

  let store;
  
  describe('NOMINEE_CREATED', () => {

    beforeEach(() => {
      store = createStore(reducers);
      store.dispatch(createNominee(nominee0));
    });
    
    it('is handled by nominees reducer', () => {
      expect(store.getState().nominees).not.to.eql({});
    });
  });
});
