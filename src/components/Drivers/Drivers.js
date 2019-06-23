import React, { Component } from 'react'
import { modal } from '../../helpers'

class Drivers extends Component {
  showList() {
    return this.props.drivers.map(item =>
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.driver_type}</td>
        <td>{(new Date(item.created_at)).toLocaleString()}</td>
        <td>
          <button onClick={() => modal.showModal({modalTitle: 'Edit', resource: { name: 'drivers', id: item.id }})}>edit</button>
          <button onClick={() => this.props.deleteItem(item.id)}>delete</button>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <h2>Drivers</h2>
        <button onClick={() => modal.showModal({modalTitle: 'Create new', resource: { name: 'drivers' }})}>new</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Driver type</th>
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

export default Drivers
