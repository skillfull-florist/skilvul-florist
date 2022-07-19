import React from 'react'
import {Modal, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import qrcode from "../../assets/qr.png"

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
            <p>Scan kode QR dibawah</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={qrcode} style={{alignItems:"center"}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:"#67A478"}}onClick={() => navigate('/berhasil')}>Selesai</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default ModalRincian;