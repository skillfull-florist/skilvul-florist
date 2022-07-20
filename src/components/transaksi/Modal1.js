import React from 'react'
import {Modal, Button } from "react-bootstrap"

    function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p>Ketentuan</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Mohon baca terlebih dahulu :</h5>
          <p>
            Anda memilih metode pembayaran dengan florist pay, mohon cek saldo anda kembali untuk memastikan anda dapat membayar dengan metode ini.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal;