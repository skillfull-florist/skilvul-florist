import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const TanamanHiasItem = ({ tanamanHias }) => {
  const navigate = useNavigate();
  return (
    <Col mb={3} md={4}>
      <div className="p-2 m-1 text-white">
        <Card className="card text-dark border-dark">
          <Card.Img src={tanamanHias.gambar} height="300" />
          <Card.Body>
            <Card.Title>{tanamanHias.nama}</Card.Title>
            <Card.Text>{tanamanHias.harga}</Card.Text>
            <Button variant="outline-info" onClick={() => navigate(`/transaksi/tanamanhias/${tanamanHias.id}`)}>
              Beli Langsung
            </Button>
            <Button variant="outline-info">Masukkan keranjang</Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};
