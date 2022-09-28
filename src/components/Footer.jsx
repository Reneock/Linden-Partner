import React from 'react';
import {Container} from "react-bootstrap";

function Footer(){
  return(
    <Container fluid className="footer" style={{backgroundColor: "#01132d", textAlign: "center", padding: "5px"}}>
      <p style={{color: "#fff" , fontSize: "12px"}}>&copy; 2022 <strong>Linden&Partner.</strong> All Rights Reserved</p>
      <p style={{color: "#fff" , fontSize: "10px"}}>Designed by <span style={{color: "rgba(253, 189, 49)"}}>ReneServes</span></p>
    </Container>
  );
}

export default Footer;