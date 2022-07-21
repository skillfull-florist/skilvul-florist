import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockapi from './../../apis/mockapi';
import CardPembayaran from './CardPembayaran';
import CardPembelian from './CardPembelian';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as Helper from './../../helpers/KeranjangHelper';

function Transaksi() {
  const navigate = useNavigate();
  const params = useParams();
  const [produk, setProduk] = useState(null);
  const [keranjang, setKeranjang] = useState(false);

  useEffect(() => {
    const getTransaksiById = async () => {
      let url = '';
      if (params.type === 'buket') {
        url = `/buket/${params.id}`;
        const result = await mockapi.get(url);
        setProduk(result.data);
        setKeranjang(false);
        return;
      }

      if (params.type === 'tanamanhias') {
        url = `/tanamanhias/${params.id}`;
        const result = await mockapi.get(url);
        setProduk(result.data);
        setKeranjang(false);
        return;
      }

      if (params.type === 'keranjang') {
        const result = await Helper.getKeranjangByUserId(params.id);
        setProduk(result);
        setKeranjang(true);
        return;
      }

      // navigate('/');
    };

    getTransaksiById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div>
      <Row>
        <Col>
          <CardPembelian produk={produk} isKeranjang={keranjang} />
        </Col>
        <Col>
          <CardPembayaran produk={produk} isKeranjang={keranjang} />
        </Col>
      </Row>
    </div>
  );
}

export default Transaksi;
