import { useState, useContext } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './TanamanHiasItem.css';
import img1 from '../../assets/shopping-cart.png';
import ModalTanamanHias from './ModalTanamanHias';
import { KeranjangContext } from './../../contexts/KeranjangContext';
import { ADD_NEW_PRODUCT, TANAMAN_HIAS } from './../../contexts/ContextConsts';
import ToastTanaman from './ToastTanaman';

export const TanamanHiasItem = ({ tanamanHias }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(KeranjangContext);
  const [modalShow, setModalShow] = useState(false);
  const [toastShow, setToastShow] = useState(false);

  const handleAddProduct = () => {
    dispatch({
      type: ADD_NEW_PRODUCT,
      payload: {
        ...tanamanHias,
        idProduk: tanamanHias.id,
        tipe: TANAMAN_HIAS,
      },
    });
    setToastShow(true);
    setTimeout(() => {
      setToastShow(false);
    }, 1500);
  };
  return (
    <Col mb={3} md={3}>
      <div className='p-2 m-1 text-white'>
        <ToastTanaman show={toastShow} />
        <Card className='card text-dark' id='card'>
          <Card.Img src={tanamanHias.gambar} height='200' />
          <Card.Body className='card-body'>
            <Card.Title onClick={() => setModalShow(true)}>
              {tanamanHias.nama}
            </Card.Title>
            <ModalTanamanHias
              show={modalShow}
              tanamanhias={tanamanHias}
              onHide={() => setModalShow(false)}
            />
            <Card.Text>Rp. {tanamanHias.harga}</Card.Text>
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
            <Button
              variant='outline'
              style={{ borderRadius: '0', border: '1px solid #418459' }}
              onClick={handleAddProduct}
            >
              <img src={img1} style={{ width: '20px' }} alt='shopping cart' />
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};
