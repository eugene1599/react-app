import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { requireSignIn, requireLogOut } from './helpers/Auth'
import SignInPage from './components/Auth/SignInPage'
import SignUpPage from './components/Auth/SignUpPage'
import NoMatch from './components/Shared/NoMatch'

import Home from './components/Home'
import Cars from './components/Cars'
import Customers from './components/Customers'
import Drivers from './components/Drivers'
import Races from './components/Races'
import Reports from './components/Reports'

function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={requireSignIn(Home)} />
        <Route path="/cars" component={requireSignIn(Cars)} />
        <Route path="/customers" component={requireSignIn(Customers)} />
        <Route path="/drivers" component={requireSignIn(Drivers)} />
        <Route path="/races" exact component={requireSignIn(Races)} />
        <Route path="/races/:race_id/reports" component={requireSignIn(Reports)} />

        <Route path="/login" component={requireLogOut(SignInPage)} />
        <Route path="/register" component={requireLogOut(SignUpPage)} />
        <Route component={NoMatch} />
      </Switch>
    </React.Fragment>
  )
}

export default Routes
