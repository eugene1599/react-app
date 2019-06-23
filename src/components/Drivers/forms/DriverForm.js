import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../../actions/drivers'
import { connect } from 'react-redux'

class DriverForm extends Component {
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
            <label>Driver type</label>
            <Field className="form-control" name="driver_type" component="select">
              <option />
              <option value="driver">driver</option>
              <option value="mechanic">mechanic</option>
              <option value="forwarder">forwarder</option>
            </Field>
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

DriverForm = reduxForm({
  form: 'driver_form',
  enableReinitialize: true
})(DriverForm);

export default connect(null, mapDispatchToProps)(DriverForm)
