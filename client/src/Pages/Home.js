import React from "react";
import { ListGroup, Col, Row } from "react-bootstrap";
import "../style.css";

export default function Home() {
  return (
    <div className="home-container">
      <ListGroup id="home-table">
        <ListGroup.Item>
          <Row>
            <Col xs={6} md={1}>
              <strong>
                Id:
                <br />
              </strong>
              1
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
            <Row>
              <Col xs={12} md={12}>
                <strong>Notes:</strong>&nbsp;these are notes from this job
              </Col>
            </Row>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={6} md={1}>
              <strong>Id:</strong>
            </Col>
            <Col xs={6} md={2}>
              <strong>Role:</strong>
            </Col>
            <Col xs={12} md={3}>
              <strong>Company Name:</strong>
            </Col>

            <Col xs={6} md={2}>
              <strong>Link:</strong>
            </Col>
            <Col xs={6} md={2}>
              <strong>Source:</strong>
            </Col>
            <Row>
              <Col xs={12} md={12}>
                <strong>Notes:</strong>
              </Col>
            </Row>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={6} md={1}>
              <strong>Id:</strong>
            </Col>
            <Col xs={6} md={2}>
              <strong>Role:</strong>
            </Col>
            <Col xs={12} md={3}>
              <strong>Company Name:</strong>
            </Col>

            <Col xs={6} md={2}>
              <strong>Link:</strong>
            </Col>
            <Col xs={6} md={2}>
              <strong>Source:</strong>
            </Col>
            <Row>
              <Col xs={12} md={12}>
                <strong>Notes:</strong>
              </Col>
            </Row>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={6} md={1}>
              <strong>Id:</strong>
            </Col>
            <Col xs={6} md={2}>
              <strong>Role:</strong>
            </Col>
            <Col xs={12} md={3}>
              <strong>Company Name:</strong>
            </Col>

            <Col xs={6} md={2}>
              <strong>Link:</strong>
            </Col>
            <Col xs={6} md={2}>
              <strong>Source:</strong>
            </Col>
            <Row>
              <Col xs={12} md={12}>
                <strong>Notes:</strong>
              </Col>
            </Row>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
