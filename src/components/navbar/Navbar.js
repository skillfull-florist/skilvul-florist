import "../../App.css";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand className="px-3">SKILVUL-FLORIST</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Product</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavDropdown title="Masuk">
                <LinkContainer to="login">
                  <NavDropdown.Item>Login</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="register">
                  <NavDropdown.Item>Register</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            {/* <div className="d-flex">
              <ButtonGroup>
                <Button variant="outline-primary" size="sm">
                  <LinkContainer to="/login">
                    <Nav.Link className="px-0 mx-0">Login</Nav.Link>
                  </LinkContainer>
                </Button>

                <Button variant="outline-primary" size="sm">
                  <LinkContainer to="/register">
                    <Nav.Link className="px-0 mx-0">Sign Up</Nav.Link>
                  </LinkContainer>
                </Button>
              </ButtonGroup>
            </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
