import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown';
import landingPageText from './text/landing-page.md';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Run your friend for office!</h1>
        </header>
        <ReactMarkdown source={landingPageText} />
      </div>
    );
  }
}

export default App;
