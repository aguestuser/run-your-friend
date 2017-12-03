import {expect} from 'chai';
import reducer from '../../../src/redux/reducers/root';

describe('root reducer', () => {

  it('defaults to empty state tree', () => {
    expect(reducer()).to.eql({
      form: {},
      nominees: {},
    });
  });
});
