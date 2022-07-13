import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mockapi from './../../apis/mockapi';
import ImgBCA from '../../assets/transaksi/bca.jpg';
import ImgBRI from '../../assets/transaksi/bri.png';
import ImgMandiri from '../../assets/transaksi/mandiri.jpg';
import ImgMobilePayment from '../../assets/transaksi/mobile-payment.png';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const myStyle = {
  backgroundColor: '#fff',
  color: 'black',
  border: '2px solid #A48868',
};

function Transaksi() {
  const params = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [produk, setProduk] = useState([]);
  useEffect(() => {
    const getTanamanHiasById = async () => {
      let url = '';
      if (params.type === 'buket') {
        url = `/buket/${params.id}`;
      }

      if (params.type === 'tanamanhias') {
        url = `/tanamanhias/${params.id}`;
      }

      if (params.type !== undefined && url !== '') {
        const result = await mockapi.get(url);
        setProduk(result.data);
      }
    };

    getTanamanHiasById();
  }, [params.id, params.type]);
  return (
    <div className='my-5'>
      <Row>
        <Col>
          <Alert
            style={{
              backgroundColor: '#E4DCCF',
              color: 'black',
              marginTop: '5px',
              marginLeft: '10px',
              border: '1px solid #A48868',
            }}
          >
            <Alert.Heading style={{ textAlign: 'left' }}>
              Pilih Metode Pembayaran {params.id}
            </Alert.Heading>{' '}
            <hr />
            <Alert style={myStyle}>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <img src={produk.gambar} style={{ width: '50%' }} alt={produk.nama} />
                  <h5>{produk.nama}</h5>
                </Col>
              </Row>
            </Alert>
            <Alert style={myStyle}>
              <div style={{ textAlign: 'left' }}>
                <input type='radio' name='jenis_kelamin' value='pria' /> Florist-pay&nbsp;
                <img src={ImgMobilePayment} style={{ width: '50px' }} alt='mobile-payment' />
              </div>
              <hr />
              <div style={{ textAlign: 'left' }}>
                <input type='radio' name='jenis_kelamin' value='perempuan' /> Transfer Bank&nbsp;
                <img src={ImgBCA} style={{ width: '80px', marginLeft: '20px' }} alt='BCA' />
                &nbsp;
                <img src={ImgBRI} style={{ width: '100px', marginLeft: '10px' }} alt='BRI' />
                &nbsp;
                <img src={ImgMandiri} style={{ width: '100px' }} alt='Mandiri' />
              </div>
              <hr />
              <div style={{ textAlign: 'left' }}>
                <input type='radio' name='jenis_kelamin' value='perempuan' /> Transfer Virtual Akun
                &nbsp;
                <img src={ImgBCA} style={{ width: '80px', marginLeft: '20px' }} alt='BCA' />
                &nbsp;
                <img src={ImgBRI} style={{ width: '100px', marginLeft: '10px' }} alt='BRI' />
                &nbsp;
                <img src={ImgMandiri} style={{ width: '100px' }} alt='Mandiri' />
              </div>
            </Alert>
            <hr />
            <Alert style={{ backgroundColor: '#F5EAD1', border: '1px solid #A48868' }}>
              Mohon segera lakukan pembayaran
            </Alert>
          </Alert>
        </Col>

        <Col>
          <Alert
            style={{
              backgroundColor: '#E4DCCF',
              color: 'black',
              marginTop: '5px',
              marginRight: '10px',
              border: '1px solid #A48868',
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
              <p style={{ textAlign: 'left' }}>
                <div className='d-flex align-items-start'>
                  <input
                    type='checkbox'
                    name='jenis_kelamin'
                    value='perempuan'
                    className='me-3 mt-2'
                  />
                  <div>
                    <div>Bayar sebagian dengan saldo.</div>
                    <div>Saldo anda : Rp 90.000</div>
                  </div>
                </div>
              </p>
            </Alert>
            <hr />
            <Alert style={myStyle}>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Harga Barang : </p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>Rp {produk.harga}</Col>
              </Row>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Biaya Kirim & Penanganan :</p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>Rp 40.000</Col>
              </Row>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Biaya Perlindungan Barang :</p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>Rp 500</Col>
              </Row>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Biaya Pelayanan :</p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>Rp 2.500</Col>
              </Row>
            </Alert>
            <hr />
            <Row>
              <Col style={{ textAlign: 'left' }}>
                <p>Total Harga :</p>
              </Col>
              <Col style={{ textAlign: 'Right', color: 'red' }}>
                <b>Rp {produk.harga * 2}</b>
              </Col>
            </Row>
            <div className='d-grid gap-2'>
              <Button
                onClick={() => setModalShow(true)}
                variant='outline-danger'
                size='lg'
                style={{ height: '50px' }}
              >
                <p style={{ fontSize: '15px', fontFamily: 'sans-serif' }}>Bayar</p>
              </Button>
              <CenteredModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </Alert>
        </Col>
      </Row>
    </div>
  );
}

function CenteredModal(props) {
  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Transaksi;
