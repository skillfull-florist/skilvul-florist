import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/shopping-cart.png"

export const BuketItem = ({ bukets }) => {
  const navigate = useNavigate();
  return (
    <Col mb={3} md={4}>
      <div className="pt-4 m-1 text-white">
        <Card className="card text-dark" style={{backgroundColor: "#E9F7E8"}}>
          <Card.Img src={bukets.gambar} height="300" />
          <Card.Body>
            <Card.Title>{bukets.nama}</Card.Title>
            <Card.Text>{bukets.harga}</Card.Text>
            <Button style={{backgroundColor:"#67A478",  borderRadius:'0', border: "1px solid #67A478"}} onClick={() => navigate(`/transaksi/buket/${bukets.id}`)}>
              Beli Langsung
            </Button>
            <Button variant="outline" style={{ borderRadius:'0', border: "1px solid #418459"}}><img src={img1} style={{width:'20px'}}/></Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};
