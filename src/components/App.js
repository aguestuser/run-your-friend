import React, {Component} from 'react';
import reducers from '../redux/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SplashPage from './SplashPage';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={createStore(reducers)}>
          <SplashPage/>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
