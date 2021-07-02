import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import { SET_APPS, SET_SEARCHES } from "../utils/actions";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

export default function AddNewApp() {
  const [state, dispatch] = useStoreContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFileName] = useState(null);
  const [searchid, setSearchId] = useState(null);
  const dateRef = useRef();
  const roleRef = useRef();
  const companyRef = useRef();
  const linkRef = useRef();
  const notesRef = useRef();
  const sourceRef = useRef();
  useEffect(() => {
    if (state.currentUser.id === 0 && localStorage.getItem("currentUser")) {
      const currentUserLs = JSON.parse(localStorage.getItem("currentUser"));
      getSearches(currentUserLs.id);
    } else {
      getSearches(state.currentUser.id);
    }
  }, []);
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
  function handleSelectChange(event) {
    console.log(event.target);
    let selectElement = event.target;
    console.log(selectElement.value);
    setSearchId(selectElement.value);
  }
  function addApp() {
    API.addApp({
      companyName: companyRef.current.value,
      role: roleRef.current.value,
      source: sourceRef.current.value,
      applicationLink: linkRef.current.value,
      jobDescription: filename,
      notes: notesRef.current.value,
      dateApplied: dateRef.current.value,
      UserId: state.currentUser.id,
      SearchId: searchid,
    })
      .then((req) => {
        console.log(req.data);
        if (filename !== null) {
          onFileUpload();
        }
        getMyApps(state.currentUser.id);
        const form = document.getElementById("myForm");
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getMyApps(user) {
    API.getMyApps(user)
      .then((res) => {
        dispatch({
          type: SET_APPS,
          apps: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  function getSearches(user) {
    API.getSearches(user)
      .then((res) => {
        dispatch({ type: SET_SEARCHES, searches: res.data });
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container className="application-container">
      <Form id="myForm">
        <Form.Row>
          <Form.Label>Search</Form.Label>
          <Form.Control as="select" onChange={handleSelectChange}>
            <option>
              Click to select which Search to include this application in
            </option>
            {state.searches.length > 0
              ? state.searches.map((search) => {
                  return (
                    <option value={search.id} key={search.id}>
                      {search.searchName}
                    </option>
                  );
                })
              : "no searches"}
          </Form.Control>
        </Form.Row>
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

          <Form.Group as={Col} controlId="formGridAddStatus">
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
