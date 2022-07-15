import React from 'react'
import {Modal, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

    function ModalRincian(props) {
        const navigate = useNavigate();

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
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => navigate('/berhasil')}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default ModalRincian;