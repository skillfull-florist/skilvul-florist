import { Modal, Button } from 'react-bootstrap';
import * as Helper from './../../helpers/PesananHelper';

function ModalDetailPesanan(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <p>Detail Pengiriman</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h4>Pengiriman</h4>
          <p>Nama penerima: {props.pesanan.alamat.nama}</p>
          <p>Alamat tujuan: {props.pesanan.alamat.alamat}</p>
          <p>Nomor kontak: {props.pesanan.alamat.nohp}</p>
          <hr />
          <h4>Status Pengiriman</h4>
          {props.pesanan.pengiriman.map((item, idx) => (
            <div key={idx} className='d-flex'>
              <p>{Helper.getDate(item.waktu)}</p>
              <span>&nbsp;&rarr;&nbsp;</span>
              <p>{item.status}</p>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDetailPesanan;
