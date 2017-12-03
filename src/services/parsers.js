
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
export const parseNominationPayload = (submission, generateId) => ({
  nominee: {
    id:          generateId(),
    name:        submission.nomineeName,
    email:       submission.nomineeEmail,
    description: submission.nomineeDescription,
  },
  nominator: {
    id:          generateId(),
    name:        submission.nominatorName,
    email:       submission.nominatorEmail,
    description: submission.nominatorDescription,
  },
});
