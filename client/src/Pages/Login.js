import React from "react";
import LoginForm from "../components/LoginForm";
import { Container, Row, Col } from "react-bootstrap";

export default function Signin() {
  return (
    <Container className="login-container">
      <h1 className="signin-title">Application Tracker Login</h1>
      <Row className="signin-container">
        <Col className="col-12 col-md-8 signin-container">
          <LoginForm />
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-md-8">
          <div className="test-accounts mt-5">
            <h5 className="mt-2 ml-2">
              <strong>
                If you are interested in testing out the app, please use the
                test accounts listed below
              </strong>
            </h5>
            <p className="ml-2">
              <strong>Usernames:</strong>
              <br />
              User1
            </p>
            <p className="ml-2">
              <strong>Password for test account*:</strong> Test
              <br />
              <small>
                *Please note, the usernames are not case sensitive, but the
                password is
              </small>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
