import React from "react";
import { Nav } from "react-bootstrap";
export default function SideNav() {
  return (
    <div className="side-nav-container">
      <Nav className="side-nav-nav">
        <Nav.Link className="side-nav-link" href="/">
          Home
        </Nav.Link>
        <Nav.Link className="side-nav-link" href="/add">
          Add Job
        </Nav.Link>
        <Nav.Link className="side-nav-link" href="#/Analytics">
          Analytics
        </Nav.Link>
      </Nav>
    </div>
  );
}
