import GmapsAddress from './Gmaps';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Services() {
  return (
    <div style={{ margin: 10 }}>
      <Container className='d-flex justify-content-center mt-3'>
        <div className='flex-column'>
          <h2 className='text-danger'>
            Our <span className='text-black'>Services</span>
          </h2>
          <hr />
          <Card bg='dark' border='primary' className='text-white mt-5'>
            <Card.Body>
              <Container fluid>
                <Card.Text>
                  Jelajahi koleksi produk - produk kami untuk semua momen anda. Baik
                  untuk hari ulang tahun, perayaan, hari spesial, hari berkabung ataupun
                  sekedar hobi dan untuk koleksi Anda kami siap melayani kebutuhan bunga
                  Anda.
                </Card.Text>
              </Container>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Container className='d-flex justify-content-center my-5'>
        <Card bg='dark' border='primary' className='text-white'>
          <Card.Body>
            <Container fluid>
              <Card.Text>
                Dengan pengalaman lebih dari 30 tahun Anda dapat yakin dan percayakan
                kebutuhan bunga kepada kami.
              </Card.Text>
            </Container>
          </Card.Body>
        </Card>
      </Container>
      <Container className='d-flex justify-content-center my-5'>
        <Card bg='dark' border='primary' className='text-white'>
          <Card.Body>
            <Container fluid>
              <Card.Text>
                Kami bekerjasama dengan desainer karangan bunga terbaik dan bunga segar
                terpilih dan berkualitas untuk menjamin kepuasan Anda
              </Card.Text>
            </Container>
          </Card.Body>
        </Card>
      </Container>
      <Container className='d-flex justify-content-center my-5'>
        <div>
          <h2 className='text-danger'>
            Find <span className='text-black'>Us</span>
          </h2>
          <hr />
          <GmapsAddress />
          Jakarta, Indonesia
        </div>
      </Container>
    </div>
  );
}
