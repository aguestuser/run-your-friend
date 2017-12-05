import React from 'react';
import SplashText from './SplashText';
import NominationForm from './NominationForm';
import RunnerRow from './RunnerRow';
import GithubLink from './GithubLink';

const SplashPage = () =>
  <div>
    <RunnerRow/>
    <SplashText/>
    <RunnerRow/>
    <NominationForm/>
    <GithubLink/>
  </div>;

export default SplashPage;
