import React from "react";
import { ListGroup, Col, Row } from "react-bootstrap";
import "../style.css";

export default function Home() {
  return (
    <div className="home-container">
      <ListGroup id="home-table">
        <ListGroup.Item>
          <Row>
            <Col xs={1} md={1}>
              <strong>
                Id:
                <br />
              </strong>
              345
            </Col>
            <Col xs={5} md={1} className="text-center">
              <strong>Date Applied:</strong>
              <br />
              5/2/21
            </Col>
            <Col xs={6} md={2}>
              <strong>
                Role:
                <br />
              </strong>
              Product Manager
            </Col>
            <Col xs={12} md={3}>
              <strong>Company Name:&nbsp;</strong>
              Etsy
            </Col>

            <Col xs={6} md={2}>
              <strong>
                Link:
                <br />
              </strong>
              <a href="https://google.com" target="_blank" rel="noreferrer">
                link
              </a>
            </Col>
            <Col xs={6} md={2}>
              <strong>
                Source: <br />
              </strong>{" "}
              Tech Ladies
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <strong>JD:</strong>&nbsp;
              <a href="#/" target="_blank" rel="noreferrer">
                document name
              </a>
            </Col>
            <Col xs={12} md={8}>
              <strong>Notes:</strong>&nbsp;these are notes from this job
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <strong>Status:</strong>&nbsp;
            </Col>
            <Col xs={6} md={4}>
              <a href="#/edit">
                <strong>Edit</strong>
              </a>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
