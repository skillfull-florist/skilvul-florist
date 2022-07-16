import Modal from 'react-bootstrap/Modal';
import { Col, Button, Row } from 'react-bootstrap';

export default function ModalTanamanHias(props) {
  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Detail Produk</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2 className='text-center'>{props.tanamanHias.nama}</h2>
        <Row>
          <Col md={4}>
            <img src={props.tanamanHias.gambar} width={200} alt='tanaman hias' />
          </Col>
          <Col md={8}>
            <p>{props.tanamanHias.deskripsi}</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
