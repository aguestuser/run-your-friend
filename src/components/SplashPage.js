import React from 'react';
import SplashText from './SplashText';
import NominationForm from './NominationForm';
import Runners from './Runners';
import GithubLink from './GithubLink';

const NUM_RUNNERS = 10;
const RUNNER_HEIGHT = 8;

const SplashPage = () =>
  <div>
    <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
    <SplashText/>
    <NominationForm/>
    <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
    <GithubLink/>
  </div>;

export default SplashPage;
