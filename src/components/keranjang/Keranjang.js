import { Container, Row, Col, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Counter from './Counter';
import React from 'react'
import "./keranjang.css"
const Keranjang = () => {
    return (
        <Container fluid>
            <Row className='pt-2'>
                <Col md={12}>
                    <h1 className="keranjang">Keranjang</h1>
                </Col>
            </Row>
            <Row className='pt-5'>
                <Col md={12}>

                    <Table responsive>
                        <thead>

                            <tr>
                                <th>Gambar</th>
                                <th>Nama Produk</th>
                                <th>Harga Satuan</th>
                                <th>jumlah</th>
                                <th>Harga</th>
                                <th>Hapus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img className="gambar-produk"
                                    src="https://th.bing.com/th/id/OIP.LRLw5Ckr20atRe8e87zQrgHaEo?pid=ImgDet&rs=1"
                                    alt="bunga matahari" />
                                </td>
                                <td>
                                    <h6>Bunga Matahari</h6>

                                    <small>12 buah</small>
                                </td>
                                <td>Rp 600.000</td>
                                <td><Counter /></td>
                                <td>RP 600.000</td>
                                <td>   <Button href="#" className="btn" style={{ color: "red" }}>Hapus</Button>
                                </td>
                            </tr>
                            <tr>
                                <td><img className="gambar-produk"
                                    src="https://th.bing.com/th/id/OIP.LRLw5Ckr20atRe8e87zQrgHaEo?pid=ImgDet&rs=1"
                                    alt="bunga matahari" />
                                </td>
                                <td>
                                    <h6>Bunga Matahari</h6>

                                    <small>12 buah</small>
                                </td>
                                <td>Rp 600.000</td>
                                <td><Counter /></td>
                                <td>RP 600.000</td>
                                <td>   <Button href="#" className="btn" style={{ color: "red" }}>Hapus</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <div className="col-md-5 ms-auto">

                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Total Harga</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>Rp 600.000</td>
                            </tr>
                            <tr className="position-center">
                                <td colSpan={2}>
                                    <Button href="#" >Beli</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>


                </div>

            </Row>
        </Container >


    )
}

export default Keranjang;