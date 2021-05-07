import React from "react";
import { Nav, Container } from "react-bootstrap";
export default function SideNav() {
  return (
    <Container className="side-nav-container">
      <Nav className="side-nav-nav">
        <Nav.Link className="side-nav-link" href="/">
          Home
        </Nav.Link>
      </Nav>
    </Container>
  );
}
