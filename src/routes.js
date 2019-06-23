import React from 'react';
import { Route } from 'react-router-dom';

import { requireSignIn } from './helpers/Auth'
import SignInPage from './components/Auth/SignInPage'
import SignUpPage from './components/Auth/SignUpPage'

import Home from './components/Home';
import Cars from './components/Cars';
import Customers from './components/Customers';
import Drivers from './components/Drivers';
import Races from './components/Races';

function Routes() {
  return (
    <React.Fragment>
      <Route path="/" exact component={requireSignIn(Home)} />
      <Route path="/cars" component={requireSignIn(Cars)} />
      <Route path="/customers" component={requireSignIn(Customers)} />
      <Route path="/drivers" component={requireSignIn(Drivers)} />
      <Route path="/races" component={requireSignIn(Races)} />
    
      <Route path="/login" component={SignInPage} />
      <Route path="/register" component={SignUpPage} />
    </React.Fragment>
  )
}

export default Routes;
