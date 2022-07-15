import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardPembayaran from './CardPembayaran';
import CardPembelian from './CardPembelian';
import mockapi from './../../apis/mocapi';

function Transaksi() {
  const [produk, setProduk] = useState([]);
  const params = useParams();
  useEffect(() => {
    const getTanamanHiasById = async () => {
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

    getTanamanHiasById();
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
