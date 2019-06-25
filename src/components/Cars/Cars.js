import React, { Component } from 'react'
import { modal } from '../../helpers'

class Cars extends Component {
  showList() {
    return this.props.cars.map(item =>
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{(new Date(item.created_at)).toLocaleString()}</td>
        <td>
          <button onClick={() => modal.showModal({modalTitle: 'Edit item', resource: { name: 'cars', id: item.id }})}>edit</button>
          <button onClick={() => this.props.deleteItem({id: item.id})}>delete</button>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <h2>Cars</h2>
        <button onClick={() => modal.showModal({modalTitle: 'Create car', resource: { name: 'cars' }})}>new car</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
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

export default Cars
