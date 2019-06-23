import { combineReducers } from 'redux'
import CarsReducers from './car'
import CustomersReducers from './customer'
import DriversReducers from './driver'
import ModalReducers from './modal'
import { reducer as form } from "redux-form";
import { reducer as toastrReducer } from 'react-redux-toastr'
import { reduxTokenAuthReducer } from 'redux-token-auth'

const allReducers = combineReducers({
  cars: CarsReducers,
  customers: CustomersReducers,
  drivers: DriversReducers,
  modal: ModalReducers,
  form: form,
  toastr: toastrReducer,
  reduxTokenAuth: reduxTokenAuthReducer
})

export default allReducers;
