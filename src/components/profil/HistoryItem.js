import React from 'react';
import {Alert, Col,Row} from 'react-bootstrap'

const HistoryItem = ({ pesanan }) => {

  const myStyle = {
    backgroundColor: '#fff',
    color: 'black',
    border: '2px solid #418459',
  };

  return (
      <Alert className='d-flex p-2' style={myStyle}>
      <Row style={{ fontSize: '15px' }}>
        <Col style={{ textAlign: 'left' }}>
        <img src={pesanan.gambar} alt='produk' width='100px' />
        </Col>
        <Col style={{ textAlign: 'Right' }}>{pesanan.nama}<hr/>
        <p>Jumlah: {pesanan.jumlah}</p>
        </Col>
      </Row>
      </Alert>
  );
};

export default HistoryItem;
