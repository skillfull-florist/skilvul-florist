import React from "react";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";
import { Container, Col, Row, Card } from "react-bootstrap";

const Profil = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile Anda </h1>
      <>
        <br></br>
      </>
      <Row>
        <Col>
          <Card width="200">
            <Card.Img variant="top" src={auth.user.avatar} width="200" />
            <Card.Body>
              <Card.Title>{auth.user.username}</Card.Title>
              <Card.Text>{auth.user.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <h1>History Belanja Anda</h1>
    </div>
  );
};

export default Profil;
