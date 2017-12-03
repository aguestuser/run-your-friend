import {expect} from 'chai';
import {isRequired, isEmail} from '../../src/services/validations';

describe('validations module', () => {

  it('validates a required field', () => {
    expect(isRequired('foo')).to.be.undefined;
    expect(isRequired(null)).to.eql('Required');
  });

  it('validates an email field', () => {
    expect(isEmail('foo@riseup.net')).to.be.undefined;
    expect(isEmail('foo@bar')).to.eql('Invalid email');
  });
});
