import React, { Component } from 'react'
import { modal } from '../../helpers'

class Cars extends Component {
  showList() {
    return this.props.cars.map(car =>
      <tr key={car.id}>
        <td>{car.id}</td>
        <td>{car.name}</td>
        <td>{(new Date(car.created_at)).toLocaleString()}</td>
        <td>
          <button onClick={() => modal.showModal({modalTitle: 'Edit car', resource: { name: 'cars', id: car.id }})}>edit</button>
          <button onClick={() => this.props.deleteCar(car.id)}>delete</button>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <h2>Cars</h2>
        <button onClick={() => modal.showModal({modalTitle: 'Create car'})}>new car</button>
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
