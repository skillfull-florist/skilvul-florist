import { useContext, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/shopping-cart.png';
import ModalBuket from './ModalBuket';
import { KeranjangContext } from './../../contexts/KeranjangContext';
import { ADD_NEW_PRODUCT } from './../../contexts/ContextConsts';

export const BuketItem = ({ buket }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(KeranjangContext);

  const [modalShow, setModalShow] = useState(false);

  const handleAddProduct = () => {
    if (window.confirm('Tambah produk ini ke keranjang?') === true) {
      dispatch({
        type: ADD_NEW_PRODUCT,
        payload: {
          idProduk: buket.id,
          nama: buket.nama,
          harga: buket.harga,
          gambar: buket.gambar,
          tipe: 'buket',
        },
      });
    }
  };
  return (
    <Col mb={3} md={4}>
      <div className='pt-4 m-1 text-white'>
        <Card className='card text-dark' style={{backgroundColor: "#E9F7E8"}}>
          <Card.Img src={buket.gambar} height='300' />
          <Card.Body>
            <Card.Title onClick={() => setModalShow(true)}>{buket.nama}</Card.Title>
            <ModalBuket show={modalShow} buket={buket} onHide={() => setModalShow(false)} />
            <Card.Text>{buket.harga}</Card.Text>
            <Button
              style={{
                backgroundColor: '#67A478',
                borderRadius: '0',
                border: '1px solid #67A478',
              }}
              onClick={() => navigate(`/transaksi/buket/${buket.id}`)}
            >
              Beli Langsung
            </Button>
            <Button
              variant='outline'
              style={{ borderRadius: '0', border: '1px solid #418459' }}
              onClick={handleAddProduct}
            >
              <img src={img1} style={{ width: '20px' }} alt='keranjang' />
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};
