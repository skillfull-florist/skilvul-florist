import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import sukses from '../../assets/Sukses1.png';
import { useNavigate } from 'react-router-dom';

const TransaksiBerhasil = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Row>
        <img
          src={sukses}
          style={{
            width: '70%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </Row>
      <h3>Pembayaran Berhasil!</h3>
      <Button
        style={{
          backgroundColor: '#67A478',
          borderRadius: '0',
          border: '1px solid #418459',
        }}
        onClick={() => navigate('/pesanan')}
      >
        Cek Pesanan Anda
      </Button>
    </div>
  );
};

export default TransaksiBerhasil;
