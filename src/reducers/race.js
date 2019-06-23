import * as types from '../constants/race'

const initialState = {
  items: []
}

export default (state = initialState, {type, payload}) => {
  switch (type){
    case types.SET_RACES:
      return {
        ...state,
        items: payload
      }
    case types.ADD_RACE:
      return {
        ...state,
        items: [...state.items, payload]
      }
    case types.UPDATE_RACE:
      {
        let index = state.items.findIndex((item) => { return item.id === payload.id })
        let items = [...state.items]
        items[index] = payload

        return {
          ...state,
          items: items
        }
      }
    case types.DELETE_RACE:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      }
    default:
      return state
  }
}
