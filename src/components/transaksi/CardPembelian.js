import {Alert, Row, Col,OverlayTrigger, Popover, Button, Modal} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CardPembelian = () => {
    const myStyle= {
        backgroundColor:'#fff',
        color:'black',
        border: "2px solid #418459"
      }
      const navigate = useNavigate();

      const [produk, setProduk]=useState([]);

  const params = useParams();
  useEffect(() => {
    const getTanamanHiasById = async () => {
      
      // axios
      let url = "";
      if (params.type === "buket") {
        url = `https://62bd2977bac21839b6fd61be.mockapi.io/api/buket/${params.id}`;
      }

      if (params.type === "tanamanhias") {
        url = `https://62bd2977bac21839b6fd61be.mockapi.io/api/tanamanhias/${params.id}`;
      }

      const result = await axios.get(url);
      console.log(result.data);
      setProduk(result.data)
    };

    getTanamanHiasById();
  }, []);

  return (
    <div>
        <Alert style={{backgroundColor:'#E9F7E8', color:'black',marginTop:'5px', marginRight:'10px',border: "1px solid #418459"}}> 
          <Alert.Heading style={{textAlign:'left'}}>Ringkasan Pembelian</Alert.Heading>
          <hr />
          <p style={{textAlign:'left'}}><a href="https://react-bootstrap.github.io/components/overlays/#tooltips">Punya kode voucher?</a></p>
          <hr />
          <Alert style={myStyle}>
            <p style={{textAlign:'left'}}><input type='checkbox' name='jenis_kelamin' value='perempuan' /> Bayar sebagian dengan saldo.Saldo anda : Rp 90.000</p>
          </Alert>
          <hr/>
          <Alert style={myStyle}>
            <Row>
              <Col style={{textAlign:'left'}}>
              <p>Harga Barang : </p>
              </Col>
              <Col style={{textAlign:'Right'}}>
              Rp {produk.harga}
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
              <b>Rp {produk.harga*2}</b>
            </Col>
          </Row>

          <div className="d-grid gap-2">
            <Button onClick={() => navigate("/rincian")} variant="outline-danger" size="lg" style={{height:'50px'}}>
              <p style={{fontSize:'15px', fontFamily:"sans-serif"}}>Bayar</p>
            </Button>
          </div>
        </Alert>
    </div>
  )
}

export default CardPembelian