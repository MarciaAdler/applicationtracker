import React, { useRef } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { Form, Button, Col } from "react-bootstrap";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { LOGGEDIN, SET_CURRENT_USER } from "../utils/actions";

export default function LoginForm() {
  const [state, dispatch] = useStoreContext();
  const nameRef = useRef();
  const passwordRef = useRef();
  const renderRedirect = () => {
    if (state.loggedIn && state.currentUser.id !== 0) {
      return <Redirect to="/home" />;
    }
  };
  function login(event) {
    event.preventDefault();
    API.getUser({
      username: nameRef.current.value,
      password: passwordRef.current.value,
    })
      .then((results) => {
        dispatch({
          type: SET_CURRENT_USER,
          currentUser: {
            id: results.data.id,
            username: results.data.username,
            firstName: results.data.firstName,
            lastName: results.data.lastName,
            email: results.data.email,
            role: results.data.role,
            company: results.data.company,
            location: results.data.location,
            primaryRole: results.data.primaryRole,
            bio: results.data.bio,
            website: results.data.website,
            linkedIn: results.data.linkedIn,
            twitter: results.data.twitter,
            instagram: results.data.instagram,
            otherLink: results.data.otherLink,
            yearsExperience: results.data.yearsExperience,
          },
        });

        let localStorageUser = {
          id: results.data.id,
          username: results.data.username,
          firstName: results.data.firstName,
          lastName: results.data.lastName,
          email: results.data.email,
          role: results.data.role,
          company: results.data.company,
          location: results.data.location,
          primaryRole: results.data.primaryRole,
          bio: results.data.bio,
          website: results.data.website,
          linkedIn: results.data.linkedIn,
          twitter: results.data.twitter,
          instagram: results.data.instagram,
          otherLink: results.data.otherLink,
          yearsExperience: results.data.yearsExperience,
        };

        window.localStorage.setItem(
          "currentUser",
          JSON.stringify(localStorageUser)
        );

        dispatch({
          type: LOGGEDIN,
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="loginform-wrapper">
      <Form className="loginform-form div-to-align">
        <Form.Group controlId="formUsername">
          <Form.Label>
            <strong>Username</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            ref={nameRef}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <strong>Password</strong>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </Form.Group>
        <Form.Row id="loginform-loginorreset">
          <Col className="col-4">
            <Button
              className="button loginform-button"
              type="submit"
              onClick={login}
            >
              Sign-in
            </Button>
          </Col>
          <Col className="col-8" id="loginform-reset">
            <span>
              Click <a href="/reset">here</a> to reset password
            </span>
          </Col>
        </Form.Row>
      </Form>
      {renderRedirect()}
    </div>
  );
}
