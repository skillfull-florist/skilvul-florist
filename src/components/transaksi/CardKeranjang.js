import React from 'react';
import { Alert, Row, Col } from 'react-bootstrap';

const myStyle = {
  backgroundColor: '#fff',
  color: 'black',
  border: '2px solid #418459',
  padding: '6px',
  marginBottom: '6px',
};

const CardKeranjang = ({ keranjang }) => {
  return (
    <div>
      {keranjang.data.map((item, idx) => (
        <Alert key={idx} style={myStyle}>
          <Row>
            <Col style={{ display: 'flex', textAlign: 'left' }}>
              <img src={item.gambar} style={{ width: '64px' }} alt='produk' />
              <div className='ms-3'>
                <h5>{item.nama}</h5>
                <p className='m-0'>Harga: {item.harga}</p>
                <p className='m-0'>Jumlah: {item.jumlah}</p>
              </div>
            </Col>
          </Row>
          <Row className='mt-2'>
            <Col style={{ textAlign: 'left' }}>
              <p>Total Biaya: </p>
            </Col>
            <Col style={{ textAlign: 'Right' }}>
              <b>Rp {item.harga * item.jumlah}</b>
            </Col>
          </Row>
        </Alert>
      ))}
    </div>
  );
};

export default CardKeranjang;
