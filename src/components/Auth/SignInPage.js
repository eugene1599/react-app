import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInUser } from '../../actions/redux-token-auth'
import { Field, reduxForm } from 'redux-form';
import { toastr } from '../../helpers'
import AuthLayout from './AuthLayout'
import { Link } from 'react-router-dom'
// import { refreshAxiosHeaders } from '../../utils/axios'

class SignInPage extends Component {
  submitForm ({ email, password}) {
    const { signInUser } = this.props
    signInUser({ email, password }) 
      .then( () => {
        // this.setState({ successRedirect: true })
        this.props.history.push('/')
        // refreshAxiosHeaders();
        window.location.reload(); // i don't know how to fix this
        //when user logged in it stays unlogged (i think we need to update axios config dynamycally?)
        // toastr.success('Hello user!')
      })
      .catch( () => { toastr.error('Error', 'Invalid email or password') })
  }

  render () {
    const { handleSubmit } = this.props;

    return (
      <AuthLayout>
        <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
          <div className="form-group">
            <label>Email</label>
            <Field type="text" name="email" className="form-control" component="input" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <Field type="password" name="password" className="form-control" component="input" />
          </div>
          <button className="btn btn-primary">Login</button>
          <Link className="btn" to='/register'>Create new account</Link>
        </form>
      </AuthLayout>
    )
  }
}

SignInPage = reduxForm({
  form: 'sign_in_form'
})(SignInPage);


export default connect(null, { signInUser })(SignInPage)
