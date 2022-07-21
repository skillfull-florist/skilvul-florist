import { useContext, useState, useEffect } from 'react';
import * as Helper from './../../helpers/TransaksiHelper';
import { AuthContext } from './../../contexts/AuthContext';
import { Container, Table, Row, Col } from 'react-bootstrap';

const Pesanan = () => {
  const { auth } = useContext(AuthContext);
  const [isReady, setIsReady] = useState(false);
  const [pesanan, setPesanan] = useState([]);

  useEffect(() => {
    setIsReady(false);
    const getTransaksi = async () => {
      const result = await Helper.getTransaksiByUserId(auth.user.id);
      setPesanan(result);
      setIsReady(true);
      console.log(pesanan);
    };

    getTransaksi();
  }, []);
  return (
    <Container fluid>
      <Row className='pt-2'>
        <Col md={12}>
          <h1 className='keranjang'>Daftar Pesanan</h1>
        </Col>
      </Row>
      <Row className='pt-5'>
        <Col md={12}>
          {isReady ? (
            <Table responsive id='tabel-keranjang'>
              <thead>
                <tr>
                  <th>Gambar</th>
                  <th>Nama Produk</th>
                  <th>Harga Satuan</th>
                  <th>Jumlah</th>
                  <th>Harga</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          ) : (
            <h3>Pesanan Kosong</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Pesanan;
