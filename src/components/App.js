import React, {Component} from 'react';
import reducers from '../redux/reducers/root';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={createStore(reducers)}>
          <Routes/>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
