import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SplashPage from './SplashPage';
import NomineePage from './NomineePage';

export default () =>
  <Router>
    <div>
      <Route exact path="/" component={SplashPage}/>
      <Route path="/nominees/:id" component={NomineePage}/>
    </div>
  </Router>
