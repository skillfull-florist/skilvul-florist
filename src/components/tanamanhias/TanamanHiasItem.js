import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './TanamanHiasItem.css';
import img1 from '../../assets/shopping-cart.png';
import ModalTanamanHias from './ModalTanamanHias';

export const TanamanHiasItem = ({ tanamanHias }) => {
  const navigate = useNavigate();
  // modal
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Col mb={3} md={4}>
      <div className='p-2 m-1 text-white'>
        <Card className='card text-dark' id='card'>
          <Card.Img src={tanamanHias.gambar} height='300' />
          <Card.Body className='card-body'>
            <Card.Title onClick={() => setModalShow(true)}>{tanamanHias.nama}</Card.Title>
            <ModalTanamanHias
              show={modalShow}
              tanamanhias={tanamanHias}
              onHide={() => setModalShow(false)}
            />
            <Card.Text>{tanamanHias.harga}</Card.Text>
            <Button
              style={{
                backgroundColor: '#67A478',
                borderRadius: '0',
                border: '1px solid #67A478',
              }}
              onClick={() => navigate(`/transaksi/tanamanhias/${tanamanHias.id}`)}
            >
              Beli Langsung
            </Button>
            <Button variant='outline' style={{ borderRadius: '0', border: '1px solid #418459' }}>
              <img src={img1} style={{ width: '20px' }} alt='shopping cart' />
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

