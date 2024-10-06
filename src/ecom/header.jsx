import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsCart, BsHeart } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import logoimage from "./logo2.0.jpg";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'; 
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

const Header = () => {

 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

  return (
    <div>
      <div className="header bg-primary text-white p-3 text-center">
        <a href="/" className="text-black text-decoration-none">
          <h5>
            Fun zone No.1 Online toy store
            <MdMail size={20} color="black" />
            funzonetoys@gmail.com
          </h5>
        </a>
      </div>
      <div style={{ backgroundColor: "#A0DEFF" }}>
        <Container>
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto">
                <Nav.Link href="#logo">
                  <img
                    src={logoimage}
                    alt="Logo"
                    style={{ width: "55px", height: "45px" }}
                  />
                </Nav.Link>

                <Nav.Link href="#home"></Nav.Link>

                <Nav.Link href="#home">
                  <b>Home</b>
                </Nav.Link>
                <Nav.Link href="#home"></Nav.Link>
                <Nav.Link href="#about">
                  <b>About</b>
                </Nav.Link>
                <Nav.Link href="#home"></Nav.Link>
                <Nav.Link href="#contact">
                  {" "}
                  <b>Contact</b>
                </Nav.Link>

                <Nav.Link href="#home"></Nav.Link>
                <Nav.Link href="#home"></Nav.Link>

                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <Nav.Link href="">
                    <b>Categories</b>
                  </Nav.Link>
                  <NavDropdown.Item href="#action/3.1">
                    1-2years
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    3-4years
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    4-5years
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    5-6years
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Nav className="ms-auto  align-items-center">
                <Form className="d-flex me-2">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-primary">Search</Button>
                </Form>
                <Nav.Link href="#home"></Nav.Link>
                <Nav.Link href="#cart">
                  <BsCart />
                </Nav.Link>
                <Nav.Link href="#wishlist">
                  <BsHeart />
                </Nav.Link>
                <Button variant="primary" onClick={handleShow}>
                  <FontAwesomeIcon
                    icon={faSignInAlt}
                    style={{
                      background: "light blue",
                    }}
                  />
                  Log in
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                      <h2>Log in</h2>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Button>Submit</Button>
                    </Form>
                  </Offcanvas.Body>
                </Offcanvas>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
