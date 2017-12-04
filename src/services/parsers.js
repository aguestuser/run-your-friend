import {times} from 'lodash';

/**TYPES

type NominationSubmission = {
  nomineeName: string,
  nomineeEmail: string,
  nomineeDescription: string,
  nominatorName: string,
  nominatorEmail: string,
  nominatorDescription: string,
};

type Person = {
  id:          string,
  name:        string,
  email:       string,
  description: string,
}

type NominationPayload = {
  nominee:   Person,
  nominator: Person,
}
*/

// NominationSubmission -> NominationPayload
export const parseNominationPayload = (submission, generateId) => {
  const ids = times(3, generateId);
  return {
    nominee: {
      id:          ids[0],
      name:        submission.nomineeName,
      email:       submission.nomineeEmail,
      description: submission.nomineeDescription,
    },
    nominator: {
      id:          ids[1],
      name:        submission.nominatorName,
      email:       submission.nominatorEmail,
      description: submission.nominatorDescription,
    },
    nomination: {
      id:          ids[2],
      nomineeId:   ids[0],
      nominatorId: ids[1],
    }
  };
};
