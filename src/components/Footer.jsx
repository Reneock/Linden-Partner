import React from 'react';
import {Container} from "react-bootstrap";

function Footer(){
  return(
    <Container fluid className="footer" style={{backgroundColor: "#01132d", textAlign: "center", padding: "2px", height: "80px"}}>
      <p style={{color: "#fff" , fontSize: "12px"}}>&copy; 2022 <strong>Linden&Partner.</strong> All Rights Reserved</p>
      <p style={{color: "#fff" , fontSize: "10px"}}><strong>Imprint:</strong> Julius Paul Linden, Wittelsbacherplatz 7 82256 Fürstenfeldbruck, +233599648850 / +4917680825709, linden@linden-partner.de, www.linden-partner.de</p>
      <p style={{color: "#fff" , fontSize: "10px"}}>Designed by <span style={{color: "rgba(253, 189, 49)"}}>ReneServes</span></p>
    </Container>
  );
}

export default Footer;