import React from 'react';

const GithubLink = () =>
  <div style={style}>
    <a href="https://github.com/aguestuser/run-your-friend">
      {'<source/>'}
    </a>
  </div>;

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};

export default GithubLink;
