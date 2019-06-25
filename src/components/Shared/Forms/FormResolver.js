import React, { Component } from 'react'
import { connect } from 'react-redux'
import CarForm from '../../Cars/forms'
import CustomerForm from '../../Customers/forms'
import DriverForm from '../../Drivers/forms'
import RaceForm from '../../Races/forms'
import ReportForm from '../../Reports/forms'
import resourceFinder from '../../../helpers/resourceFinder'

class FormResolver extends Component {
  render () {
    const { modal } = this.props
    const components = {
      cars: CarForm,
      customers: CustomerForm,
      drivers: DriverForm,
      races: RaceForm,
      reports: ReportForm
    }
    const FormName = components[modal.resource.name || 'cars']

    return <FormName initialValues={this.props.initialValues} />
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    initialValues: resourceFinder(state, state.modal.resource)
  }
}

export default connect(mapStateToProps)(FormResolver)
