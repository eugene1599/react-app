import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/redux-token-auth'
import { Field, reduxForm } from 'redux-form';
import { toastr } from '../../helpers'
import AuthLayout from './AuthLayout'
import { Link } from 'react-router-dom'

class SignUpPage extends Component {
  submitForm ({ email, password, passwordConfirmation }) {
    if(password != passwordConfirmation){
      return toastr.error('Error', 'Passwords not the same')
    }

    const { registerUser } = this.props
    registerUser({ email, password, passwordConfirmation })
      .then( () => {
        toastr.success('Success!', 'User has been created')
        this.props.history.push('/login') 
      })
      .catch( (error) => {
        let message = 'Check your email or password'
        try {
          message =  error.response.data.errors.full_messages[0]
        } catch(e) {}
        finally {
          toastr.error('Error', message) 
        }
      })
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
          <div className="form-group">
            <label>Password confirmation</label>
            <Field type="password" name="passwordConfirmation" className="form-control" component="input" />
          </div>
          <button className="btn btn-primary">Register</button>
          <Link className="btn" to='/login'>Log in</Link>
        </form>
      </AuthLayout>
    )
  }
}

SignUpPage = reduxForm({
  form: 'sign_up_form'
})(SignUpPage);


export default connect(null, { registerUser })(SignUpPage)
