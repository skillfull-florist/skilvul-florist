import { Alert, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import poto1 from '../../assets/1.jpg';
import poto2 from '../../assets/mobile-payment.png';
import poto3 from '../../assets/2.png';
import poto4 from '../../assets/3.jpg';
import gojek from '../../assets/gojek.png';
import grab from '../../assets/grab.jpg';
import MyVerticallyCenteredModal from './Modal1';
import MyVerticallyCenteredModal1 from './Modal2';
import MyVerticallyCenteredModal2 from './Modal3';

const QUICK_BUY = 'QUICK_BUY';

const CardPembayaran = ({ produk }) => {
  const navigate = useNavigate();
  //data bayar
  const [dataBeli, setDataBeli] = useState({ produk, pembayaran: '', jasakirim: '' });
  const [formKosong, setFormKosong] = useState({});
  const [isLengkap, setIsLengkap] = useState(false);

  const handleChange = (e) => {
    setDataBeli({ ...dataBeli, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // setFormKosong(validasi(dataBeli));
    // setIsLengkap(true);
    const data = JSON.stringify({ ...dataBeli, produk });
    localStorage.setItem(QUICK_BUY, data);
    // console.log('Lanjut bayar');
    navigate('/rincian');
  };

  const myStyle = {
    backgroundColor: '#fff',
    color: 'black',
    border: '2px solid #418459',
  };

  //MODAL
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  return (
    <div>
      <Alert
        style={{
          backgroundColor: '#E9F7E8',
          color: 'black',
          marginTop: '5px',
          marginLeft: '10px',
          border: '1px solid #418459',
        }}
      >
        <Alert.Heading style={{ textAlign: 'left' }}>
          Pilih Metode Pembayaran
        </Alert.Heading>{' '}
        <hr />
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <MyVerticallyCenteredModal1
          show={modalShow1}
          onHide={() => setModalShow1(false)}
        />
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />
        <Alert style={myStyle}>
          <p>Pilih metode pembayaran</p>
          <hr />
          <p style={{ textAlign: 'left' }}>
            <input
              type='radio'
              onClick={() => setModalShow(true)}
              name='pembayaran'
              value='Florist-pay'
              onChange={handleChange}
            />{' '}
            Florist-pay &nbsp;
            <img src={poto2} style={{ width: '50px' }} alt='poto2' />
          </p>
          <hr />
          <p style={{ textAlign: 'left' }}>
            <input
              type='radio'
              onClick={() => setModalShow1(true)}
              name='pembayaran'
              value='Transfer Bank'
              onChange={handleChange}
            />{' '}
            Transfer Bank &nbsp;
            <img
              src={poto1}
              style={{ width: '80px', marginLeft: '20px' }}
              alt='poto1'
            />
            &nbsp;
            <img
              src={poto3}
              style={{ width: '100px', marginLeft: '10px' }}
              alt='poto3'
            />
            &nbsp;
            <img src={poto4} style={{ width: '100px' }} alt='poto4' />
          </p>
          {/* <p>{formKosong.pembayaran}</p> */}
          <hr />
          <p style={{ textAlign: 'left' }}>
            <input
              type='radio'
              onClick={() => setModalShow2(true)}
              name='pembayaran'
              value='Virtual account'
              onChange={handleChange}
            />{' '}
            Transfer Virtual Akun &nbsp;
            <img
              src={poto1}
              style={{ width: '80px', marginLeft: '20px' }}
              alt='poto1'
            />
            &nbsp;
            <img
              src={poto3}
              style={{ width: '100px', marginLeft: '10px' }}
              alt='poto3'
            />
            &nbsp;
            <img src={poto4} style={{ width: '100px' }} alt='poto4' />
          </p>
        </Alert>
        <hr />
        <Alert style={myStyle}>
          <p>Pilih jasa kirim anda</p>
          <hr />
          <p style={{ textAlign: 'left' }}>
            <input type='radio' name='jasakirim' value='grab' onChange={handleChange} />{' '}
            GRAB &nbsp;
            <img src={grab} style={{ width: '50px' }} alt='grab' />
          </p>
          <hr />
          <p style={{ textAlign: 'left' }}>
            <input
              type='radio'
              name='jasakirim'
              value='gojek'
              onChange={handleChange}
            />{' '}
            GOJEK &nbsp;
            <img
              src={gojek}
              style={{ width: '30px', marginLeft: '20px' }}
              alt='gojek'
            />
            &nbsp;
          </p>
        </Alert>
        <hr />
        <div className='d-grid gap-2'>
          <Button
            onClick={handleSubmit}
            variant='outline'
            size='lg'
            style={{ height: '50px', color: '#67A478', border: '1px solid #67A478' }}
          >
            <p style={{ fontSize: '15px', fontFamily: 'sans-serif' }}>Buat Pesanan</p>
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default CardPembayaran;
