import Img1 from '../../assets/buket1.png';
import Img2 from '../../assets/buket4.png';
import Img3 from '../../assets/buket5.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { Alert, Row } from 'react-bootstrap';
import './Carousel.css';

function HomeCarousel() {
  return (
    <div className='cover'>
      <Alert
        style={{
          backgroundColor: '#FFF',
          border: '#E9F7E8',
          borderRadius: '0',
          display: 'flex',
          padding: 0,
          marginBottom: '0px',
        }}
      >
        <Row style={{ display: 'flex' }}>
          <Carousel fade className='d-none-none'>
            <Carousel.Item>
              <img className='d-block w-100' src={Img1} alt='First slide' />
              <Carousel.Caption>
                <h3>Skilvul-Florist</h3>
                <p>Buket istimewa untuk yang teristimewa.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={Img2} alt='Second slide' />

              <Carousel.Caption>
                <h3>Skilvult-Florist</h3>
                <p>Buket eksotis dan menawan.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={Img3}
                alt='Third slide'
                style={{
                  width: '1400',
                }}
              />

              <Carousel.Caption>
                <h3>Skilvul-Florist</h3>
                <p>Telusuri buket terbaik kami untuk momen spesial Anda.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Alert>
    </div>
  );
}

export default HomeCarousel;
