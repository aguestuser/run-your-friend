import React from 'react';
import ReactMarkdown from 'react-markdown';
import introText from '../text/landing-page.md';
import './SplashText.css';

const SplashText = () => 
  <div className="intro-container">
    <ReactMarkdown source={introText} />
  </div>;

export default SplashText;
