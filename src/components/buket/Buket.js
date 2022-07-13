import React, { useState, useEffect } from "react";
import axios from "axios"; // pengganti fetch
import { Container, Row } from "react-bootstrap"
import { BuketItem } from "./BuketItem";

const Buket = () => {
    const [bukets, setBukets] = useState([]);
    useEffect(() => {
        const getDataBuket = async () => {
            // axios
            const result = await axios.get(
                "https://62bd2977bac21839b6fd61be.mockapi.io/api/buket/"
            );
            setBukets(result.data);
        };

        getDataBuket();
    }, []);

    return (
        <div>
            <Container>
                <br />
                <h1 className="text-center">BUKET</h1>
                <br />
                <Row className="justify-content">
                    {bukets.map((item, index) => (
                        <BuketItem key={index} bukets={item} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Buket;
