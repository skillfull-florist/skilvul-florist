import { useState, useEffect } from 'react';
import mockapi from './../../apis/mockapi';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { TanamanHiasItem } from './TanamanHiasItem';
import img1 from '../../assets/buket.png';
import img2 from '../../assets/hias.png';

const TanamanHias = () => {
  const [tanamanHiasAll, setTanamanHiasAll] = useState([]);
  const [tanamanHiasFound, setTanamanHiasFound] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchNama, setSearchNama] = useState('');

  const handleSearchChange = (e) => {
    setSearchNama(e.target.value.trim());

    if (!loading && searchNama.length > 0) {
      const found = tanamanHiasAll.filter((item) =>
        item.nama.toLowerCase().includes(searchNama.toLowerCase()),
      );
      if (found.length > 0) {
        setTanamanHiasFound(found);
        return;
      }
    }
  };

  useEffect(() => {
    if (searchNama.length === 0) {
      setTanamanHiasFound(tanamanHiasAll);
    }
  }, [searchNama]);

  useEffect(() => {
    const getDataTanamanHias = async () => {
      setLoading(true);
      // axios
      const result = await mockapi.get('/tanamanhias/');

      setTanamanHiasAll(result.data);
      setTanamanHiasFound(result.data);
      setLoading(false);
    };

    getDataTanamanHias();
  }, []);

  return (
    <div className='mt-3 mb-5'>
      <Container>
        <br />
        <h2 className='text-center'>Tanaman Hias</h2>
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
              <img style={{ width: '120px' }} src={img1} alt='buket' />
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
              <img style={{ width: '120px' }} src={img2} alt='hias' />
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
          {loading ? (
            <h4>loading...</h4>
          ) : (
            tanamanHiasFound.map((item, index) => (
              <TanamanHiasItem key={index} tanamanHias={item} />
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default TanamanHias;
