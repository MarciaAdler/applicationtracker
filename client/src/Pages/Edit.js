import React, { useRef } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
// import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

export default function Edit() {
  const [state, dispatch] = useStoreContext();
  const dateRef = useRef();
  const roleRef = useRef();
  const companyRef = useRef();
  const linkRef = useRef();
  const notesRef = useRef();
  const sourceRef = useRef();
  const statusRef = useRef();
  return (
    <Container className="application-container">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date Applied</Form.Label>
            <Form.Control
              type="date"
              defaultValue={state.selectedApp.dateApplied}
              ref={dateRef}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSource">
            <Form.Label>Source</Form.Label>
            <Form.Control
              type="text"
              defaultValue={state.selectedApp.source}
              ref={sourceRef}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              defaultValue={state.selectedApp.role}
              ref={roleRef}
            />
          </Form.Group>

          <Form.Group controlId="formGridCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control
              defaultValue={state.selectedApp.companyName}
              ref={companyRef}
            />
          </Form.Group>

          <Form.Group controlId="formGridLink">
            <Form.Label>Link</Form.Label>
            <Form.Control
              defaultValue={state.selectedApp.applicationLink}
              ref={linkRef}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="mt-3">
          <Form.Group as={Col} controlId="formGridJD">
            <Form.Label>JD</Form.Label>
            <Form.Control
              type="text"
              value={state.selectedApp.jobDescription}
              readonly
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              type="text"
              defaultValue={state.selectedApp.notes}
              ref={notesRef}
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridStatus">
            <Form.Label>Status:</Form.Label>
            <Form.Control
              defaultValue={state.selectedApp.status}
              ref={statusRef}
            />
          </Form.Group>
        </Form.Row>

        <Button
          className="mt-3"
          variant="primary"
          type="button"
          onClick={() => {}}
        >
          Update
        </Button>
      </Form>
    </Container>
  );
}
