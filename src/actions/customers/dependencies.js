import * as types from '../../constants/customer'

export const RESOURCE_PATH = '/customers/{{id}}'

export const fetchAllItemsSuccess = data => {
  return {
    type: types.SET_CUSTOMERS,
    payload: data
  }
}

export const createItemSuccess = (data) => {
  return {
    type: types.ADD_CUSTOMER,
    payload: data
  }
}

export const updateItemSuccess = (data) => {
  return {
    type: types.UPDATE_CUSTOMER,
    payload: data
  }
}

export const deleteItemSuccess = (data) => {
  return {
    type: types.DELETE_CUSTOMER,
    payload: data
  }
}
