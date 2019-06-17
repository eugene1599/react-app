import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home/index';
import CarsList from './components/Cars';
import CustomersList from './components/Customers/CustomersList';

function Routes() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/cars" component={CarsList} />
      <Route path="/customers" component={CustomersList} />
    </React.Fragment>
  )
}

export default Routes;
