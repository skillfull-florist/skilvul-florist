import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <p>Ketentuan Transfer Bank</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Mohon baca terlebih dahulu :</h5>
        <p>
          Silahkan scan kode QR pada halaman selanjutnya untuk melanjutkan pembayaran.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal1;
