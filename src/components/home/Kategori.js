import Img1 from "../../assets/test-img-1.webp";
import Img4 from "../../assets/test-img-4.webp";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Kategori() {
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={Img1} />
            <Card.Body>
              <Card.Title>Tanaman Hias</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Img4} />
            <Card.Body>
              <Card.Title>Buket</Card.Title>
              <Card.Text>
                Cari dan pilih dari aneka buket terbaik kami.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Kategori;
