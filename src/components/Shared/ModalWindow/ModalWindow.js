import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import FormResolver from '../Forms/FormResolver'

class ModalWindow extends Component {
  render() {
    const { closeModal, modalTitle, isShow, resource } = this.props;

    return (
      <Modal size="lg" show={isShow} onHide={closeModal} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormResolver resource={resource}/>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ModalWindow
