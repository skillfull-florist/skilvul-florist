import {Alert, Row, Col,OverlayTrigger, Popover, Button, Modal} from 'react-bootstrap';
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import poto1 from "./photos/1.jpg";
import poto2 from "./photos/mobile-payment.png";
import poto3 from "./photos/2.png";
import poto4 from "./photos/3.jpg";
import CardPembayaran  from "./CardPembayaran"
import CardPembelian from "./CardPembelian"

function Transaksi() {


  return (
    <div>
    <Row>
      <Col >
        <CardPembayaran/>
      </Col>

      <Col>
        <CardPembelian/>
      </Col>
    </Row>
    </div>
  );
}

export default Transaksi;