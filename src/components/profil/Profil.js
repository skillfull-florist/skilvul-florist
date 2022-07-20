import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './../../contexts/AuthContext';
import { Container, Col, Row, Card, Alert } from 'react-bootstrap';
import img1 from '../../assets/buket.png';
import img2 from '../../assets/hias.png';

const Profil = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <Container>
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
              <img style={{ width: '120px' , borderRadius:"50%"}} src={auth.user.avatar} alt='buket' />
                <hr/>
              <Row style={{fontSize:"15px"}}>
                <Col style={{ textAlign: 'left'}}>
                  <p>Username : </p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>{auth.user.username}</Col>
              </Row>
              <Row style={{fontSize:"15px"}}>
                <Col style={{ textAlign: 'left' }}>
                  <p>Email : </p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>{auth.user.email}</Col>
              </Row>
            </Alert>
          </Col>
          <Col>
          <hr/>
            <Alert
              style={{
                backgroundColor: '#E9F7E8',
                border: '#E9F7E8',
                borderRadius: '0',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <img style={{ width: '120px' }} src={img2} alt='hias' />
              <Row>
                <h6 style={{ color: 'black' }}>History Belanja</h6>
                <hr />
                <p style={{ color: 'black', fontSize: '10px' }}>
                  Jual Tanaman hias mencakup baik berbentuk terna, merambat, semak,
                  perdu, ataupun pohon.
                </p>
              </Row>
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profil;
