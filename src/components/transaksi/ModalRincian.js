import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import qrcode from '../../assets/qr.png';

const QUICK_BUY = 'QUICK_BUY';
const KERANJANG_BUY = 'KERANJANG_BUY';

function ModalRincian(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (props.keranjang === 'true') {
      localStorage.removeItem(KERANJANG_BUY);
    } else {
      localStorage.removeItem(QUICK_BUY);
    }
    navigate('/berhasil');
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <p>Scan kode QR dibawah</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: 'center' }}>
        <img src={qrcode} />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: '#67A478' }} onClick={handleClick}>
          Selesai
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalRincian;
