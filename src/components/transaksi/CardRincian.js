import { useState, useEffect } from 'react';
import { Alert, Button, Row, Col } from 'react-bootstrap';
import ModalRincian from "./ModalRincian";

const QUICK_BUY = 'QUICK_BUY';

const myStyle = {
  backgroundColor: '#fff',
  color: 'black',
  border: '2px solid #418459',
};

const CardRincian = () => {
  const [dataBeli, setDataBeli] = useState(null);
  useEffect(() => {
    const dataBeliLocal = JSON.parse(localStorage.getItem(QUICK_BUY));
    if (dataBeliLocal !== null) {
      setDataBeli(dataBeliLocal);
    }
  }, []);

  // const handleLanjut = () => {
  //   console.log('Lanjut bayar');
  // };
  //Modal
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      {dataBeli === null ? (
        <h2>Tidak ada data beli!</h2>
      ) : (
        <div>
          <Alert
            style={{
              backgroundColor: '#E9F7E8',
              color: 'black',
              marginTop: '5px',
              marginRight: '10px',
              border: '1px solid #418459',
            }}
          >
            <Alert.Heading style={{ textAlign: 'left' }}>Rincian</Alert.Heading>
            <hr />
            <Alert style={myStyle}>
              <Row>
                <Col lg={3} style={{ textAlign: 'left' }}>
                  <img src={dataBeli.produk.gambar} style={{ width: '100px' }} alt='produk' />
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center' }}>
                  <h5>{dataBeli.produk.nama}</h5>
                </Col>
              </Row>
            </Alert>
            <hr />
            <Alert style={myStyle}>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Harga Barang: </p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>Rp {dataBeli.produk.harga}</Col>
              </Row>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Biaya Kirim & Penanganan:</p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>Rp 40000</Col>
              </Row>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Biaya Perlindungan Barang:</p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>Rp 500</Col>
              </Row>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Biaya Pelayanan:</p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>Rp 2500</Col>
              </Row>
              <hr />
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Total Harga:</p>
                </Col>
                <Col style={{ textAlign: 'Right', color: 'red' }}>
                  <b>Rp {dataBeli.produk.harga +40000+2500+500}</b>
                </Col>
              </Row>
            </Alert>

            <hr />
            <Alert style={myStyle}>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Pembayaran</p>
                </Col>
                <Col style={{ textAlign: 'Right', color: 'red' }}>
                  <p>{dataBeli.pembayaran}</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Jasa pengiriman</p>
                </Col>
                <Col style={{ textAlign: 'Right', color: 'red' }}>
                  <p>{dataBeli.jasakirim}</p>
                </Col>
              </Row>
            </Alert>
            <hr />

            <ModalRincian show={modalShow} onHide={() => setModalShow(false)} />
            <div className='d-grid gap-2'>
              <Button
                onClick={() => setModalShow(true)}
                // onClick={handleLanjut}
                variant='outline-danger'
                size='lg'
                style={{ height: '50px' }}
              >
                <h5 style={{ fontSize: '15px', fontFamily: 'sans-serif' }}>
                  Lanjutkan pembayaran
                </h5>
              </Button>
            </div>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default CardRincian;
