import chai, {expect} from 'chai';
import {createStore} from 'redux';
import reducers from '../../../src/redux/reducers/root';
import pledges from '../../../src/redux/reducers/pledges';
import {createPledge} from '../../../src/redux/actions/pledges';
import {pledge0} from '../../support/fixtures';

describe('pledge integration', () => {

  let store;
  
  describe('PLEDGE_CREATED', () => {

    beforeEach(() => {
      store = createStore(reducers);
      store.dispatch(createPledge(pledge0));
    });
    
    it('is handled by pledges reducer', () => {
      expect(store.getState().pledges).not.to.eql({});
    });
  });
});
