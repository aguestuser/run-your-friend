import React from 'react';
import ReactMarkdown from 'react-markdown';
import introText from '../text/splash-text.md';
import './SplashText.css';

const SplashText = () => 
  <div className="splash-text-container">
    <ReactMarkdown source={introText} />
  </div>;

export default SplashText;
