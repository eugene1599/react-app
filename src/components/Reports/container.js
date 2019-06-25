import React, { Component } from 'react'
import { connect } from 'react-redux'
import Reports from './Reports'
import { fetchAllItems } from '../../actions/reports'
import MainLayout from '../MainLayout'

class ReportsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItems({ race_id: this.props.match.params.race_id });
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

const mapDispatchToProps = {
  fetchAllItems
}
export default connect(mapStateToProps, mapDispatchToProps)(ReportsContainer)
