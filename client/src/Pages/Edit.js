import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
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

  useEffect(() => {
    loadRequest(window.location.search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function loadRequest(url) {
    console.log("From loadRequest function: ");
    console.log(url.replace("?", ""));

    if (!state.selectedApp) {
      API.selectApp(url.replace("?", ""))
        .then((res) => {
          console.log(res.data);
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
            searchId: res.data.SearchId,
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
  function editApp() {
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
        console.log(res.data);
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
            searchId: res.data.searchId,
          },
        });
        setRedirect(true);
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
            <Form.Label>Search: {state.selectedApp.searchId}</Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date Applied</Form.Label>
              <Form.Control
                type="date"
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
                defaultValue={state.selectedApp.status}
                ref={statusRef}
              >
                <option>Applied</option>
                <option>Inprogess</option>
                <option>Declined</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Button
            className="mt-3 editapp-button"
            variant="primary"
            type="button"
            onClick={editApp}
          >
            Update
          </Button>
        </Form>
      ) : (
        "No App Selected"
      )}
      {renderRedirect()}
    </Container>
  );
}
