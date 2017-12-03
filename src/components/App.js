import React, {Component} from 'react';
import reducers from '../redux/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactMarkdown from 'react-markdown';
import NominationForm from './NominationForm';
import introText from '../text/landing-page.md';
import runner from '../img/running-person.gif';
import {times} from 'lodash';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Content/>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

const Content = () =>
  <div id="app-container">
    <Runners/>
    <div className="intro-container">
      <ReactMarkdown source={introText} />
    </div>
    <NominationForm onSubmit={console.log}/>
    <Runners/>
  </div>

const Runners = () =>
  <div className="runner-container">
    {times(10, n => <img className='runner'
                         src={runner}
                         key={n}
                         alt='running stick figure' />)}
  </div>

export default App;
