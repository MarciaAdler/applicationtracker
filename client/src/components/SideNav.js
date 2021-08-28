import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { Redirect } from "react-router-dom";
import { CLEAR_ALL } from "../utils/actions";
import SideNavQuotes from "./SideNavQuotes";
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
      <div className="side-nav-color">
        {state.loggedIn && state.currentUser.id !== 0 ? (
          <Nav className="side-nav-nav">
            <Nav.Link className="side-nav-link" href="/">
              Home/Searches
            </Nav.Link>
            <Nav.Link className="side-nav-link" href="/applications">
              Applications
            </Nav.Link>
            <Nav.Link className="side-nav-link" href="/add">
              Add Application
            </Nav.Link>
            <Nav.Link className="side-nav-link" href="/analytics">
              Analytics
            </Nav.Link>
            <Nav.Link className="side-nav-link" href="/discussionboard">
              Discussion Board
            </Nav.Link>
            <Nav.Link className="side-nav-link" href="/resources">
              Resources
            </Nav.Link>
            <Nav.Link className="side-nav-link" href="/profile">
              Profile
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
      <SideNavQuotes />
    </div>
  );
}
