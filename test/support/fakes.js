let idCount = -1;

export const generateFakeId = () => {
  // NOTE: yes, i know, this could lead to non-deterministic tests.
  // would come up with something more elegant for a long term project. :) (@aguestuer)
  idCount = idCount + 1;
  return `fakeId${idCount}`;
};
