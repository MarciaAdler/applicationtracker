import React, { useState, useRef } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

export default function AddNewApp() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStoreContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFileName] = useState(null);
  const dateRef = useRef();
  const roleRef = useRef();
  const companyRef = useRef();
  const linkRef = useRef();
  const notesRef = useRef();
  const sourceRef = useRef();

  const onFileChange = (event) => {
    const nameOfFile = event.target.files[0].name.replace(/\s+/g, "");
    // Update the state
    setSelectedFile(event.target.files[0]);
    setFileName(
      state.currentUser.id + "-" + dateRef.current.value + "-" + nameOfFile
    );
  };
  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", selectedFile, selectedFile.name);
    formData.append("userId", state.currentUser.id);
    formData.append("date", dateRef.current.value);

    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
    API.uploadDescription(formData).then(console.log("uploaded", selectedFile));
  };
  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {selectedFile.name}</p>

          <p>File Type: {selectedFile.type}</p>

          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  function addApp() {
    API.addApp({
      companyName: companyRef.current.value,
      role: roleRef.current.value,
      source: sourceRef.current.value,
      applicationLink: linkRef.current.value,
      jobDescription: filename,
      notes: notesRef.current.value,
      dateApplied: dateRef.current.value,
      userId: state.currentUser.id,
    })
      .then((req) => {
        console.log(req.data);
        if (filename !== null) {
          onFileUpload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Container className="signup-container">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date Applied</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date applied"
              ref={dateRef}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSource">
            <Form.Label>Source</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter where role was found"
              ref={sourceRef}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridRole">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="Role" ref={roleRef} />
          </Form.Group>

          <Form.Group controlId="formGridCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control placeholder="Company" ref={companyRef} />
          </Form.Group>

          <Form.Group controlId="formGridLink">
            <Form.Label>Link</Form.Label>
            <Form.Control placeholder="https://..." ref={linkRef} />
          </Form.Group>
        </Form.Row>
        <Form.Row className="mt-3">
          <Form.Group as={Col} controlId="formGridJD">
            <div>
              <h2>Upload JD</h2>

              <div>
                <input
                  type="file"
                  name="job_description"
                  onChange={onFileChange}
                />
              </div>
              {fileData()}
            </div>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              type="text"
              placeholer="Notes"
              ref={notesRef}
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridStatus">
            <Form.Label>Status:</Form.Label>
            <Form.Control value="Applied" readOnly />
          </Form.Group>
        </Form.Row>

        <Button
          className="mt-3"
          variant="primary"
          type="button"
          onClick={() => {
            addApp();
          }}
        >
          Add
        </Button>
      </Form>
    </Container>
  );
}
