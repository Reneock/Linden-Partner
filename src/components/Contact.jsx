import React from "react";
import {Container, Form, Button, Row, Col} from "react-bootstrap";
import IonIcon from "@reacticons/ionicons";
import emailjs from '@emailjs/browser';



function Contact(){
  const sendEmail = (e) => {
    e.preventDefault();

    alert ('Email Sent');

    //emailjs.sendForm('service_ooc6ieb', 'template_ct2v7r7', e.target, 'iTNVAGNVGcgW759Pt'); 

    emailjs.sendForm('service_j3ucpld', 'template_fajlxd8', e.target, 'jrd2cOpBsHdGq5Pp-')
    .then((result) => {
      console.log(result.message);
  }, (error) => {
      console.log(error.message);
  });
    e.target.reset();
  }


  return(
    <Container fluid className="contactpage">
    <Row className="contactrow">
    <h1 className="page_title">Get In Touch</h1>
      <Col md="6">
      <Form className="contact_form" onSubmit={sendEmail}>
        <p htmlFor="nameFrom" className="mess">Your Name:</p>
        <input type="text" name="nameFrom" id="nameFrom" className="nameFrom"/>
        <br/>
        <p htmlFor="emailFrom" className="mess">Your Email:</p>
        <input type="text" name="email_from" id="emailFrom" className="email_from"/>
        <br/>
        <p htmlFor="message" className="mess">Message:</p>
        <textarea name="message" id="message" className="message_box"></textarea>
        <Button type="submit" variant="primary" value="Send" ><IonIcon name="send-outline"/>Send</Button >
      </Form>
      </Col>
      
      <Col md="6">
      <div className="contactdetails">
        <h6>For Enquiries and Requests</h6>
        <p>linden@linden-partner.de</p>
        <br/><br/>
        <h6>For more information about our services</h6>
        <p>info@linden-partner.de</p>
      </div>
      <p>If you experience any challenges with the German email addresses provided, kindly send your message through the contact form on this page.</p>
      </Col>
      
      </Row>
    </Container>
  );
}

export default Contact;