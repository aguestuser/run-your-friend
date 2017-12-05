import React from 'react';
import runner from '../img/running-person-still-180-pink.png';
import {row, blackRowContents} from '../styles/row';

const RunnerRow = () => 
  <div style={row}>
    <div style={blackRowContents}>
      <img src={runner} height="50em" width="50em"/>
    </div>
  </div>;

export default RunnerRow;
