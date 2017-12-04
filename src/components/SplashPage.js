import React from 'react';
import SplashText from './SplashText';
import NominationForm from './NominationForm';
import Runners from './Runners';

const NUM_RUNNERS = 10;
const RUNNER_HEIGHT = 8;

const SplashPage = () =>
  <div>
    <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
    <SplashText/>
    <NominationForm/>
    <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
  </div>;

export default SplashPage;
