import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cars from './Cars'
import { fetchAllItems, deleteItem } from '../../actions/cars'
import MainLayout from '../MainLayout'

class CarsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  render () {
    return(
      <MainLayout>
        <Cars {...this.props} />
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars.items
  }
}

const mapDispatchToProps =  {
  fetchAllItems,
  deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer)
