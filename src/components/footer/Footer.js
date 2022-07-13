import React from 'react';
import { Container, Navbar, Col, Row, Button, Form } from 'react-bootstrap';

export default function App() {
  return (
    <Navbar bg='primary' variant='dark'>
      <Container className='p-4 pb-0'>
        <Form.Group action=''>
          <Row className='d-flex justify-content-center'>
            <Col size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </Col>

            <Col md='5' size='12' className='mb-4 mb-md-0'>
              <Form.Control type='text' id='formEmail' label='Email address' />
            </Col>

            <Col size='auto' className='mb-4 mb-md-0'>
              <Button variant='outline-primary'>Subscribe</Button>
            </Col>
          </Row>
        </Form.Group>
      </Container>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright
        <br />
        <a className='text-white' href='/'>
          skilvul-florist.com
        </a>
      </div>
    </Navbar>
  );
}
