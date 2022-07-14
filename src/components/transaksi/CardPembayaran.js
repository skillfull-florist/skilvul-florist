import {Alert, Row, Col,OverlayTrigger, Popover, Button, Modal} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import poto1 from "./photos/1.jpg";
import poto2 from "./photos/mobile-payment.png";
import poto3 from "./photos/2.png";
import poto4 from "./photos/3.jpg";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p>Ketentuan</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Mohon baca terlebih dahulu :</h5>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const CardPembayaran = () => {
    const myStyle= {
        backgroundColor:'#fff',
        color:'black',
        border: "2px solid #418459"
      }
      const [produk, setProduk]=useState([]);

  const params = useParams();
  useEffect(() => {
    const getTanamanHiasById = async () => {
      
      // axios
      let url = "";
      if (params.type === "buket") {
        url = `https://62bd2977bac21839b6fd61be.mockapi.io/api/buket/${params.id}`;
      }

      if (params.type === "tanamanhias") {
        url = `https://62bd2977bac21839b6fd61be.mockapi.io/api/tanamanhias/${params.id}`;
      }

      const result = await axios.get(url);
      console.log(result.data);
      setProduk(result.data)
    };

    getTanamanHiasById();
  }, []);

      //MODAL
      const [modalShow, setModalShow] = React.useState(false);

    //data bayar
        const [dataBeli, setDataBeli] = useState({pembayaran:""})

        const handleChange = (e) =>{
            setDataBeli({...dataBeli,[e.target.name]:e.target.value})
        }
            const handleSubmit=(e)=>{
            console.log("test")
            const data = JSON.stringify(dataBeli)
            localStorage.setItem("user", data)
            alert(data)
        }
        const validasi = (name) => {
            const errors = {};
            if (!name.pembayaran) {
            errors.pembayaran = "Email Tidak Boleh Kosong";
            }}

  return (
    <div>
        <Alert style={{backgroundColor:'#E9F7E8', color:'black', marginTop:'5px', marginLeft:'10px', border: "1px solid #418459"}}>
          <Alert.Heading style={{textAlign:'left'}}>Pilih Metode Pembayaran {params.id}</Alert.Heading> <hr />

            <Alert style={myStyle}>
            <Row>
              <Col lg={3} style={{textAlign:'left'}}>
              <img src={produk.gambar} style={{width:"100px"}}/>
              </Col>
              <Col style={{display:'flex', alignItems:'center'}}>
              <h5>{produk.nama}</h5>
              </Col>
            </Row>
            </Alert>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

            <Alert style={myStyle}>
            <p style={{textAlign:'left'}}><input type='radio' onClick={() => setModalShow(true)} name='pembayaran' value='Florist-pay' onChange={handleChange}/> Florist-pay <space/>
            <img src={poto2} style={{width:'50px'}}/></p>
            <hr />
            <p style={{textAlign:'left'}}><input type='radio' name='pembayaran' value='Transfer Bank' onChange={handleChange}/> Transfer Bank <space/>
            <img src={poto1} style={{width:'80px',  marginLeft:'20px'}}/><space/>
            <img src={poto3} style={{width:'100px', marginLeft:'10px'}}/><space/>
            <img src={poto4} style={{width:'100px'}}/>
            </p>
            <hr />
            <p style={{textAlign:'left'}}><input type='radio' name='pembayaran' value='Virtual account' onChange={handleChange}/> Transfer Virtual Akun<space/>
            <img src={poto1} style={{width:'80px',  marginLeft:'20px'}}/><space/>
            <img src={poto3} style={{width:'100px',marginLeft:'10px'}}/><space/>
            <img src={poto4} style={{width:'100px'}}/></p>
            </Alert>
    
            <hr />
            <Alert style={{backgroundColor:"#E9F7E8", color:"red", border: "1px solid red"}}>
                Mohon segera lakukan pembayaran!
            </Alert>

        </Alert>
    </div>
  )
}

export default CardPembayaran