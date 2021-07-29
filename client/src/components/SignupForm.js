import React, { useRef, useState } from "react";
import { Container, Form, Col, Button, Row } from "react-bootstrap";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";

export default function SignupForm() {
  const [state, dispatch] = useStoreContext();
  const [sendLogin, setSendLogin] = useState(false);
  const firstRef = useRef();
  const lastRef = useRef();
  const nameRef = useRef();
  const usertypeRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const companyRef = useRef();
  const renderRedirect = () => {
    if (sendLogin && state.currentUser.id === 0) {
      return <Redirect to="/" />;
    }
  };
  function signUp(event) {
    event.preventDefault();
    if (passwordRef.current.value !== confirmRef.current.value) {
      return alert("Passwords must match");
    } else {
      API.createUser({
        firstName: firstRef.current.value,
        lastName: lastRef.current.value,
        email: emailRef.current.value,
        username: nameRef.current.value,
        password: passwordRef.current.value,
        role: usertypeRef.current.value,
        company: companyRef.current.value,
      })
        .then((res) => {
          setSendLogin(true);
          const form = document.getElementById("myForm");
          form.reset();
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <Container className="signup-container">
      <Form className="signup-form" id="myForm">
        <Row className="mb-3 justify-content-center">
          <Col className="col-8 col-md-4">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              required
              ref={firstRef}
            />
          </Col>
          <Col className="col-8 col-md-4">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              required
              ref={lastRef}
            />
          </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Col className="col-8 col-md-4">
            <Form.Group controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                required
                ref={nameRef}
              />
            </Form.Group>
          </Col>
          <Col className="col-8 col-md-4">
            <Form.Group controlId="formGroupUsername">
              <Form.Label>User Type(select one)</Form.Label>
              <Form.Control as="select" required ref={usertypeRef}>
                <option>Job Seeker</option>
                <option>Company/Recruiter</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Col className="col-8 col-md-4">
            <Form.Group controlId="formGroupUsername">
              <Form.Label>For Company/Recruiter</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company"
                ref={companyRef}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* <Col className="col-8 col-md-8 col-lg-3">
            <Form.Group controlId="formGroupRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                defaultValue="User"
                required
                ref={roleRef}
              >
                <option>User</option>
                <option>Admin</option>
                <option>Front Desk</option>
                <option>Maintenance</option>
              </Form.Control>
            </Form.Group>
          </Col> */}

          <Col className="col-8 col-md-8 col-lg-5">
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                ref={emailRef}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center signupform--row">
          <Col className="col-8">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                ref={passwordRef}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center signupform--row">
          <Col className="col-8">
            <Form.Group controlId="formGroupConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Retype Password"
                required
                ref={confirmRef}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center signupform--row">
          <Col className="col-8">
            <Button
              className="button signup-button"
              type="submit"
              onClick={signUp}
            >
              Submit
            </Button>

            <span>
              &nbsp; If you already have an account{" "}
              <a href="/">
                <strong>click here</strong>
              </a>{" "}
              to login
            </span>
            {renderRedirect()}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
