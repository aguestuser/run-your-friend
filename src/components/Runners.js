import React from 'react';
import runner from '../img/running-person.gif';
import {times} from 'lodash';

const Runners = ({number, height}) =>
  <div style={styles.container(height)}>
    {times(number, n =>
      <img style={styles.runner(height)}
           src={runner}
           key={n}
           alt='running person' />)}
  </div>

const styles = {
  container: height => ({
    display: 'flex',
    flexDirection: 'row',
    height: `${height}em`,
    zIndex: -1,
  }),
  runner: height => ({
    display: 'flex',
    height: `${height}em`,
  }),
}

export default Runners;
