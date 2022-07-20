import React from 'react';
import { Alert, Row, Col } from 'react-bootstrap';
import poto1 from '../../assets/bca.jpg';

const Riwayatpesanan = () => {
  return (
    <div>
      <Alert
        style={{
          backgroundColor: '#E9F7E8',
          color: 'black',
          marginTop: '5px',
          marginRight: '10px',
          border: '1px solid #418459',
        }}
      >
        <Alert.Heading style={{ textAlign: 'left' }}>Ringkasan Pembelian</Alert.Heading>
        <hr />
        <p style={{ textAlign: 'left' }}>
          <a href='https://react-bootstrap.github.io/components/overlays/#tooltips'>
            Punya kode voucher?
          </a>
        </p>
        <hr />
        <Alert>
          <Row>
            <Col lg={3} style={{ textAlign: 'left' }}>
              <img src={poto1} style={{ width: '100px' }} />
            </Col>
            <Col style={{ display: 'flex', alignItems: 'center' }}>
              <h5>hai</h5>
            </Col>
          </Row>
        </Alert>
      </Alert>
    </div>
  );
};

export default Riwayatpesanan;
