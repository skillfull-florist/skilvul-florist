import { useContext } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { KeranjangContext } from './../../context/KeranjangContext';
import { ADD_NEW_PRODUCT } from './../../context/ContextConsts';

export const BuketItem = ({ buket }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(KeranjangContext);

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
        <Card className='card text-dark border-dark'>
          <Card.Img src={buket.gambar} height='300' />
          <Card.Body>
            <Card.Title>{buket.nama}</Card.Title>
            <Card.Text>{buket.harga}</Card.Text>
            <Button
              variant='outline-info'
              onClick={() => navigate(`/transaksi/buket/${buket.id}`)}
            >
              Beli Langsung
            </Button>
            <Button variant='outline-info' onClick={handleAddProduct}>
              Masukkan keranjang
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};
