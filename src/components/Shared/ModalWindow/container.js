import React, { Component } from 'react'
import ModalWindow from './ModalWindow'
import { connect } from 'react-redux'
import * as actions from '../../../actions/modal'

class ModalWindowContainer extends Component {
  render () {
    return (
      <ModalWindow {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isShow: state.modal.isShow,
    formName: state.modal.formName,
    modalTitle: state.modal.modalTitle
  }
}

const mapDispatchToProps = {
  showModal: actions.showModal,
  closeModal: actions.closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowContainer)
