import { Alert, Row, Col } from 'react-bootstrap';

const CardPembelian = ({ produk }) => {
  const myStyle = {
    backgroundColor: '#fff',
    color: 'black',
    border: '2px solid #418459',
  };

  return (
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
        <Alert.Heading style={{ textAlign: 'left' }}>Ringkasan Pembelian</Alert.Heading>
        <hr />
        <p style={{ textAlign: 'left' }}>
          <a href='https://react-bootstrap.github.io/components/overlays/#tooltips'>
            Punya kode voucher?
          </a>
        </p>
        <hr />
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
        <hr />
        <Alert style={myStyle}>
          <Row>
            <Col style={{ textAlign: 'left' }}>
              <p>Harga Barang: </p>
            </Col>
            <Col style={{ textAlign: 'Right' }}>Rp {produk.harga}</Col>
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
            <b>Rp {produk.harga + 40000 + 2500 + 500}</b>
          </Col>
        </Row>

        <Alert
          style={{ backgroundColor: '#E9F7E8', color: 'red', border: '1px solid red' }}
        >
          Mohon segera lakukan pembayaran!
        </Alert>
      </Alert>
    </div>
  );
};

export default CardPembelian;
