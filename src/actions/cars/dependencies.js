import * as types from '../../constants/car'

export const RESOURCE_PATH = '/cars/{{id}}'

export const fetchAllItemsSuccess = data => {
  return {
    type: types.SET_CARS,
    payload: data
  }
}

export const createItemSuccess = (data) => {
  return {
    type: types.ADD_CAR,
    payload: data
  }
}

export const updateItemSuccess = (data) => {
  return {
    type: types.UPDATE_CAR,
    payload: data
  }
}

export const deleteItemSuccess = (data) => {
  return {
    type: types.DELETE_CAR,
    payload: data
  }
}
