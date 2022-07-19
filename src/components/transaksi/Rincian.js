import React from 'react';
import { Alert, Row, Col } from 'react-bootstrap';
import poto1 from '../../assets/bca.jpg';
import CoutdownRincian from './CoutdownRincian';
import CardRincian from './CardRincian';

const Rincian = () => {
  const endTime = new Date().getTime() + 600000 * 24;
  const [timeLeft, setEndTime] = CoutdownRincian(endTime);

  const hours = Math.floor(timeLeft / 600000) % 60;
  const minutes = Math.floor(timeLeft / 60000) % 60;
  const second = Math.floor(timeLeft / 1000) % 60;

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
        <Alert.Heading style={{ textAlign: 'left' }}>Belum Bayar</Alert.Heading>
        <hr />
        <p>{`${hours}:${minutes}:${second}`}</p>
        {/* <button onClick={() => setEndTime(endTime)}>RESET</button> */}
        <hr />

        <CardRincian />
      </Alert>
    </div>
  );
};

export default Rincian;
