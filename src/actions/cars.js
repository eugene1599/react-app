import axios from 'axios';
import * as types from '../constants/car'
import { toastr, modal } from '../helpers'

const RESOURCE_PATH = '/cars'

export const fetchAllCars = () => {
  return dispatch => {
    axios.get(`http://127.0.0.1:3001/api/v1${RESOURCE_PATH}`)
      .then(res => {
        dispatch(fetchAllCarsSuccess(res.data))
      });    
  }
}

export const fetchAllCarsSuccess = cars => {
  return {
    type: types.SET_CARS,
    payload: cars
  }
}

export const createCar = (data) => {
  return dispatch => {
    axios.post(`http://127.0.0.1:3001/api/v1${RESOURCE_PATH}`, data)
      .then(res => {
        dispatch(createCarSuccess(res.data))
        modal.closeModal();
        toastr.success('Success', 'Car was created successfully')
      }).catch(error => {
        throw(error);
      }); 
  }
}

export const createCarSuccess = (data) => {
  return {
    type: types.ADD_CAR,
    payload: data
  }
}

export const updateCar = (data) => {
  return dispatch => {
    axios.patch(`http://127.0.0.1:3001/api/v1${RESOURCE_PATH}/${data.id}`, data)
      .then(res => {
        dispatch(updateCarSuccess(res.data))
        modal.closeModal();
        toastr.success('Success', 'Updated')
      }).catch(error => {
        throw(error);
      }); 
  }
}

export const updateCarSuccess = (data) => {
  return {
    type: types.UPDATE_CAR,
    payload: data
  }
}

export const deleteCar = (id) => {
  return dispatch => {
    axios.delete(`http://127.0.0.1:3001/api/v1${RESOURCE_PATH}/${id}`)
      .then(() => {
        dispatch(deleteCarSuccess(id))
        modal.closeModal();
        toastr.warning('Deleted')
      }).catch(error => {
        throw(error);
      }); 
  }
}

export const deleteCarSuccess = (data) => {
  return {
    type: types.DELETE_CAR,
    payload: data
  }
}
