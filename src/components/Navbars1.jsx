import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useState} from 'react';


function Navbars1() {

  const [isHovering, setIsHovering] = useState(false);
  

  const handleMouseOver =(e)=>{
    e.preventDefault();
    setIsHovering(true);
  }

  const handleMouseOut =(e)=>{
    e.preventDefault();
    setIsHovering(false);
    
  }

  let Linkstyle={
    color:'',
  }

  if (isHovering) {
    Linkstyle.color="rgba(253,189,49)";
  }
  else{
    Linkstyle.color="#fff";
  }

  return (
    <>
      <Navbar  className="header">
        <Container fluid>
          <Navbar.Brand >
            <Link to="/">
            <img src="L&Plogo.jpg" width="80" height="40" className="d-inline-block align-top" alt="Linden&Partner logo" />
            </Link>
          </Navbar.Brand>
         {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end flex-grow-1 pe-3 nav-ul" style={{textDecoration: "none", transition:"0.3s", backgroundColor:"#01132d", color: "white"}}>
              <Nav.Link className="nav-ul-li"><Link to="/" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={Linkstyle}> Home </Link> </Nav.Link>
              <Nav.Link className="nav-ul-li"> <Link to="/about" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={Linkstyle}>About</Link> </Nav.Link>
              <Nav.Link className="nav-ul-li"> <Link to="/services" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={Linkstyle}>Services</Link> </Nav.Link>
              <Nav.Link className="nav-ul-li"> <Link to="/contact" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={Linkstyle}>Contact</Link> </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars1;