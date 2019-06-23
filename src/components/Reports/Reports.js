import React, { Component } from 'react'
import { modal } from '../../helpers'

class Reports extends Component {
  showList() {
    return this.props.reports.map((item, index) =>
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td>{item.mileage}</td>
        <td>{item.fuel}</td>
        <td>{item.fuel_cost}</td>
        <td>{(new Date(item.created_at)).toLocaleString()}</td>
        <td>
          <button onClick={() => modal.showModal({modalTitle: 'Edit', resource: { name: 'reports', id: item.id, race_id: this.props.raceId }})}>edit</button>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <h2>Reports</h2>
        <button onClick={() => modal.showModal({modalTitle: 'Create new', resource: { name: 'reports', race_id: this.props.raceId }})}>new</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mileage</th>
              <th scope="col">Fuel</th>
              <th scope="col">Fuel cost</th>
              <th scope="col">Created at</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.showList()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Reports
