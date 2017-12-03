let idCount = -1;

export const generateFakeId = () => {
  idCount = idCount + 1;
  return `fakeId${idCount}`;
};
