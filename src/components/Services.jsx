import React from "react";
import Card from 'react-bootstrap/Card';
import { Col, Row, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";


function Services() {

  let navigate = useNavigate();

  return (
    <div>
      <Row className="g-4">
        <Col>
          <Card style={{ width: '20rem', marginTop: '30px', marginBottom: '20px', marginLeft: '40px' }}>
            <Card.Img variant="top" src="water1.jpg" />
            <Card.Body>
              <Card.Title style={{fontWeight: '600px', marginLeft: '50px'}}>HYDRO SCIENCE</Card.Title>
              <Card.Text>
                Feasibility studies, Dimensioning Water Treatment, Waste Water Treatment, Project Management, Project Support, etc.
              </Card.Text>
              <Button variant="primary" style={{marginLeft: '60px'}} onClick={()=>{navigate("/contact")}}> Get In Touch</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '20rem', marginTop: '30px', marginBottom: '20px', marginLeft: '40px' }}>
            <Card.Img variant="top" src="solar.jpg" />
            <Card.Body>
              <Card.Title style={{fontWeight: '600px', marginLeft: '50px'}}>SOLAR ENERGY</Card.Title>
              <Card.Text>
                Small Scale Solar Energy Production Design, Project Management, Project Support, Yield Analysis, etc.
              </Card.Text>
              <Button variant="primary" style={{marginLeft: '60px'}} onClick={()=>{navigate("/contact")}}>Get In Touch </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '20rem', marginTop: '30px', marginBottom: '20px', marginLeft: '40px' }}>
            <Card.Img variant="top" src="funds.webp" />
            <Card.Body>
              <Card.Title style={{fontWeight: '600px', marginLeft: '30px'}}>FUNDS ACQUISITION</Card.Title>
              <Card.Text>
                Partial to Full funds acquisition for Private Sector, Public Sector, Public-Private Partnerships, Non-Governmental Organisations, etc.
              </Card.Text>
              <Button variant="primary" style={{marginLeft: '60px'}} onClick={()=>{navigate("/contact")}}>Get In Touch </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        <Col>
          <Card style={{ width: '20rem', marginTop: '30px', marginBottom: '40px', marginLeft: '180px' }}>
            <Card.Img variant="top" src="partnership1.jpg" />
            <Card.Body>
              <Card.Title style={{fontWeight: '600px', marginLeft: '50px'}}>PARTNERSHIP</Card.Title>
              <Card.Text>
                Strategic B2B Partnerships for Private Sector, Public Sector, Non-Governmental Organisations etc.
              </Card.Text>
              <Button variant="primary" style={{marginLeft: '60px'}} onClick={()=>{navigate("/contact")}}>Get In Touch </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '20rem', marginTop: '30px', marginBottom: '40px', marginLeft: '90px' }}>
            <Card.Img variant="top" src="csr.jpg" />
            <Card.Body>
              <Card.Title style={{fontWeight: '600px', marginLeft: '50px'}}>CSR ACTIVITIES</Card.Title>
              <Card.Text>
                Developing Tailored CSR Strategies for Individuals and Organisations.
              </Card.Text>
              <Button variant="primary" style={{marginLeft: '60px'}} onClick={()=>{navigate("/contact")}}>Get In Touch </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Services;