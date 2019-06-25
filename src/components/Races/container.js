import React, { Component } from 'react'
import { connect } from 'react-redux'
import Races from './Races'
import * as actions from '../../actions/races'
import MainLayout from '../MainLayout'
import * as actionsCustomers from '../../actions/customers'

class RacesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItems()
    this.props.fetchAllCustomers()
  }

  render () {
    return(
      <MainLayout>
        <Races {...this.props} />
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    races: state.races.items,
    customers: state.customers.items
  }
}
const mapDispatchToProps = {
  fetchAllItems: actions.fetchAllItems,
  fetchAllCustomers: actionsCustomers.fetchAllItems,
  deleteItem: actions.deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(RacesContainer)
