import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../../actions/reports'
import { connect } from 'react-redux'

class ReportForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Mileage</label>
          <Field
            name="mileage"
            component="input"
            type="number"
            className="form-control"
            placeholder="mileage"
          />
        </div>
        <div className="form-group">
          <label>Fuel</label>
          <Field
            name="fuel"
            component="input"
            type="number"
            className="form-control"
            placeholder="Fuel"
          />
        </div>
        <div className="form-group">
          <label>Fuel cost</label>
          <Field
            name="fuel_cost"
            component="input"
            type="number"
            className="form-control"
            placeholder="0.00"
          />
        </div>

        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  let form = {}
  if(state.form['report_form']){
    form = {
      initialValues: {
        ...state.form.report_form.values, race_id: state.modal.resource.race_id
      }
    }
  }

  return {
    ...form,
    race_id: state.modal.resource.race_id,
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

ReportForm = reduxForm({
  form: 'report_form',
  enableReinitialize: true,
})(ReportForm)

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm)
