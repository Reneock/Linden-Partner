import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';


function Home() {
  return (
    <Container fluid className="homebody">
      <div className="box">
        <div className="content">
          <img src="Julius.JPG" alt="a headshot of me" />
          <h2>Julius Paul Linden<br /><span>Consultant</span></h2>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    </Container>
  );
}

export default Home;