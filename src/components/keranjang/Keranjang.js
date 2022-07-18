import { Container, Row, Col, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import KeranjangItem from './KeranjangItem';
import { useContext, useState, useEffect } from 'react';
import './Keranjang.css';
import { KeranjangContext } from './../../context/KeranjangContext';

const Keranjang = () => {
  const { keranjang } = useContext(KeranjangContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (keranjang.data.length > 0) {
      const newTotal = keranjang.data.reduce((sum, item) => {
        if (typeof sum === 'object') {
          return sum.jumlah * sum.harga + item.jumlah * item.harga;
        }
        return sum + item.jumlah * item.harga;
      });
      setTotal(newTotal);
    }
  }, [keranjang]);

  return (
    <Container fluid>
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
    </Container>
  );
};

export default Keranjang;
