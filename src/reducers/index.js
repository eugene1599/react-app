import { combineReducers } from 'redux'
import CarsReducers from './car'
import CustomersReducers from './customer'
import DriversReducers from './driver'
import RacesReducers from './race'
import ReportsReducers from './report'
import ModalReducers from './modal'
import { reducer as form } from "redux-form"
import { reducer as toastrReducer } from 'react-redux-toastr'
import { reduxTokenAuthReducer } from 'redux-token-auth'

const allReducers = combineReducers({
  cars: CarsReducers,
  customers: CustomersReducers,
  drivers: DriversReducers,
  races: RacesReducers,
  reports: ReportsReducers,
  modal: ModalReducers,
  form: form,
  toastr: toastrReducer,
  reduxTokenAuth: reduxTokenAuthReducer
})

export default allReducers
