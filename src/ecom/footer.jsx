import React from 'react';
import { Container, Row, Col, Nav,Button } from 'react-bootstrap';
 import{ FaFacebookF,FaTwitter,FaInstagram,FaLinkedin, } from "react-icons/fa";
 import { MdMail } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-info text-dark py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5> Policies</h5>
            <p>Shipping</p>
            <p>Returns & Cancellation </p>
            <p>Terms of Use </p>
            <p>Refund policy</p>
            <p> Privacy Policy</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-dark">
                Home
              </Nav.Link>
              <Nav.Link href="#shop" className="text-dark">
                Shop
              </Nav.Link>
              <Nav.Link href="#contact" className="text-dark">
                Contact
              </Nav.Link>
              <Nav.Link href="#faq" className="text-dark">
                FAQ
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Fun zone Wellness Company, Makali, Bengaluru - 562162</p>

            <p>
              Email: <MdMail size={20} color="black" />
              funzonetoys@gmail.com
            </p>
            <p>Phone: +1 234 567 890</p>
            <br />
            <div>
              <h5>Follow Us</h5>
              <Button variant="link" className="text-dark">
                <FaFacebookF />
              </Button>

              <Button variant="link" className="text-dark">
                <FaTwitter />
              </Button>

              <Button variant="link" className="text-dark">
                <FaInstagram />
              </Button>

              <Button variant="link" className="text-dark">
                <FaLinkedin />
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center"></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


















