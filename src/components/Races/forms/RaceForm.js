import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../../actions/races'
import * as actionsCars from '../../../actions/cars'
import * as actionsCustomers from '../../../actions/customers'
import * as actionsDrivers from '../../../actions/drivers'
import { connect } from 'react-redux'

class RaceForm extends Component {
  componentDidMount() {
    this.props.fetchAllCars()
    this.props.fetchAllCustomers()
    this.props.fetchAllDrivers()
  }

  carsOptions() {
    return this.props.cars.map(item =>
      <option value={item.id} key={item.id}>#{item.id} - {item.name}</option>
    )
  }

  customersOptions() {
    return this.props.customers.map(item =>
      <option value={item.id} key={item.id}>#{item.id} - {item.first_name} {item.last_name}</option>
    )
  }

  driversOptions() {
    return this.props.drivers.map(item =>
      <option value={item.id} key={item.id}>#{item.id} - {item.first_name} {item.last_name}</option>
    )
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Car</label>

          <Field className="form-control" name="race[car_id]" component="select">
            <option />
            {this.carsOptions()}
          </Field>
        </div>
        <div className="form-group">
          <label>Drives</label>

          <Field className="form-control" name="race[driver_ids]" type="select-multiple" component="select" multiple>
            <option />
            {this.driversOptions()}
          </Field>
        </div>
        <div className="form-group">
          <label>Customer</label>
          <Field className="form-control" name="race[customer_id]" component="select">
            <option />
            {this.customersOptions()}>
          </Field>
        </div>

        <div className="form-group">
          <label>Cargo weight</label>
          <Field
            name="race[cargo_weight]"
            component="input"
            type="number"
            className="form-control"
            placeholder="f.e 100"
          />
        </div>
        <div className="form-group">
          <label>Race price</label>
          <Field
            name="race[race_price]"
            component="input"
            type="number"
            className="form-control"
            placeholder="0.00"
          />
        </div>
        <div className="form-group">
          <label>Start date</label>
          <Field
            name="race[start_date]"
            component="input"
            type="date"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>End date</label>
          <Field
            name="race[end_date]"
            component="input"
            type="date"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  fetchAllCars: actionsCars.fetchAllItems,
  fetchAllCustomers: actionsCustomers.fetchAllItems,
  fetchAllDrivers: actionsDrivers.fetchAllItems
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars.items,
    customers: state.customers.items,
    drivers: state.drivers.items
  }
}

RaceForm = reduxForm({
  form: 'race_form',
  enableReinitialize: true,
  onSubmit: (values, dispatch) => {
    if(values.id) {
      dispatch(actions.updateItem(values))
    } else {
      dispatch(actions.createItem(values))
    }
  }
})(RaceForm)

export default connect(mapStateToProps, mapDispatchToProps)(RaceForm)
