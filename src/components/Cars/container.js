import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cars from './Cars'
import * as actions from '../../actions/cars'
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

const mapDispatchToProps = dispatch => {
  return {
    fetchAllItems: () => dispatch(actions.fetchAllItems()),
    deleteItem: (id) => dispatch(actions.deleteItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer)
