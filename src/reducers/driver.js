import * as types from '../constants/driver'

const initialState = {
  items: []
}

export default (state = initialState, {type, payload}) => {
  switch (type){
    case types.SET_DRIVERS:
      return {
        ...state,
        items: payload
      }
    case types.ADD_DRIVER:
      return {
        ...state,
        items: [...state.items, payload]
      }
    case types.UPDATE_DRIVER:
      {
        let index = state.items.findIndex((item) => { return item.id === payload.id })
        let items = [...state.items]
        items[index] = payload

        return {
          ...state,
          items: items
        }
      }
    case types.DELETE_DRIVER:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      }
    default:
      return state
  }
}
