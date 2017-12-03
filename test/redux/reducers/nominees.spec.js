import {expect} from 'chai';
import nominees from '../../../src/redux/reducers/nominees';

describe('nominees reducer', () => {

  const nominee = {
    id: 'fakeId',
    name: 'Foo Bar',
    email: 'foo@riseup.net',
    description: 'Foo should run because they build consensus well.',
  };

  it('defaults to an empty object', () => {
    expect(nominees()).to.eql({});
  });

  it('adds a nominee', () => {
    expect(nominees({}, {
      type: 'NOMINEE_ADDED',
      payload: nominee
    })).to.eql({
      fakeId: nominee
    });
  });
});
