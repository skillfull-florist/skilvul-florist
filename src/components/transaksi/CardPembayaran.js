import {Alert, Row, Col,OverlayTrigger, Popover, Button, Modal} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import poto1 from "../../assets/1.jpg";
import poto2 from "../../assets/mobile-payment.png";
import poto3 from "../../assets/2.png";
import poto4 from "../../assets/3.jpg";
import gojek from "../../assets/gojek.png"
import grab from "../../assets/grab.jpg"
import MyVerticallyCenteredModal from "./Modal1"
import MyVerticallyCenteredModal1 from "./Modal2"
import MyVerticallyCenteredModal2 from "./Modal3"

const CardPembayaran = () => {
  const navigate = useNavigate();

   //data bayar
   const [dataBeli, setDataBeli] = useState({pembayaran:"", jasakirim:""})

   const handleChange = (e) =>{
       setDataBeli({...dataBeli,[e.target.name]:e.target.value})
   }
       const handleSubmit=(e)=>{
       console.log("test")
       const data = JSON.stringify(dataBeli)
       localStorage.setItem("user", data)
       alert(data)
   }

    const myStyle= {
        backgroundColor:'#fff',
        color:'black',
        border: "2px solid #418459"
      }

      //Data dari card
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
      const [modalShow1, setModalShow1] = React.useState(false);
      const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div>
        <Alert style={{backgroundColor:'#E9F7E8', color:'black', marginTop:'5px', marginLeft:'10px', border: "1px solid #418459"}}>
          <Alert.Heading style={{textAlign:'left'}}>Pilih Metode Pembayaran {params.id}</Alert.Heading> <hr />

            <Alert style={myStyle}>
            <p style={{textAlign:'left'}}><input type='checkbox' /> Bayar sebagian dengan saldo.Saldo anda : Rp 90.000</p>
          </Alert>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <MyVerticallyCenteredModal1
              show={modalShow1}
              onHide={() => setModalShow1(false)}
            />
            <MyVerticallyCenteredModal2
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />

            <Alert style={myStyle}>
            <p>Pilih metode pembayaran</p>
            <hr/>
            <p style={{textAlign:'left'}}><input type='radio' onClick={() => setModalShow(true)} name='pembayaran' value='Florist-pay' onChange={handleChange}/> Florist-pay <space/>
            <img src={poto2} style={{width:'50px'}}/></p>
            <hr />
            <p style={{textAlign:'left'}}><input type='radio' onClick={() => setModalShow1(true)} name='pembayaran' value='Transfer Bank' onChange={handleChange}/> Transfer Bank <space/>
            <img src={poto1} style={{width:'80px',  marginLeft:'20px'}}/><space/>
            <img src={poto3} style={{width:'100px', marginLeft:'10px'}}/><space/>
            <img src={poto4} style={{width:'100px'}}/>
            </p>
            <hr />
            <p style={{textAlign:'left'}}><input type='radio' onClick={() => setModalShow2(true)} name='pembayaran' value='Virtual account' onChange={handleChange}/> Transfer Virtual Akun<space/>
            <img src={poto1} style={{width:'80px',  marginLeft:'20px'}}/><space/>
            <img src={poto3} style={{width:'100px',marginLeft:'10px'}}/><space/>
            <img src={poto4} style={{width:'100px'}}/></p>
            </Alert>

            <hr/>
            <Alert style={myStyle}>
            <p>Pilih jasa kirim anda</p>
            <hr/>
            <p style={{textAlign:'left'}}><input type='radio' name='jasakirim' value='grab' onChange={handleChange}/> GRAB <space/>
            <img src={grab} style={{width:'50px'}}/></p>
            <hr />
            <p style={{textAlign:'left'}}><input type='radio' name='jasakirim' value='gojek' onChange={handleChange}/> GOJEK <space/>
            <img src={gojek} style={{width:'30px',  marginLeft:'20px'}}/><space/>
            </p>
            </Alert>
    
            <hr />
            <div className="d-grid gap-2">
            <Button onChange={handleSubmit} onClick={() => navigate("/rincian")} variant="outline-danger" size="lg" style={{height:'50px'}}>
              <p style={{fontSize:'15px', fontFamily:"sans-serif"}}>Buat Pesanan</p>
            </Button>
          </div>

        </Alert>
    </div>
  )
}

export default CardPembayaran