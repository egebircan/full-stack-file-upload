import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/" style={{ fontSize: "20px", marginRight: "25px" }}>All Files</Nav.Link>
        <Nav.Link href="/upload" style={{ fontSize: "20px" }}>Upload New File</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

export default Header