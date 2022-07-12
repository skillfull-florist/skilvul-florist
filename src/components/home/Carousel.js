import Img1 from "../../assets/test-img-1.webp";
import Img2 from "../../assets/test-img-2.webp";
import Img3 from "../../assets/test-img-3.webp";
import Img4 from "../../assets/test-img-4.webp";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <Carousel style={{ display: "block", width: 640, padding: 30 }}>
      <Carousel.Item>
        <img className="d-block w-100" src={Img1} alt="Tanaman Hias" />
        <Carousel.Caption>
          <h5>Tanaman Hias</h5>
          <p>Aneka tanaman hias.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img2} alt="Tanaman Hias" />
        <Carousel.Caption>
          <h5>Tanaman Hias</h5>
          <p>Aneka tanaman hias.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img3} alt="Buket" />
        <Carousel.Caption>
          <h5>Buket</h5>
          <p>Aneka buket bunga</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img4} alt="Buket" />
        <Carousel.Caption>
          <h5>Buket</h5>
          <p>Buket bunga spesial</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
