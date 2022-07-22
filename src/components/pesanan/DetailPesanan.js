import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import ModalDetailPesanan from './ModalDetailPesanan';
import * as Helper from './../../helpers/PesananHelper';

const DETAIL_PESANAN = 'DETAIL_PESANAN';
const DetailPesanan = () => {
  const [pesanan, setPesanan] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setPesanan(JSON.parse(sessionStorage.getItem(DETAIL_PESANAN)));
  }, []);
  return (
    <Container fluid>
      <Row className='pt-2'>
        <Col md={12}>
          <h1>Detail Pesanan</h1>
        </Col>
        {pesanan !== null ? (
          <Col md={12}>
            <h5>{Helper.getDate(pesanan.createdAt)}</h5>
          </Col>
        ) : (
          <></>
        )}
      </Row>
      <Row className='pt-5'>
        <Col md={12}>
          <div>
            {pesanan !== null ? (
              <div>
                <ModalDetailPesanan
                  alamat={''}
                  pesanan={pesanan}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <Table responsive id='tabel-keranjang'>
                  <thead>
                    <tr>
                      <th>Gambar</th>
                      <th>Nama Produk</th>
                      <th>Harga Satuan</th>
                      <th>Jumlah</th>
                      <th>Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pesanan.data.map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <img src={item.gambar} alt='produk' width='64px' />
                        </td>
                        <td>
                          {item.tipe === 'buket'
                            ? item.tipe.charAt(0).toUpperCase() +
                              item.tipe.slice(1) +
                              ' ' +
                              item.nama
                            : 'Tanaman ' + item.nama}
                        </td>
                        <td>Rp. {item.harga}</td>
                        <td>{item.jumlah}</td>
                        <td>Rp. {item.jumlah * item.harga}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Button onClick={() => setModalShow(true)}>Detail Pengiriman</Button>
              </div>
            ) : (
              <p>Pesanan tidak ada</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPesanan;
