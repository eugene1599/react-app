import * as types from '../constants/modal'

export const showModal = (data) => {
  return {
    type: types.OPEN_MODAL,
    payload: data
  }
}

export const closeModal = (data) => {
  return {
    type: types.CLOSE_MODAL,
    payload: data
  }
}
