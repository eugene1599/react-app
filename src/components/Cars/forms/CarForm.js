import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../../actions/cars'
import { connect } from 'react-redux'

class CarForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            className="form-control"
            placeholder="Car name"
          />
          <div className="form-group">
            <label>Car type</label>
            <Field className="form-control" name="car_type" component="select">
              <option />
              <option value="truck">truck</option>
              <option value="bus">bus</option>
            </Field>
          </div>
        </div>
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

CarForm = reduxForm({
  form: 'car_form',
  enableReinitialize: true
})(CarForm);

export default connect(null, mapDispatchToProps)(CarForm)
