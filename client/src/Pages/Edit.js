import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Col, Button, Row } from "react-bootstrap";
import { SELECT_APP } from "../utils/actions";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { Redirect } from "react-router-dom";
export default function Edit() {
  const [state, dispatch] = useStoreContext();
  const [redirect, setRedirect] = useState(false);
  const roleRef = useRef();
  const companyRef = useRef();
  const linkRef = useRef();
  const notesRef = useRef();
  const sourceRef = useRef();
  const statusRef = useRef();
  const dateRef = useRef();
  const fileRef = useRef();
  const searchRef = useRef();
  const [message, setMessage] = useState("");
  useEffect(() => {
    loadRequest(window.location.search);
  }, []);
  function loadRequest(url) {
    console.log("From loadRequest function: ");
    console.log(url.replace("?", ""));

    if (state.selectedApp.id === 0) {
      API.selectApp(url.replace("?", ""))
        .then((res) => {
          const selectedapp = {
            id: res.data.id,
            companyName: res.data.companyName,
            role: res.data.role,
            applicationLink: res.data.applicationLink,
            source: res.data.source,
            jobDescription: res.data.jobDescription,
            notes: res.data.notes,
            dateApplied: res.data.dateApplied,
            status: res.data.status,
            userId: res.data.UserId,
            searchId: res.data.Search.searchName,
          };
          dispatch({
            type: SELECT_APP,
            selectedApp: selectedapp,
          });
        })
        .catch((err) => console.log(err));
    } else {
      dispatch({
        type: SELECT_APP,
        selectedApp: state.selectedApp,
      });
    }
  }
  function refreshApp() {
    API.refreshSelectedApp(state.selectedApp.id)
      .then((res) => {
        dispatch({
          type: SELECT_APP,
          selectedApp: {
            id: res.data.id,
            companyName: res.data.companyName,
            role: res.data.role,
            applicationLink: res.data.applicationLink,
            source: res.data.source,
            jobDescription: res.data.jobDescription,
            notes: res.data.notes,
            dateApplied: res.data.dateApplied,
            status: res.data.status,
            userId: state.currentUser.id,
            searchId: res.data.Search.searchName,
          },
        });
      })
      .catch((err) => console.log(err));
  }
  function editApp(id) {
    API.editApp({
      id: state.selectedApp.id,
      companyName: companyRef.current.value,
      role: roleRef.current.value,
      applicationLink: linkRef.current.value,
      source: sourceRef.current.value,
      notes: notesRef.current.value,
      status: statusRef.current.value,
      jobDescription: state.selectedApp.jobDescription,
    })
      .then((res) => {
        refreshApp();
        setMessage("App Updated");
        setTimeout(() => {
          document.getElementById("message").style.display = "none";
        }, 1000);
      })
      .catch((err) => console.log(err));
  }
  const renderRedirect = () => {
    if (state.selectedApp && redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: "/",
          }}
        />
      );
    }
  };
  return (
    <Container className="application-container">
      {state.selectedApp ? (
        <Form>
          <Form.Row>
            <Form.Label ref={searchRef}>
              Search: {state.selectedApp.searchId}
            </Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date Applied</Form.Label>
              <Form.Control
                type="date"
                ref={dateRef}
                value={state.selectedApp.dateApplied}
                readOnly
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSource">
              <Form.Label className="mt-3">Source</Form.Label>
              <Form.Control
                type="text"
                defaultValue={state.selectedApp.source}
                ref={sourceRef}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridRole">
              <Form.Label className="mt-3">Role</Form.Label>
              <Form.Control
                type="text"
                defaultValue={state.selectedApp.role}
                ref={roleRef}
              />
            </Form.Group>

            <Form.Group controlId="formGridCompany">
              <Form.Label className="mt-3">Company</Form.Label>
              <Form.Control
                defaultValue={state.selectedApp.companyName}
                ref={companyRef}
              />
            </Form.Group>

            <Form.Group controlId="formGridLink">
              <Form.Label className="mt-3">Link</Form.Label>
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
                defaultValue={state.selectedApp.jobDescription}
                ref={fileRef}
                readOnly
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNotes">
              <Form.Label className="mt-3">Notes</Form.Label>
              <Form.Control
                type="text"
                defaultValue={state.selectedApp.notes}
                ref={notesRef}
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridStatus">
              <Form.Label className="mt-3">
                Status (select from dropdown):
              </Form.Label>
              <Form.Control
                as="select"
                ref={statusRef}
                defaultValue={state.selectedApp.status}
              >
                <option>{state.selectedApp.status}</option>
                <option>Applied</option>
                <option>Interview - First Round</option>
                <option>Interview - Second Round</option>
                <option>Interview - Third/Final Round</option>
                <option>Offer Received</option>
                <option>Declined</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Row className="align-items-center">
            <Col className="col-2">
              <Button
                className="mt-3 editapp-button"
                variant="primary"
                type="button"
                onClick={editApp}
              >
                Update
              </Button>
            </Col>
            <Col>
              <span id="message">{message}</span>
            </Col>
          </Row>
        </Form>
      ) : (
        "No App Selected"
      )}
      {renderRedirect()}
    </Container>
  );
}
