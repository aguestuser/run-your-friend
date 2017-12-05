export const row = {
  display: 'flex',
  flexDirection: 'row',
};

export const rowContents = {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  flexWrap: 'wrap',
  padding: '.5em',
};

export const blackRowContents = {
  ...rowContents,
  color: 'white',
  backgroundColor: 'black',
  fontSize: '1.2em',
  fontWeight: 'bold',
  textAlign: 'center',
};

export const whiteRowContents = {
  ...rowContents,
  fontSize: '.8em',
  padding: '2em'
};

export default {
  row,
  blackRowContents,
  whiteRowContents,
};
