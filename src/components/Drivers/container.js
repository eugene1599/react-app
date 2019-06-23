import React, { Component } from 'react'
import { connect } from 'react-redux'
import Drivers from './Drivers'
import * as actions from '../../actions/drivers'
import MainLayout from '../MainLayout'

class DriversContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  render () {
    return(
      <MainLayout>
        <Drivers {...this.props} />
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drivers: state.drivers.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllItems: () => dispatch(actions.fetchAllItems()),
    deleteItem: (id) => dispatch(actions.deleteItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DriversContainer)
