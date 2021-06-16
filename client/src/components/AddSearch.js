import React, { useRef } from "react";
import { Form, Col, Button } from "react-bootstrap";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
export default function Search() {
  const [state, dispatch] = useStoreContext();
  const searchNameRef = useRef();

  function addSearch() {
    API.addSearch({
      name: searchNameRef.current.value,
      userId: state.currentUser.id,
    })
      .then((res) => {
        const form = document.getElementById("myForm");
        form.reset();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="resources-container">
      <h2 className="mt-2 text-center">Add Search</h2>
      <Form id="myForm">
        <Form.Group as={Col} controlId="formGridSearchName">
          <Form.Label>Search Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search name"
            ref={searchNameRef}
          />
        </Form.Group>
        <Button
          className="editapp-button mt-3"
          variant="primary"
          type="button"
          onClick={() => {
            addSearch();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
