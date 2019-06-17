import React, { Component } from 'react';
import { connect } from 'react-redux'
import CarForm from '../../Cars/forms'
import resourceFinder from '../../../helpers/resourceFinder'

class FormResolver extends Component {
  render () {
    return(
      <CarForm initialValues={this.props.initialValues} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    formName: state.modal.formName,
    initialValues: resourceFinder(state, state.modal.resource)
  }
}

export default connect(mapStateToProps)(FormResolver)
