import React, { Component } from 'react'
import { connect } from 'react-redux'
import Customers from './Customers'
import * as actions from '../../actions/customers'
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

const mapDispatchToProps = dispatch => {
  return {
    fetchAllItems: () => dispatch(actions.fetchAllItems()),
    deleteItem: (id) => dispatch(actions.deleteItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersContainer)
