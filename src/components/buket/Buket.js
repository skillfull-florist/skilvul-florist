import React, { useState, useEffect } from "react";
import axios from "axios"; // pengganti fetch
import { Card, Container, Row, Col, Button } from "react-bootstrap"
const Buket = () => {
    const [bukets, setBukets] = useState([]);

    useEffect(() => {
        const getDataBuket = async () => {
            // axios
            const result = await axios.get(
                "https://62bd2977bac21839b6fd61be.mockapi.io/api/buket/"
            );
            console.log(result.data);
            setBukets(result.data);

        };
        console.log("useEffect");
        getDataBuket();
    }, []);

    return (
        <div>
            <Container>
                <br />
                <h1 className="text-center">BUKET</h1>
                <br />
                <Row className="justify-content">
                    {bukets.map((item, index) => {
                        return (

                            <Col mb={3} md={4} id="trending" key={index} >
                                <div className="pt-4 m-1 text-white">
                                    <Card className="card text-dark border-dark">
                                        <Card.Img src={item.gambar} height="300" />
                                        <Card.Body>
                                            <Card.Title>{item.nama}</Card.Title>
                                            <Card.Text>
                                                {item.harga}
                                            </Card.Text>
                                            <Button variant="outline-info">Detail</Button>
                                        </Card.Body>
                                    </Card></div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </div>
    );
};

export default Buket;
