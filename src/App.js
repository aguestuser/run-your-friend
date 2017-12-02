import React, { Component } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import introText from './text/landing-page.md';
const runners = [1,2,3,4,5,6].map(n => require(`./img/running-man-${n}.gif`))

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <div className="runner-container">
          {[0,1,2,3,4,5,6,7,8,9,10].map(runner => <img src={runners[0]}/>)}
        </div>
        <div className="intro-container">
          <ReactMarkdown source={introText} />
        </div>
        <div className="runner-container">
          {[0,1,2,3,4,5,6,7,8,9,10].map(runner => <img src={runners[0]}/>)}
        </div>
      </div>
    );
  }
}

export default App;
