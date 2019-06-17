import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cars from './Cars'
import * as actions from '../../actions/cars'

class CarsList extends Component {
  componentDidMount() {
    this.props.fetchAllCars();
  }

  render () {
    return(
      <Cars {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars.cars
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCars: () => dispatch(actions.fetchAllCars()),
    deleteCar: (id) => dispatch(actions.deleteCar(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsList)
