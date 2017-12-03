
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
export const parseNominationPayload = submission => ({
  nominee: {
    name:        submission.nomineeName,
    email:       submission.nomineeEmail,
    description: submission.nomineeDescription,
  },
  nominator: {
    name:        submission.nominatorName,
    email:       submission.nominatorEmail,
    description: submission.nominatorDescription,
  },
});
