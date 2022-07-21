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
import Confirm from './../commons/Confirm';

export default function NavBar() {
  const { auth, dispatch } = useContext(AuthContext);
  const { keranjang, dispatch: dispatchKeranjang } = useContext(KeranjangContext);
  const [total, setTotal] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmTitle] = useState('Konfirmasi');
  const [confirmText, setConfirmText] = useState('');

  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);
  const handleConfirmConfirm = () => {
    dispatch({
      type: LOGOUT,
    });
    dispatchKeranjang({
      type: DELETE_KERANJANG_LOCAL,
    });
    setShowConfirm(false);
  };
  const handleLogout = () => {
    setConfirmText('Anda yakin mau keluar?');
    setShowConfirm(true);
  };

  useEffect(() => {
    if (keranjang === undefined) {
      setTotal((t) => 0);
      return;
    }
    setTotal((t) => keranjang.data.length);
  }, [keranjang]);

  return (
    <div>
      <Confirm
        show={showConfirm}
        title={confirmTitle}
        text={confirmText}
        handleShow={handleShowConfirm}
        handleClose={handleCloseConfirm}
        handleConfirm={handleConfirmConfirm}
      />
      <Navbar sticky='top' bg='primary' variant='dark' style={{ zIndex: 1 }}>
        <Container fluid>
          <LinkContainer to='/'>
            <Navbar.Brand className='px-3'>SKILVUL-FLORIST</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
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
                    <>
                      <img
                        className='rounded-circle'
                        src={auth.user.avatar}
                        height='32'
                        alt='Avatar'
                      />
                      <span>{auth.user.name}</span>
                    </>
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
                  <LinkContainer to='/pesanan'>
                    <NavDropdown.Item>Pesanan</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown align='end' title='Masuk' className='pe-3'>
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
