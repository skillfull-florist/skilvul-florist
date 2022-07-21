import { useContext, useState, useEffect } from 'react';
import * as Helper from './../../helpers/TransaksiHelper';
import { AuthContext } from './../../contexts/AuthContext';
import { Container, Button, Table, Row, Col } from 'react-bootstrap';
import DaftarPesanan from './DaftarPesanan';

const Pesanan = () => {
  const { auth } = useContext(AuthContext);
  const [isPesanan, setIsPesanan] = useState(false);
  const [pesanan, setPesanan] = useState([]);

  useEffect(() => {
    setIsPesanan(false);
    async function getTransaksi() {
      const result = await Helper.getTransaksiByUserId(
        auth.user.id,
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      );

      setPesanan(result);
      setIsPesanan(true);
    }

    if (auth.isAuthenticated) {
      getTransaksi();
    }
  }, [auth]);
  return (
    <Container fluid>
      <Row className='pt-2'>
        <Col md={12}>
          <h1>Daftar Pesanan</h1>
        </Col>
      </Row>
      <Row className='pt-5'>
        <Col md={12}>
          {isPesanan ? <DaftarPesanan pesanan={pesanan} /> : <h3>Pesanan Kosong</h3>}
        </Col>
      </Row>
    </Container>
  );
};

export default Pesanan;
