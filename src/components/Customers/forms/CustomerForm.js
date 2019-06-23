import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../../actions/customers'
import { connect } from 'react-redux'

class CustomerForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <Field
            name="first_name"
            component="input"
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <Field
            name="last_name"
            component="input"
            type="text"
            className="form-control"
            placeholder="Last name"
          />
        </div>
        <div className="form-group">
          <label>Company</label>
          <Field
            name="company"
            component="input"
            type="text"
            className="form-control"
            placeholder="Last name"
          />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: values => {
    if(values.id) {
      dispatch(actions.updateItem(values))
    } else {
      dispatch(actions.createItem(values))
    }
  }
})

CustomerForm = reduxForm({
  form: 'customer_form',
  enableReinitialize: true
})(CustomerForm);

export default connect(null, mapDispatchToProps)(CustomerForm)
