import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Container className="abouthome">
      <nav>
        <div className="header">
          <div className="logo"><img src="L&Plogo.jpg" alt="Linden&Partner logo" /></div>


          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

        </div>
      </nav>
    </Container>
  );
}

export default Navbar;