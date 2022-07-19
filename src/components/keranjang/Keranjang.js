import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import KeranjangItem from './KeranjangItem';
import { useContext, useState, useEffect } from 'react';
import './Keranjang.css';
import { KeranjangContext } from './../../contexts/KeranjangContext';
import EmptyCart from './../../assets/empty-cart.svg';

const Keranjang = () => {
  const navigate = useNavigate();
  const { keranjang } = useContext(KeranjangContext);
  const [isReady, setIsReady] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setIsReady(false);
    if (keranjang.data.length > 0) {
      const newTotal = keranjang.data.reduce((sum, item) => {
        if (typeof sum === 'object') {
          return sum.jumlah * sum.harga + item.jumlah * item.harga;
        }
        return sum + item.jumlah * item.harga;
      });
      setTotal(newTotal);
    }
    setIsReady(true);
  }, [keranjang]);

  return (
    <Container fluid>
      {!isReady ? (
        <div className='mt-2'>
          <h1>Memuat...</h1>
        </div>
      ) : total === 0 ? (
        <div className='mt-2'>
          <h1>Keranjang Kosong...</h1>
          <br />
          <Button className='text-white' onClick={() => navigate('/')}>
            Kembali ke Home
          </Button>
          <br />
          <img className='mt-5' src={EmptyCart} alt='empty cart' width='320px' />
        </div>
      ) : (
        <div>
          <Row className='pt-2'>
            <Col md={12}>
              <h1 className='keranjang'>Keranjang</h1>
            </Col>
          </Row>
          <Row className='pt-5'>
            <Col md={12}>
              <Table responsive id='tabel-keranjang'>
                <thead>
                  <tr>
                    <th>Gambar</th>
                    <th>Nama Produk</th>
                    <th>Harga Satuan</th>
                    <th>Jumlah</th>
                    <th>Harga</th>
                    <th>Hapus</th>
                  </tr>
                </thead>
                <tbody>
                  {keranjang.data.map((item, idx) => (
                    <KeranjangItem key={idx} produk={item} />
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <div className='col-md-5 ms-auto'>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Total Harga</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rp {total}</td>
                  </tr>
                  <tr className='position-center'>
                    <td colSpan={2}>
                      <Button href='#' variant='success'>
                        Beli
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default Keranjang;
