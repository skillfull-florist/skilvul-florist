import React from 'react';
import HomeCarousel from './Carousel';
import Kategori from './Kategori';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid className='m-0 p-0'>
      <Row className='d-flex'>
        <Col lg={8} className='ms-4 my-3'>
          <HomeCarousel />
        </Col>
        <Col xs>
          <Kategori />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
