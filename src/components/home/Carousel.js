import Img1 from '../../assets/buket1.png';
import Img2 from '../../assets/buket4.png';
import Img3 from '../../assets/buket5.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { Alert, Row } from 'react-bootstrap';
import './Carousel.css';
import Kategori from './Kategori';

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
          <Carousel fade className=" d-none-none">
            <Carousel.Item>
              <img className='d-block w-100' src={Img1} alt='First slide' />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={Img2} alt='Second slide' />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Kategori />
      </Alert>
    </div>
  );
}

export default HomeCarousel;
