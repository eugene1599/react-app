import store from '../store'
import * as modalActions from '../actions/modal'

export default (function helpers() {
  return {
    showModal: function(params) {
      store.dispatch(modalActions.showModal(params))
    },
    closeModal: function(){ 
      store.dispatch(modalActions.closeModal())
    }
  }
}());
