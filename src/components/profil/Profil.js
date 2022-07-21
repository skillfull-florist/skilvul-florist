import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './../../contexts/AuthContext';
import { Container, Col, Row, Card, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import img1 from '../../assets/buket.png';
import img2 from '../../assets/hias.png';
import * as Helper from './../../helpers/TransaksiHelper';
import PesananItem from './PesananItem';

const Profil = () => {
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
    <div className='mt-5 mb-5'>
      <Container fluid>
        <Row>
          <Col>
            <Alert
              style={{
                backgroundColor: '#fff',
                border: '2px solid #E9F7E8',
                borderRadius: '0',
                alignItems: 'flex-end',
              }}
            >
              <h5 style={{ color: 'black' }}>Profile anda</h5>
              <hr />
              <img
                style={{ width: '120px', borderRadius: '50%' }}
                src={auth.user.avatar}
                alt='buket'
              />
              <hr />
              <Row style={{ fontSize: '15px' }}>
                <Col style={{ textAlign: 'left' }}>
                  <p>Username : </p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>{auth.user.username}</Col>
              </Row>
              <Row style={{ fontSize: '15px' }}>
                <Col style={{ textAlign: 'left' }}>
                  <p>Email : </p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>{auth.user.email}</Col>
              </Row>
            </Alert>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col md={12}>
            <Alert
              style={{
                backgroundColor: '#E9F7E8',
                border: '#E9F7E8',
                borderRadius: '0',
              }}
            >
              <h6 style={{ color: 'black' }}>Riwayat Belanja</h6>
              <hr />
              {isPesanan ? (
                pesanan.map((item, idx) => <PesananItem key={idx} pesanan={item} />)
              ) : (
                <h3>Belum pernah belanja...</h3>
              )}
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profil;
