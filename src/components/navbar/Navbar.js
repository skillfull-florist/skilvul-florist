import { useContext, useState, useEffect } from 'react';
import { AuthContext } from './../../contexts/AuthContext';
import { KeranjangContext } from './../../contexts/KeranjangContext';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LOGOUT, DELETE_KERANJANG_LOCAL } from './../../contexts/ContextConsts';

export default function NavBar() {
  const { auth, dispatch } = useContext(AuthContext);
  const { keranjang, dispatch: dispatchKeranjang } = useContext(KeranjangContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (keranjang === undefined) {
      setTotal((t) => 0);
      return;
    }
    setTotal((t) => keranjang.data.length);
  }, [keranjang]);

  const handleLogout = () => {
    if (window.confirm('Yakin keluar?') === true) {
      dispatch({
        type: LOGOUT,
      });
      dispatchKeranjang({
        type: DELETE_KERANJANG_LOCAL,
      });
    }
  };

  return (
    <div>
      <Navbar bg='primary' variant='dark'>
        <Container fluid>
          <LinkContainer to='/'>
            <Navbar.Brand className='px-3'>SKILVUL-FLORIST</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className='justify-content-end'>
              {auth.isAuthenticated && auth.user !== null ? (
                <NavDropdown
                  align='end'
                  title={
                    <img
                      className='rounded-circle'
                      src={auth.user.avatar}
                      height='32'
                      alt='Avatar'
                    />
                  }
                >
                  <LinkContainer to='/profil'>
                    <NavDropdown.Item>Profil</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/keranjang'>
                    <NavDropdown.Item>
                      Keranjang <Badge bg='secondary'>{total}</Badge>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title='Masuk' className='pe-3'>
                  <LinkContainer to='/login'>
                    <NavDropdown.Item>Login</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <NavDropdown.Item>Register</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
