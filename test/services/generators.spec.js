import {expect} from 'chai';
import {generateId} from '../../src/services/generators';

describe('generators module', () => {

  const isUuid = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

  it('generates a uuid', () => {
    expect(generateId().match(isUuid)).to.exist;
  });
});
