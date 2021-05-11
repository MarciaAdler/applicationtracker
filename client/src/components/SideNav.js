import React from "react";
import { Nav } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
export default function SideNav() {
  const [state, dispatch] = useStoreContext();
  return (
    <div className="side-nav-container">
      {state.loggedIn ? (
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
      ) : (
        <Nav className="side-nav-nav">
          <Nav.Link className="side-nav-link" href="/">
            Login
          </Nav.Link>
          <Nav.Link className="side-nav-link" href="/signup">
            Signup
          </Nav.Link>
        </Nav>
      )}
    </div>
  );
}
