import * as types from '../constants/car'

const initialState = {
  cars: []
}

export default (state = initialState, {type, payload}) => {
  switch (type){
    case types.SET_CARS:
      return {
        ...state,
        cars: payload
      }
    case types.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, payload]
      }
    case types.UPDATE_CAR:
      {
        let index = state.cars.findIndex((item) => { return item.id === payload.id })
        let newCars = [...state.cars]
        newCars[index] = payload

        return {
          ...state,
          cars: newCars
        }
      }
    case types.DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter(item => item.id !== payload)
      }
    default:
      return state
  }
}
