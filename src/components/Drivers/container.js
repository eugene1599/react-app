import React, { Component } from 'react'
import { connect } from 'react-redux'
import Drivers from './Drivers'
import { fetchAllItems, deleteItem } from '../../actions/drivers'
import MainLayout from '../MainLayout'

class DriversContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItems()
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

const mapDispatchToProps = {
    fetchAllItems,
    deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(DriversContainer)
