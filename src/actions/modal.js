import * as types from '../constants/modal'

export const showModal = (payload) => {
  return {
    type: types.OPEN_MODAL,
    payload: payload
  }
}

export const closeModal = (data) => {
  return {
    type: types.CLOSE_MODAL,
    payload: data
  }
}
