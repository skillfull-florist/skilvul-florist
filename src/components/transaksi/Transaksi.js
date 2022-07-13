import {Alert, Row, Col,OverlayTrigger, Popover, Button, Modal} from 'react-bootstrap';
import React from 'react'
import poto1 from "./photos/1.jpg";
import poto2 from "./photos/mobile-payment.png";
import poto3 from "./photos/2.png";
import poto4 from "./photos/3.jpg";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Transaksi() {
  const myStyle= {
    backgroundColor:'#fff',
    color:'black',
    border: "2px solid #A48868"
  }

  const [modalShow, setModalShow] = React.useState(false);


  return (
    <div>
    <Row>
      <Col >
    <Alert style={{backgroundColor:'#E4DCCF', color:'black', marginTop:'5px', marginLeft:'10px', border: "1px solid #A48868"}}>
      <Alert.Heading style={{textAlign:'left'}}>Pilih Metode Pembayaran</Alert.Heading> <hr />

      <Alert style={myStyle}>
      <p style={{textAlign:'left'}}><input type='radio' name='jenis_kelamin' value='pria' /> Florist-pay <space/>
      <img src={poto2} style={{width:'50px'}}/></p>
      <hr />
      <p style={{textAlign:'left'}}><input type='radio' name='jenis_kelamin' value='perempuan' /> Transfer Bank <space/>
      <img src={poto1} style={{width:'80px',  marginLeft:'20px'}}/><space/>
      <img src={poto3} style={{width:'100px', marginLeft:'10px'}}/><space/>
      <img src={poto4} style={{width:'100px'}}/>
      </p>
      <hr />
      <p style={{textAlign:'left'}}><input type='radio' name='jenis_kelamin' value='perempuan' /> Transfer Virtual Akun<space/>
      <img src={poto1} style={{width:'80px',  marginLeft:'20px'}}/><space/>
      <img src={poto3} style={{width:'100px',marginLeft:'10px'}}/><space/>
      <img src={poto4} style={{width:'100px'}}/></p>
    </Alert>
    
    <hr />
      <Alert style={{backgroundColor:"#F5EAD1", border: "1px solid #A48868"}}>
          Mohon segera lakukan pembayaran
      </Alert>

    </Alert>
    </Col>

    <Col>
    <Alert style={{backgroundColor:'#E4DCCF', color:'black',marginTop:'5px', marginRight:'10px',border: "1px solid #A48868"}}> 
      <Alert.Heading style={{textAlign:'left'}}>Ringkasan Pembelian</Alert.Heading><hr />
      <p style={{textAlign:'left'}}><a href="https://react-bootstrap.github.io/components/overlays/#tooltips">
        Punya kode voucher?
      </a></p>
      <hr />
      <Alert style={myStyle}>
      <p style={{textAlign:'left'}}><input type='checkbox' name='jenis_kelamin' value='perempuan' /> Bayar sebagian dengan saldo.Saldo anda : Rp 90.000</p></Alert>
      <hr/>
      <Alert style={myStyle}>
        <Row>
          <Col style={{textAlign:'left'}}>
          <p>Total Harga Barang :</p>
          </Col>
          <Col style={{textAlign:'Right'}}>
          Rp 200.000
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign:'left'}}>
          <p>Biaya Kirim & Penanganan :</p>
          </Col>
          <Col style={{textAlign:'Right'}}>
          Rp 40.000
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign:'left'}}>
          <p>Biaya Perlindungan Barang :</p>
          </Col>
          <Col style={{textAlign:'Right'}}>
          Rp 500
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign:'left'}}>
          <p>Biaya Pelayanan :</p>
          </Col>
          <Col style={{textAlign:'Right'}}>
          Rp 2.500
          </Col>
        </Row>
      </Alert>
      <hr/>
      <Row>
          <Col style={{textAlign:'left'}}>
          <p>Total Harga :</p>
          </Col>
          <Col style={{textAlign:'Right', color:'red'}}>
          <b>Rp 243.000</b>
          </Col>
        </Row>
      <div className="d-grid gap-2">
      <Button onClick={() => setModalShow(true)} variant="outline-danger" size="lg" style={{height:'50px'}}>
        <p style={{fontSize:'15px', fontFamily:"sans-serif"}}>Bayar</p>
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    </Alert>
    </Col>
    </Row>
    </div>
  );
}

export default Transaksi;