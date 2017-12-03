import React from 'react';
import SplashText from './SplashText';
import NominationForm from './NominationForm';
import Runners from './Runners';

const SplashPage = () =>
  <div>
    <Runners/>
    <SplashText/>
    <NominationForm/>
    <Runners/>
  </div>;

export default SplashPage;
