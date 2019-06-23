import React from 'react'
import { NavLink } from 'react-router-dom'
import { signOutAction } from '../../../actions/redux-token-auth'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
     
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cars" className="nav-link">Cars</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/customers" className="nav-link">Customers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/drivers" className="nav-link">Drivers</NavLink>
          </li>
        </ul>
        <form className="form-inline mt-2 mt-md-0">
          <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => signOutAction() }>Log out</button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
