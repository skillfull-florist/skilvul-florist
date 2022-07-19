import { useNavigate } from "react-router-dom";
import img1 from '../../assets/bq1.png';
import img2 from '../../assets/bq2.png';
import promo1 from '../../assets/promo1.png';
import promo2 from '../../assets/promo2.png';
import promo3 from '../../assets/promo3.png';
import {Button, Card, Row, Col, Alert, Carousel} from "react-bootstrap";

function Kategori() {
  const navigate = useNavigate();

  return (
    <div>
      <Row>
        <Col style={{marginTop:"20px", alignItems:'center', marginLeft:"5px", marginRight:"5px"}}>
        <Alert
              style={{
                backgroundColor: '#E9F7E8',
                border: '#fff',
                borderRadius: '0',
                display: 'flex',
                width:350,
                height: 150
              }}
            >
            <Carousel md={0} style={{width:350}}>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-50"
                  src={promo1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5 style={{textShadow:"3px 2px 1px grey"}}>Promo disc 5% </h5>
                  <hr/>
                  <p style={{backgroundColor:"#67a47869", fontSize:"10px"}}>Untuk pembelian pertama anda.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-50"
                  src={promo2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                <h5 style={{textShadow:"3px 2px 1px grey"}}>Buy 1 get 1 </h5>
                  <hr/>
                  <p style={{backgroundColor:"#67a47869", fontSize:"10px"}}>Untuk setiap pembelian Aglaonema.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-50"
                  src={promo3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5 style={{textShadow:"3px 2px 1px grey"}}>Min. 200 rb </h5>
                  <hr/>
                  <p style={{backgroundColor:"#67a47869", fontSize:"10px"}}>Voucher gratis ongkir untuk pembelian minimal 200 ribu.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </Alert>

        <Alert
              style={{
                backgroundColor: '#E9F7E8',
                border: '#fff',
                borderRadius: '0',
                display: 'flex',
                width:350,
              }}
            >
              <img style={{ width: '150px' , padding:0, margin:0}} src={img1} />
              <Row>
                <h6 style={{ color: 'black' }}>Hand Bouquet</h6>
                <hr />
                <p style={{ color: 'black', fontSize: '10px' }}>
                  Mari telusuri berbagai produk bouqueet terbaik kami!
                </p>
                <Button onClick={() => navigate("/buket")} style={{backgroundColor:"#67A478",  borderRadius:'0', border: "1px solid #67A478"}}>Cari Produk</Button>
              </Row>
            </Alert>

            <Alert
              style={{
                backgroundColor: '#E9F7E8',
                border: 'white',
                borderRadius: '0',
                display: 'flex',
                width:350
              }}
            >
              <img style={{ width: '150px' }} src={img2} />
              <Row>
                <h6 style={{ color: 'black' }}>Tanaman Hias</h6>
                <hr />
                <p style={{ color: 'black', fontSize: '10px' }}>
                  Hiasi halaman rumah anda dengan berbagai tanaman hias segar dari toko kami.
                </p>
                <Button onClick={() => navigate("/tanamanhias")} style={{backgroundColor:"#67A478",  borderRadius:'0', border: "1px solid #67A478"}}>Cari Produk</Button>
              </Row>
            </Alert>
          </Col>
      </Row>
    </div>
  );
}

export default Kategori;
