import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockapi from './../../apis/mockapi';
import CardPembayaran from './CardPembayaran';
import CardPembelian from './CardPembelian';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Transaksi() {
  const navigate = useNavigate();
  const params = useParams();
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    if (
      params.type !== 'buket' ||
      params.type !== 'tanamanhias' ||
      params.type !== 'keranjang'
    ) {
      navigate('/PageNotFound');
      return;
    }

    const getTransaksiById = async () => {
      let url = '';
      if (params.type === 'buket') {
        url = `/buket/${params.id}`;
      }

      if (params.type === 'tanamanhias') {
        url = `/tanamanhias/${params.id}`;
      }

      if (params.type === 'keranjang') {
        url = `/keranjang/${params.id}`;
      }

      const result = await mockapi.get(url);

      setProduk(result.data);
    };

    getTransaksiById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div>
      <Row>
        <Col>
          <CardPembelian produk={produk} />
        </Col>
        <Col>
          <CardPembayaran produk={produk} />
        </Col>
      </Row>
    </div>
  );
}

export default Transaksi;
