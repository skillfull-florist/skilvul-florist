import { Row, Col, Toast } from 'react-bootstrap';

const ToastTanaman = ({ show }) => {
  return (
    <Row>
      <Col xs={6}>
        <Toast show={show} delay={1500} autohide>
          <Toast.Body>Produk ditambahkan!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default ToastTanaman;
