/* NOMINEES */

export const nominee0 = {
  id: 'fakeId0',
  name: 'Foo Bar',
  email: 'foo@riseup.net',
  description: 'Foo should run because they build consensus well.',
};

export const nominee1 = {
  id: 'fakeId1',
  name: 'Bar Baz',
  email: 'bar@riseup.net',
  description: 'Bar should run because they are a good listener.',
};

export const nominees = {
  fakeId0: nominee0,
  fakeId1: nominee1,
};


/* NOMINEES */

export const nominator0 = {
  id: 'fakeId2',
  name: 'Foo Bar',
  email: 'foo@riseup.net',
  description: 'Foo should run because they build consensus well.',
};

export const nominator1 = {
  id: 'fakeId3',
  name: 'Bar Baz',
  email: 'bar@riseup.net',
  description: 'Bar should run because they are a good listener.',
};

export const nominators = {
  fakeId2: nominator0,
  fakeId3: nominator1,
};

/* NOMINATIONS */

export const nomination0 = {
  id: 'fakeId4',
  nomineeId: nominee0.id,
  nominatorId: nominator0.id,
};

export const nomination1 = {
  id: 'fakeId5',
  nomineeId: nominee1.id,
  nominatorId: nominator1.id,
};

export const nominations = {
  fakeId4: nomination0,
  fakeId5: nomination1,
};

