// import React from "react";

// export default function Services() {
//   return (
//     <div style={{ margin: 10, border : '10px' }}>
//       <h1>Toko Bunga di Bogor</h1>
//       Kami Nidira Florist melayani pemesanan berbagai jenis rangkaian bunga untuk pengiriman ke seluruh Kota Bogor dan sekitarnya. Kami menghadirkan karangan bunga untuk beragam acara seperti Anniversary, Congratulations, Duka Cita,
//       Pernkahan dan event tertentu seperti Valentine, Romantis dan lainnya. Untuk mempermudah anda dalam mengirim bunga sebagai hadiah kepada kerabat atau orang yang anda sayangi, anda hanya hanya perlu menghubungi kami tanpa harus
//       repot-repot mendatangi toko bunga di Bogor.
//     </div>
//   );
// }

import Card from "react-bootstrap/Card";

function BorderExample() {
  return (
    <div>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>SKILVUL FLORIST</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Pernkahan dan event tertentu seperti Valentine, Romantis dan lainnya. Untuk mempermudah anda dalam mengirim bunga sebagai hadiah kepada kerabat atau orang yang anda sayangi, anda hanya hanya perlu menghubungi kami tanpa harus
            repot-repot mendatangi toko bunga di Bogor.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="success" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Success Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="danger" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Danger Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="warning" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Warning Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="info" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Info Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="light" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default BorderExample;
