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
        {props.pesanan.pengiriman.map((item, idx) => (
          <div key={idx} className='d-flex justify-content-around'>
            <p>{Helper.getDate(item.waktu)}</p>
            <span>&rarr;</span>
            <p>{item.status}</p>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDetailPesanan;
