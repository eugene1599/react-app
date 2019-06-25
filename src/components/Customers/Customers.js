import React, { Component } from 'react'
import { modal } from '../../helpers'

class Customers extends Component {
  showList() {
    return this.props.customers.map(item =>
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.company}</td>
        <td>{(new Date(item.created_at)).toLocaleString()}</td>
        <td>
          <button onClick={() => modal.showModal({modalTitle: 'Edit', resource: { name: 'customers', id: item.id }})}>edit</button>
          <button onClick={() => this.props.deleteItem({id: item.id})}>delete</button>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <button onClick={() => modal.showModal({modalTitle: 'Create new', resource: { name: 'customers' }})}>new</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Company</th>
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

export default Customers
