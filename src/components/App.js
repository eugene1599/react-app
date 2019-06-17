import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes'
import ReduxToastr from 'react-redux-toastr'

import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/App.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

import Navbar from './Shared/Navbar'
import ModalWindow from './Shared/ModalWindow/container'

function App() {
  return (
    <Router>
      <Navbar />
      <ModalWindow />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        preventDuplicates
        closeOnToastrClick />
      <main role="main" className="container" style={{ marginTop: '100px'}}>
        <Routes />
      </main>
    </Router>
  )
}

export default App;
