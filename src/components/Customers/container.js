import React, { Component } from 'react'
import { connect } from 'react-redux'
import Customers from './Customers'
import { fetchAllItems, deleteItem } from '../../actions/customers'
import MainLayout from '../MainLayout'

class CustomersContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  render () {
    return(
      <MainLayout>
        <Customers {...this.props} />
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    customers: state.customers.items
  }
}

const mapDispatchToProps = {
  fetchAllItems,
  deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersContainer)
