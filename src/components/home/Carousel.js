import Img1 from "../../assets/test-img-1.webp";
import Img2 from "../../assets/test-img-2.webp";
import Img3 from "../../assets/test-img-3.webp";
import Img4 from "../../assets/test-img-4.webp";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <Carousel fade style={{ display: "block", width: 640, padding: 30, textShadow: "1px 1px 2px black" }}>
      <Carousel.Item>
        <img className="d-block w-100" src={Img1} alt="Tanaman Hias" />
        <Carousel.Caption>
          <div style={{ padding: "1em", backgroundColor: "#E4DCCFAA" }}>
            <h2>Tanaman Hias</h2>
            <h3>Aneka tanaman hias.</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img2} alt="Tanaman Hias" />
        <Carousel.Caption>
          <div style={{ padding: "1em", backgroundColor: "#E4DCCFAA" }}>
            <h2>Tanaman Hias</h2>
            <h3>Aneka tanaman hias.</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img3} alt="Buket" />
        <Carousel.Caption>
          <div style={{ padding: "1em", backgroundColor: "#E4DCCFAA" }}>
            <h2>Buket</h2>
            <h3>Aneka buket bunga</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img4} alt="Buket" />
        <Carousel.Caption>
          <div style={{ padding: "1em", backgroundColor: "#E4DCCFAA" }}>
            <h2>Buket</h2>
            <h3>Buket bunga spesial</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
