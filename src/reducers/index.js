import { combineReducers } from 'redux'
import CarsReducers from './car'
import ModalReducers from './modal'
import { reducer as form } from "redux-form";
import { reducer as toastrReducer } from 'react-redux-toastr'

const allReducers = combineReducers({
  cars: CarsReducers,
  modal: ModalReducers,
  form: form,
  toastr: toastrReducer
})

export default allReducers;
