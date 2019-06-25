import * as types from '../../constants/driver'

export const RESOURCE_PATH = '/drivers/{{id}}'

export const fetchAllItemsSuccess = data => {
  return {
    type: types.SET_DRIVERS,
    payload: data
  }
}

export const createItemSuccess = (data) => {
  return {
    type: types.ADD_DRIVER,
    payload: data
  }
}

export const updateItemSuccess = (data) => {
  return {
    type: types.UPDATE_DRIVER,
    payload: data
  }
}

export const deleteItemSuccess = (data) => {
  return {
    type: types.DELETE_DRIVER,
    payload: data
  }
}
