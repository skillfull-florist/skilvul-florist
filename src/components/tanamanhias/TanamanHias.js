import React, { useState, useEffect, } from "react";
import axios from "axios"; // pengganti fetch
import { Card, Container, Row, Col, Button, Modal  } from "react-bootstrap"
const TanamanHias = () => {
    const [TanamanHiass, setTanamanHiass] = useState([]);

    useEffect(() => {
        const getDataTanamanHias = async () => {
            // axios
            const result = await axios.get(
                "https://62bd2977bac21839b6fd61be.mockapi.io/api/tanamanhias/"
            );
            console.log(result.data);
            setTanamanHiass(result.data);

        };
        console.log("useEffect");
        getDataTanamanHias();
    }, []);

    return (
        <div>
            <Container>
                <br />
                <h1 className="text-center">TanamanHias</h1>
                <br />
                <Row className="justify-content">
                    {TanamanHiass.map((item, index) => {
                        return (

                            <Col mb={3} md={4} id="trending" key={index} >
                                <div className="p-2 m-1 text-white">
                                    <Card className="card text-dark border-dark">
                                        <Card.Img src={item.gambar} />
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

export default TanamanHias;
