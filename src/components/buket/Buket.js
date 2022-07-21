import { useState, useEffect } from 'react';
import mockapi from './../../apis/mockapi';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { BuketItem } from './BuketItem';
import img1 from '../../assets/buket.png';
import img2 from '../../assets/hias.png';

const Buket = () => {
  const [buketsAll, setBuketsAll] = useState([]);
  const [buketsFound, setBuketsFound] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchNama, setSearchNama] = useState('');

  const handleSearchChange = (e) => {
    setSearchNama(e.target.value.trim());

    if (!loading && searchNama.length > 0) {
      const found = buketsAll.filter((item) =>
        item.nama.toLowerCase().includes(searchNama.toLowerCase()),
      );
      if (found.length > 0) {
        setBuketsFound(found);
        return;
      }
    }
  };

  useEffect(() => {
    if (searchNama.length === 0) {
      setBuketsFound(buketsAll);
    }
  }, [searchNama]);

  useEffect(() => {
    const getDataBuket = async () => {
      setLoading(true);
      // axios
      const result = await mockapi.get('/buket/');
      setBuketsAll(result.data);
      setBuketsFound(result.data);
      setLoading(false);
    };

    getDataBuket();
  }, []);

  return (
    <div className='mt-3 mb-5'>
      <Container>
        <br />
        <h2 className='text-center'>BUKET</h2>
        <hr />
        <Row>
          <Col lg={3} className='mb-5 mb-xl-0'>
            <input type='text' placeholder='search' onChange={handleSearchChange} />
          </Col>
          <Col>
            <Alert
              style={{
                backgroundColor: '#E9F7E8',
                border: '#E9F7E8',
                borderRadius: '0',
                display: 'flex',
                alignItems: 'flex-start',
                height: '100%',
              }}
            >
              <img style={{ width: '120px' }} src={img1} alt='hand bouquet' />
              <Row>
                <h6 style={{ color: 'black' }}>Hand Bouquet</h6>
                <hr />
                <p style={{ color: 'black', fontSize: '10px' }}>
                  Jual buket bunga online (hand bouquet) flannel, matahari, lily, &
                  mawar dengan harga terjangkau di Jakarta Barat untuk acara ulang
                  tahun, wisuda, dll.
                </p>
              </Row>
            </Alert>
          </Col>
          <Col>
            <Alert
              style={{
                backgroundColor: '#E9F7E8',
                border: '#E9F7E8',
                borderRadius: '0',
                display: 'flex',
                alignItems: 'flex-start',
                height: '100%',
              }}
            >
              <img style={{ width: '120px' }} src={img2} alt='decorative plants' />
              <Row>
                <h6 style={{ color: 'black' }}>Decorative Plants</h6>
                <hr />
                <p style={{ color: 'black', fontSize: '10px' }}>
                  Jual Tanaman hias mencakup baik berbentuk terna, merambat, semak,
                  perdu, ataupun pohon.
                </p>
              </Row>
            </Alert>
          </Col>
        </Row>
        <Row className='justify-content'>
          {buketsFound.map((item, index) => (
            <BuketItem key={index} buket={item} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Buket;
