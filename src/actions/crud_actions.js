import axios from '../utils/axios';
import { toastr, modal } from '../helpers'

class CrudActions {
  constructor(constants){
    {
      this.RESOURCE_PATH = constants.RESOURCE_PATH
      this.fetchAllItemsSuccess = constants.fetchAllItemsSuccess
      this.createItemSuccess = constants.createItemSuccess
      this.updateItemSuccess = constants.updateItemSuccess
      this.deleteItemSuccess = constants.deleteItemSuccess
    }
  }

  fetchAllItems = () => {
    return dispatch => {
      axios.get(`http://127.0.0.1:3001/api/v1${this.RESOURCE_PATH}`)
        .then(res => {
          dispatch(this.fetchAllItemsSuccess(res.data))
        });
    }
  }
  
  createItem = (data) => {
    return dispatch => {
      axios.post(`http://127.0.0.1:3001/api/v1${this.RESOURCE_PATH}`, data)
        .then(res => {
          dispatch(this.createItemSuccess(res.data))
          modal.closeModal();
          toastr.success('Success', 'Item was created successfully')
        }).catch(error => {
          throw(error);
        }); 
    }
  }
  
  updateItem = (data) => {
    return dispatch => {
      axios.patch(`http://127.0.0.1:3001/api/v1${this.RESOURCE_PATH}/${data.id}`, data)
        .then(res => {
          dispatch(this.updateItemSuccess(res.data))
          modal.closeModal();
          toastr.success('Success', 'Updated')
        }).catch(error => {
          throw(error);
        }); 
    }
  }
  
  deleteItem = (id) => {
    return dispatch => {
      axios.delete(`http://127.0.0.1:3001/api/v1${this.RESOURCE_PATH}/${id}`)
        .then(() => {
          dispatch(this.deleteItemSuccess(id))
          modal.closeModal();
          toastr.warning('Deleted')
        }).catch(error => {
          throw(error);
        }); 
    }
  }


}

export default CrudActions;
