import * as types from '../../constants/report'
import axios from '../../utils/axios';
import { toastr, modal } from '../../helpers'
import { API_HOST } from '../../constants/environment'

export const RESOURCE_PATH = '/races'

export const fetchAllItems = (race_id) => {
  return dispatch => {
    axios.get(`${API_HOST}/api/v1${RESOURCE_PATH}/${race_id}/reports`)
      .then(res => {
        dispatch(fetchAllItemsSuccess(res.data))
      });
  }
}

export const createItem = (race_id, data) => {
  return dispatch => {
    axios.post(`${API_HOST}/api/v1${RESOURCE_PATH}/${race_id}/reports`, data)
      .then(res => {
        dispatch(createItemSuccess(res.data))
        modal.closeModal();
        toastr.success('Success', 'Item was created successfully')
      }).catch(error => {
        let message = 'Error';
        try {
          let fieldName = Object.keys(error.response.data)[0];
          let errorMessage = error.response.data[fieldName][0];

          message = fieldName + " - " + errorMessage;
        } catch(e) {
          throw(error);
        }
        toastr.error('Error', message)
      });
  }
}

export const updateItem = (race_id, data) => {
  return dispatch => {
    axios.patch(`${API_HOST}/api/v1${RESOURCE_PATH}/${race_id}/reports/${data.id}`, data)
      .then(res => {
        dispatch(updateItemSuccess(res.data))
        modal.closeModal();
        toastr.success('Success', 'Updated')
      }).catch(error => {
        let message = 'Error';
        try {
          let fieldName = Object.keys(error.response.data)[0];
          let errorMessage = error.response.data[fieldName][0];

          message = fieldName + " - " + errorMessage;
        } catch(e) {
          throw(error);
        }
        toastr.error('Error', message)
      });
  }
}

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
