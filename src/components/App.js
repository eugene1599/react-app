import React from 'react';
import { Router } from 'react-router-dom';
import Routes from '../routes'
import ReduxToastr from 'react-redux-toastr'
import history from '../utils/history'

import ModalWindow from './Shared/ModalWindow/container'

import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/App.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'



function App(propr) {
  return (
    <Router history={history}>
      <ModalWindow />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        preventDuplicates
        closeOnToastrClick />
      <Routes />
    </Router>
  )
}

export default App;
