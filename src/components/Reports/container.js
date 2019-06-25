import React, { Component } from 'react'
import { connect } from 'react-redux'
import Reports from './Reports'
import * as actions from '../../actions/reports'
import MainLayout from '../MainLayout'

class ReportsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItems(this.props.match.params.race_id);
  }

  render () {
    return(
      <MainLayout>
        <Reports {...this.props} raceId={this.props.match.params.race_id}/>
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reports: state.reports.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllItems: (race_id) => dispatch(actions.fetchAllItems({race_id: race_id}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer)
