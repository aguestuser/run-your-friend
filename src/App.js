import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown';
import landingPageText from './text/landing-page.md';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <header className="header">
          <h1 className="title">Run your friend for office!</h1>
        </header>
        <div className="contents-container">
          <ReactMarkdown source={landingPageText} />
        </div>
      </div>
    );
  }
}

export default App;
