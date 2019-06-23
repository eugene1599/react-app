import * as types from '../constants/report'

const initialState = {
  items: []
}

export default (state = initialState, {type, payload}) => {
  switch (type){
    case types.SET_REPORTS:
      return {
        ...state,
        items: payload
      }
    case types.ADD_REPORT:
      return {
        ...state,
        items: [...state.items, payload]
      }
    case types.UPDATE_REPORT:
      {
        let index = state.items.findIndex((item) => { return item.id === payload.id })
        let items = [...state.items]
        items[index] = payload

        return {
          ...state,
          items: items
        }
      }
    default:
      return state
  }
}
