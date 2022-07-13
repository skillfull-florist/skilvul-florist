import React, { useState, useEffect } from "react";
import axios from "axios"; // pengganti fetch
import { Card, Container, Row, Col, Alert  } from "react-bootstrap"
import { TanamanHiasItem } from "./TanamanHiasItem";
import Search from './Search'
import img1 from "../../assets/buket.png"
import img2 from "../../assets/hias.png"


const TanamanHias = () => {
  const [tanamanHias, setTanamanHias] = useState([]);
  const [loading,setLoading]= useState(false)
  const [searchNama,setSearchNama]=useState("")

  useEffect(() => {
    const getDataTanamanHias = async () => {
      setLoading(true);
      // axios
      const result = await axios.get("https://62bd2977bac21839b6fd61be.mockapi.io/api/tanamanhias/");
      console.log(result.data);
      setTanamanHias(result.data);
      setLoading(false)
    };
    console.log("useEffect");
    getDataTanamanHias();
  }, []);


  
  return (
    <div>
      <Container>
        <br />
        <h2 className="text-center">Tanaman Hias</h2>
        <hr/>
        <Row>
          <Col lg={3}>
            <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchNama(e.target.value)}
            />
          </Col>
          <Col>
            
            <Alert style={{backgroundColor:'#E9F7E8', border:"#E9F7E8", borderRadius:"0",display:"flex", alignItems:'flex-end'}}>
              <img style={{width:"120px"}} src={img1}/>
              <Row>
                <h6 style={{color:'black'}}>Hand Bouquet</h6>
                <hr/>
                <p style={{color:'black', fontSize:'10px'}}>Jual buket bunga online (hand bouquet) flannel, matahari, lily, & mawar dengan harga terjangkau di Jakarta Barat untuk acara ulang tahun, wisuda, dll.</p>
              </Row>
            </Alert>
          </Col>
          <Col>
          <Alert style={{backgroundColor:'#E9F7E8', border:"#E9F7E8", borderRadius:"0",display:"flex", alignItems:'flex-end'}}>
              <img style={{width:"120px"}} src={img2}/>
              <Row>
                <h6 style={{color:'black'}}>Decorative Plants</h6>
                <hr/>
                <p style={{color:'black', fontSize:'10px'}}>Jual  Tanaman hias mencakup baik berbentuk terna, merambat, semak, perdu, ataupun pohon.</p>
              </Row>
            </Alert>
          </Col>
        </Row>
        <Row className="justify-content">
          {loading ? (
            <h4>loading...</h4>
          ):(
          tanamanHias.filter((value) =>{
            if(searchNama === ""){
              return value
            }else if(value.item.toLowerCase().include(searchNama.toLowerCase())){
              return value
            }
          }).map((item, index) => (
            <TanamanHiasItem tanamanHias={item} ></TanamanHiasItem>)
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TanamanHias;
