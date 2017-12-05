import React from 'react';
import SplashText from './SplashText';
import NominationForm from './NominationForm';
import Runners from './Runners';
import GithubLink from './GithubLink';
import {row, blackRowContents} from '../styles/row';

const NUM_RUNNERS = 10;
const RUNNER_HEIGHT = 8;

const SplashPage = () =>
  <div style={{marginTop: '-1.3em'}}>
    <SplashText/>
    <NominationForm/>
    <GithubLink/>
  </div>;

export default SplashPage;
