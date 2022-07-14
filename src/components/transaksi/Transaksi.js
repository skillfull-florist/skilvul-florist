import {Alert, Row, Col,OverlayTrigger, Popover, Button, Modal} from 'react-bootstrap';
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardPembayaran  from "./CardPembayaran"
import CardPembelian from "./CardPembelian"

function Transaksi() {


  return (
    <div>
    <Row>
      <Col>
        <CardPembelian/>
      </Col>
      <Col >
        <CardPembayaran/>
      </Col>
    </Row>
    </div>
  );
}

export default Transaksi;