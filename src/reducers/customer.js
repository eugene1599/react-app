import * as types from '../constants/customer'

const initialState = {
  items: []
}

export default (state = initialState, {type, payload}) => {
  switch (type){
    case types.SET_CUSTOMERS:
      return {
        ...state,
        items: payload
      }
    case types.ADD_CUSTOMER:
      return {
        ...state,
        items: [...state.items, payload]
      }
    case types.UPDATE_CUSTOMER:
      {
        let index = state.items.findIndex((item) => { return item.id === payload.id })
        let items = [...state.items]
        items[index] = payload

        return {
          ...state,
          items: items
        }
      }
    case types.DELETE_CUSTOMER:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      }
    default:
      return state
  }
}
