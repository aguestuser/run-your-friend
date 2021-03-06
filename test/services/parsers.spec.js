import {expect} from 'chai';
import {parseNominationPayload, parseSupporterPayload} from '../../src/services/parsers';
import {generateFakeId} from '../support/fakes';

describe('parsers module', () => {

  it('parses nomination payload from form submission', () => {
    const formSubmission = {
      nomineeName:          "Foo",
      nomineeEmail:         "foo@riseup.net",
      nomineeDescription:   "Foo should run because they're an excellent judge of character.",
      nominatorName:        "Bar",
      nominatorEmail:       "bar@riseup.net",
      nominatorDescription: "I would phonebank and help set up the campaign CMS.",
    };

    expect(parseNominationPayload(formSubmission, generateFakeId)).to.eql({
      nominee: {
        id:          "fakeId0",
        name:        "Foo",
        email:       "foo@riseup.net",
        description: "Foo should run because they're an excellent judge of character.",
      },
      nominator: {
        id:          "fakeId1",
        name:        "Bar",
        email:       "bar@riseup.net",
        description: "I would phonebank and help set up the campaign CMS.",
      },
      nomination: {
        id: "fakeId2",
        nomineeId: "fakeId0",
        nominatorId: "fakeId1",
      }
    });
  });

  it('parses supporter payload from form submission', () => {

    const formInput = {
      name:        'Baz',
      email:       'baz@riseup.net',
      description: 'I would do doorknocking and canvassing work.'
    };

    expect(parseSupporterPayload(formInput, generateFakeId)).to.eql({
      id:          'fakeId3',
      name:        'Baz',
      email:       'baz@riseup.net',
      description: 'I would do doorknocking and canvassing work.'
    });
  });
});










