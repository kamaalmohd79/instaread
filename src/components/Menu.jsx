import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import './menu.css';

const Menu = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar-background mb-5" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Instaread</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="#home">Discover</Nav.Link>
              <Nav.Link href="#link">Search</Nav.Link>
              <Nav.Link href="#link">Try instaread</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Menu;
