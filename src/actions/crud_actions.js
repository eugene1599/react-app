import axios from '../utils/axios';
import { toastr, modal } from '../helpers'
import { API_HOST } from '../constants/environment'

class CrudActions {
  constructor(constants){
    this.RESOURCE_PATH = constants.RESOURCE_PATH
    this.fetchAllItemsSuccess = constants.fetchAllItemsSuccess
    this.createItemSuccess = constants.createItemSuccess
    this.updateItemSuccess = constants.updateItemSuccess
    this.deleteItemSuccess = constants.deleteItemSuccess
  }

  fetchAllItems = (data) => {
    let resource = this._parseUrl(this.RESOURCE_PATH, data)

    return dispatch => {
      axios.get(`${API_HOST}/api/v1${resource}.json`)
        .then(res => {
          dispatch(this.fetchAllItemsSuccess(res.data))
        });
    }
  }

  createItem = (data) => {
    let resource = this._parseUrl(this.RESOURCE_PATH, data)

    return dispatch => {
      axios.post(`${API_HOST}/api/v1${resource}`, data)
        .then(res => {
          dispatch(this.createItemSuccess(res.data))
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

  updateItem = (data) => {
    let resource = this._parseUrl(this.RESOURCE_PATH, data)

    return dispatch => {
      axios.patch(`${API_HOST}/api/v1${resource}`, data)
        .then(res => {
          dispatch(this.updateItemSuccess(res.data))
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

  deleteItem = (data) => {
    let resource = this._parseUrl(this.RESOURCE_PATH, data)

    return dispatch => {
      axios.delete(`${API_HOST}/api/v1${resource}`)
        .then(() => {
          dispatch(this.deleteItemSuccess(data.id))
          modal.closeModal();
          toastr.warning('Deleted')
        }).catch(error => {
          throw(error);
        });
    }
  }

  _parseUrl = (url, params) => {
    let resultUrl = url;
    Object.keys(params || {}).forEach(function(param){
      resultUrl = resultUrl.replace(`{{${param}}}`, params[param])
    })
    resultUrl = resultUrl.replace(new RegExp('/{{\\w*}}','g'), '')
    resultUrl = resultUrl.replace(new RegExp('{{\\w*}}','g'), '')

    return resultUrl
  }
}
console.log(`Your host ${API_HOST}`);
export default CrudActions;
