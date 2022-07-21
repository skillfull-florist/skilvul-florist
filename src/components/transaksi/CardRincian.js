import { useState, useEffect, useContext } from 'react';
import { Alert, Button, Row, Col } from 'react-bootstrap';
import ModalRincian from './ModalRincian';
import { KeranjangContext } from './../../contexts/KeranjangContext';
import { AuthContext } from './../../contexts/AuthContext';
import * as Helper from './../../helpers/TransaksiHelper';
import { DELETE_KERANJANG } from './../../contexts/ContextConsts';

const QUICK_BUY = 'QUICK_BUY';
const KERANJANG_BUY = 'KERANJANG_BUY';

const myStyle = {
  backgroundColor: '#fff',
  color: 'black',
  border: '2px solid #418459',
};

const CardRincian = () => {
  const { auth } = useContext(AuthContext);
  const [dataBeli, setDataBeli] = useState(null);
  const [total, setTotal] = useState(-1);
  const [isKeranjang, setIsKeranjang] = useState(false);
  const { keranjang, dispatch } = useContext(KeranjangContext);

  useEffect(() => {
    const dataBeliLocalQuickBuy = JSON.parse(localStorage.getItem(QUICK_BUY));
    const dataBeliLocalKeranjangBuy = JSON.parse(localStorage.getItem(KERANJANG_BUY));
    if (dataBeliLocalQuickBuy !== null) {
      setDataBeli(dataBeliLocalQuickBuy);
      setIsKeranjang(false);
    } else if (dataBeliLocalKeranjangBuy !== null) {
      if (dataBeliLocalKeranjangBuy.produk.data.length > 1) {
        const newTotal = dataBeliLocalKeranjangBuy.produk.data.reduce((sum, item) => {
          if (typeof sum === 'object') {
            return sum.jumlah * sum.harga + item.jumlah * item.harga;
          }
          return sum + item.jumlah * item.harga;
        });
        setTotal(newTotal);
      }
      if (dataBeliLocalKeranjangBuy.produk.data.length === 1) {
        setTotal(
          dataBeliLocalKeranjangBuy.produk.data[0].jumlah *
            dataBeliLocalKeranjangBuy.produk.data[0].harga,
        );
      }
      if (dataBeliLocalKeranjangBuy.produk.data.length === 0) {
        setTotal(0);
      }
      setDataBeli(dataBeliLocalKeranjangBuy);
      setIsKeranjang(true);
    }
  }, []);

  const handleLanjut = () => {
    setModalShow(true);
    let payload = {
      id: auth.user.id,
      idUser: auth.user.id,
      data: [{ ...dataBeli.produk }],
    };
    if (isKeranjang) {
      payload = dataBeli.produk;
    }
    Helper.postTransaksi(payload).then((data) => {
      if (isKeranjang) {
        dispatch({
          type: DELETE_KERANJANG,
          payload: data,
        });
        localStorage.removeItem(KERANJANG_BUY);
      }
      localStorage.removeItem(QUICK_BUY);
    });
  };
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
                {isKeranjang ? (
                  dataBeli.produk.data.map((item, idx) => (
                    <Row className='my-2' key={idx}>
                      <Col>
                        <div className='d-flex'>
                          <img
                            src={item.gambar}
                            style={{ width: '64px' }}
                            alt='produk'
                          />
                          <div className='ms-3' style={{ textAlign: 'left' }}>
                            <h5>{item.nama}</h5>
                            <p>Jumlah: {item.jumlah}</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  ))
                ) : (
                  <>
                    <Col>
                      <div className='d-flex'>
                        <img
                          src={dataBeli.produk.gambar}
                          style={{ width: '64px' }}
                          alt='produk'
                        />
                        <div className='ms-3' style={{ textAlign: 'left' }}>
                          <h5>{dataBeli.produk.nama}</h5>
                          <p>Jumlah: 1</p>
                        </div>
                      </div>
                    </Col>
                  </>
                )}
              </Row>
            </Alert>
            <hr />
            <Alert style={myStyle}>
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Harga Barang: </p>
                </Col>
                <Col style={{ textAlign: 'Right' }}>
                  Rp {isKeranjang ? total : dataBeli.produk.harga}
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
              <hr />
              <Row>
                <Col style={{ textAlign: 'left' }}>
                  <p>Total Harga:</p>
                </Col>
                <Col style={{ textAlign: 'Right', color: 'red' }}>
                  <b>
                    Rp{' '}
                    {(isKeranjang ? total : dataBeli.produk.harga) + 40000 + 2500 + 500}
                  </b>
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

            <ModalRincian
              keranjang={isKeranjang.toString()}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <div className='d-grid gap-2'>
              <Button
                onClick={handleLanjut}
                // onClick={handleLanjut}
                variant='outline'
                size='lg'
                style={{
                  height: '50px',
                  color: '#67A478',
                  border: '1px solid #67A478',
                }}
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
