import * as types from '../../constants/race'

export const RESOURCE_PATH = '/races'

export const fetchAllItemsSuccess = data => {
  return {
    type: types.SET_RACES,
    payload: data
  }
}

export const createItemSuccess = (data) => {
  return {
    type: types.ADD_RACE,
    payload: data
  }
}

export const updateItemSuccess = (data) => {
  return {
    type: types.UPDATE_RACE,
    payload: data
  }
}

export const deleteItemSuccess = (data) => {
  return {
    type: types.DELETE_RACE,
    payload: data
  }
}
