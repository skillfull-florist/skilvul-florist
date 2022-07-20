import React from 'react';
import { Container, Navbar, Col, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <Navbar as='div' bg='primary' variant='dark'>
      <Container className='p-4 pb-0'>
        <Form.Group action=''>
          <Row className='d-flex align-items-center'>
            <Col size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2 text-white'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </Col>

            <Col md='5' size='12' className='mb-4 mb-md-0'>
              <Form.Control type='text' id='formEmail' label='Email address' />
            </Col>

            <Col size='auto' className='mb-4 mb-md-0'>
              <Button style={{ color: 'black', backgroundColor: '#E9F7E8' }}>Subscribe</Button>
            </Col>
          </Row>
        </Form.Group>
      </Container>

      <div
        className='text-center p-3 text-white'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        &copy; {new Date().getFullYear()} Copyright
        <br />
        <Link className='text-white' to='/'>
          <p>skilvul-florist.com</p>
        </Link>
      </div>
    </Navbar>
  );
}
