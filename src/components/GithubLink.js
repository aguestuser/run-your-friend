import React from 'react';
import {pink} from '../constants/colors';

const GithubLink = () =>
  <div style={style}>
    <a href="https://github.com/aguestuser/run-your-friend">
      {'............<source/>............'}
    </a>
  </div>;

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: pink,
  marginBottom: '1.5em',
};

export default GithubLink;
