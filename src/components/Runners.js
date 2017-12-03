import React from 'react';
import runner from '../img/running-person.gif';
import {times} from 'lodash';

const Runners = () =>
  <div style={styles.container}>
    {times(10, n =>
      <img style={styles.runner}
           src={runner}
           key={n}
           alt='running stick figure' />)}
  </div>

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '10em',
  },
  runner: {
    display: 'flex',
    width: '20em',
  },
}

export default Runners;
