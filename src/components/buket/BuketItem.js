import React from 'react'
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const BuketItem = ({ bukets }) => {
    const navigate = useNavigate();
    return (
        <Col mb={3} md={4}>
            <div className="pt-4 m-1 text-white">
                <Card className="card text-dark border-dark">
                    <Card.Img src={bukets.gambar} height="300" />
                    <Card.Body>
                        <Card.Title>{bukets.nama}</Card.Title>
                        <Card.Text>{bukets.harga}</Card.Text>
                        <Button variant="outline-info" onClick={() => navigate(`/transaksi/${bukets.id}`)}>
                            Beli Langsung
                        </Button>
                        <Button variant="outline-info">Masukkan keranjang</Button>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};

