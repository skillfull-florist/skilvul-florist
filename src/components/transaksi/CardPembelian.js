import { useEffect, useState } from 'react';
import { Alert, Row, Col } from 'react-bootstrap';
import CardKeranjang from './CardKeranjang';

const CardPembelian = ({ produk, isKeranjang = false }) => {
  const myStyle = {
    backgroundColor: '#fff',
    color: 'black',
    border: '2px solid #418459',
  };

  const [total, setTotal] = useState(-1);

  useEffect(() => {
    if (isKeranjang && produk !== null) {
      if (produk.data.length > 1) {
        const newTotal = produk.data.reduce((sum, item) => {
          if (typeof sum === 'object') {
            return sum.jumlah * sum.harga + item.jumlah * item.harga;
          }
          return sum + item.jumlah * item.harga;
        });
        setTotal(newTotal);
      }
      if (produk.data.length === 1) {
        setTotal(produk.data[0].jumlah * produk.data[0].harga);
      }
      if (produk.data.length === 0) {
        setTotal(0);
      }
    }
  }, [produk, isKeranjang]);

  return (
    <div>
      {produk !== null ? (
        <>
          <Alert
            style={{
              backgroundColor: '#E9F7E8',
              color: 'black',
              marginTop: '5px',
              marginRight: '10px',
              border: '1px solid #418459',
            }}
          >
            <Alert.Heading style={{ textAlign: 'left' }}>
              Ringkasan Pembelian
            </Alert.Heading>
            <hr />
            <p style={{ textAlign: 'left' }}>
              <a href='https://react-bootstrap.github.io/components/overlays/#tooltips'>
                Punya kode voucher?
              </a>
            </p>
            <hr />
            {isKeranjang ? (
              <CardKeranjang keranjang={produk} />
            ) : (
              <Alert style={myStyle}>
                <Row>
                  <Col lg={3} style={{ textAlign: 'left' }}>
                    <img src={produk.gambar} style={{ width: '100px' }} alt='produk' />
                  </Col>
                  <Col style={{ display: 'flex', alignItems: 'center' }}>
                    <h5>{produk.nama}</h5>
                  </Col>
                </Row>
              </Alert>
            )}
            <hr />
            <Alert style={myStyle}>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Harga Barang: </p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>
                  Rp {isKeranjang ? total : produk.harga}
                </Col>
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
            </Alert>
            <hr />
            <Row>
              <Col style={{ textAlign: 'left' }}>
                <p>Total Harga:</p>
              </Col>
              <Col style={{ textAlign: 'Right', color: 'red' }}>
                <b>Rp {(isKeranjang ? total : produk.harga) + 40000 + 2500 + 500}</b>
              </Col>
            </Row>

            <Alert
              style={{
                backgroundColor: '#E9F7E8',
                color: 'red',
                border: '1px solid red',
              }}
            >
              Mohon segera lakukan pembayaran!
            </Alert>
          </Alert>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardPembelian;
