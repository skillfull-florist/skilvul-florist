import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mockapi from './../../apis/mockapi';
import CardPembayaran from './CardPembayaran';
import CardPembelian from './CardPembelian';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Transaksi() {
  const params = useParams();
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    const getProdukById = async () => {
      // axios
      let url = '';
      if (params.type === 'buket') {
        url = `/buket/${params.id}`;
      }

      if (params.type === 'tanamanhias') {
        url = `/tanamanhias/${params.id}`;
      }

      const result = await mockapi.get(url);

      setProduk(result.data);
    };

    getProdukById();
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
