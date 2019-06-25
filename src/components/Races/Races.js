import React, { Component } from 'react'
import { modal } from '../../helpers'
import { Link } from 'react-router-dom'
import selector from '../../store/races/selector'

class Races extends Component {
  showList() {
    const { customers } = this.props

    return this.props.races.map(item =>
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{selector.getCustomerFullNameById(customers, item.customer_id)}</td>
        <td>{item.cargo_weight}</td>
        <td>{(new Date(item.start_date)).toLocaleString()}</td>
        <td>{(new Date(item.end_date)).toLocaleString()}</td>
        <td>{item.race_price}</td>
        <td>
          <Link to={"/races/" + item.id + "/reports"} className="btn btn-light btn-sm">reports</Link>
          <button onClick={() => modal.showModal({modalTitle: 'Edit', resource: { name: 'races', id: item.id }})}>edit</button>
          <button onClick={() => this.props.deleteItem({id: item.id})}>delete</button>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <h2>Races</h2>
        <button onClick={() => modal.showModal({modalTitle: 'Create new', resource: { name: 'races' }})}>new</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer</th>
              <th scope="col">Cargo weight</th>
              <th scope="col">Start date</th>
              <th scope="col">End date</th>
              <th scope="col">Race price</th>
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

export default Races
