import { Container, Button, Table, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Helper from './../../helpers/PesananHelper';

const DETAIL_PESANAN = 'DETAIL_PESANAN';

const DaftarPesanan = ({ pesanan }) => {
  const navigate = useNavigate();
  const handleDetail = (detail) => {
    sessionStorage.setItem(DETAIL_PESANAN, JSON.stringify(detail));
    navigate('/pesanan/detail');
  };
  return (
    <div>
      <Table responsive id='tabel-keranjang'>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Jumlah Barang</th>
            <th>Total Harga</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pesanan.map((item, idx) => (
            <tr key={idx}>
              <td>{Helper.getDate(item.createdAt)}</td>
              <td>{Helper.getTotalItem(item.data)}</td>
              <td>{Helper.getTotalPrice(item.data)}</td>
              <td>{item.status}</td>
              <td>
                <Button onClick={() => handleDetail(item)}>Detail</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DaftarPesanan;
