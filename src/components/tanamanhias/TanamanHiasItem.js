import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./TanamanHiasItem.css"
import img1 from "../../assets/shopping-cart.png"

export const TanamanHiasItem = ({ tanamanHias }) => {
  const navigate = useNavigate();
  return (
    <Col mb={3} md={4}>
      <div className="p-2 m-1 text-white">
        <Card className="card text-dark" id="card">
          <Card.Img src={tanamanHias.gambar} height="300" />
          <Card.Body className="card-body">
            <Card.Title>{tanamanHias.nama}</Card.Title>
            <Card.Text>{tanamanHias.harga}</Card.Text>
            <Button style={{backgroundColor:"#67A478",  borderRadius:'0', border: "1px solid #67A478"}} onClick={() => navigate(`/transaksi/tanamanhias/${tanamanHias.id}`)}>
              Beli Langsung
            </Button>
            <Button variant="outline" style={{ borderRadius:'0', border: "1px solid #418459"}}><img src={img1} style={{width:'20px'}}/></Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

