import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { Link, Redirect } from "react-router-dom";
import { CLEAR_ALL } from "../utils/actions";
export default function SideNav() {
  const [state, dispatch] = useStoreContext();
  const [redirect, setRedirect] = useState(false);

  function logOut() {
    dispatch({
      type: CLEAR_ALL,
    });
    localStorage.clear();
    setRedirect(true);
    renderRedirect();
  }

  const renderRedirect = () => {
    if (redirect === true) {
      return <Redirect to="/" />;
    }
  };

  return (
    <div className="side-nav-container">
      {state.loggedIn && state.currentUser.id !== 0 ? (
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
          <Nav.Link className="side-nav-link" href="/resources">
            Resources
          </Nav.Link>
          <Nav.Link className="side-nav-link" href="/" onClick={logOut}>
            Logout
          </Nav.Link>
          {renderRedirect()}
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
