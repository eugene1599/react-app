import * as types from '../../constants/report'

export const RESOURCE_PATH = '/races/{{race_id}}/reports/{{id}}'

export const fetchAllItemsSuccess = data => {
  return {
    type: types.SET_REPORTS,
    payload: data
  }
}

export const createItemSuccess = (data) => {
  return {
    type: types.ADD_REPORT,
    payload: data
  }
}

export const updateItemSuccess = (data) => {
  return {
    type: types.UPDATE_REPORT,
    payload: data
  }
}
