import React, { useState, useEffect } from 'react';
import axios from 'axios'; // pengganti fetch
import { Container, Row } from 'react-bootstrap';
import { TanamanHiasItem } from './TanamanHiasItem';

const TanamanHias = () => {
  const [tanamanHias, setTanamanHias] = useState([]);

  useEffect(() => {
    const getDataTanamanHias = async () => {
      // axios
      const result = await axios.get(
        'https://62bd2977bac21839b6fd61be.mockapi.io/api/tanamanhias/',
      );
      setTanamanHias(result.data);
    };

    getDataTanamanHias();
  }, []);

  return (
    <div>
      <Container>
        <br />
        <h1 className='text-center'>TanamanHias</h1>
        <br />
        <Row className='justify-content'>
          {tanamanHias.map((item, index) => (
            <TanamanHiasItem key={index} tanamanHias={item} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TanamanHias;
