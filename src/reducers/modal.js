import * as types from '../constants/modal'

const initialState = {
  isShow: false,
  resource: null
}

export default (state = initialState, {type, payload}) => {
  switch (type){
    case types.OPEN_MODAL:
      return {
        ...state,
        isShow: true,
        ...payload,
        resource: payload.resource
      }
    case types.CLOSE_MODAL:
      return {
        ...state,
        isShow: false,
        ...payload
      }
    default:
      return state
  }
}
