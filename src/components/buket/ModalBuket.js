import Modal from 'react-bootstrap/Modal';
import { Col, Button, Row } from 'react-bootstrap';
import React from 'react';

export default function ModalBuket(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Detail Produk</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2 className='text-center'>{props.buket.nama}</h2>
        <Row>
          <Col md={4}>
            <img src={props.buket.gambar} width={200} />
          </Col>
          <Col md={8}>
            <p>{props.buket.deskripsi}</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
