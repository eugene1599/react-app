import * as types from '../constants/car'

const initialState = {
  items: []
}

export default (state = initialState, {type, payload}) => {
  switch (type){
    case types.SET_CARS:
      return {
        ...state,
        items: payload
      }
    case types.ADD_CAR:
      return {
        ...state,
        items: [...state.items, payload]
      }
    case types.UPDATE_CAR:
      {
        let index = state.items.findIndex((item) => { return item.id === payload.id })
        let newItems = [...state.items]
        newItems[index] = payload

        return {
          ...state,
          items: newItems
        }
      }
    case types.DELETE_CAR:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      }
    default:
      return state
  }
}
