import React, { useRef, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
// import dateFormat from "dateformat";

export default function PostComment() {
  const [state, dispatch] = useStoreContext();
  const commentRef = useRef("");
  const [message, setMessage] = useState("");
  function addComment() {
    API.addComment({
      comment: commentRef.current.value,
      userId: state.currentUser.id,
    })
      .then((res) => {
        console.log(res.data);
        setMessage("Your post has been added");
        const form = document.getElementById("myForm");
        form.reset();
        setTimeout(() => {
          document.getElementById("success-message").style.display = "none";
        }, 1000);
        // getPosts();
      })
      .catch((err) => {
        console.log(err);
        setMessage("Something went wrong. Please try again.");
      });
  }
  return (
    <div>
      <Form className="profile-container" id="myForm">
        <Row className="editprofile-row">
          <Col className="col-12 editprofile-col2">
            <Form.Label className="mt-2">Add Post Here</Form.Label>
            <Form.Control as="textarea" rows={5} ref={commentRef} />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="text-center button-col col-4">
            <Button
              className="editprofile-button"
              onClick={() => {
                addComment();
              }}
            >
              Add Comment
            </Button>
          </Col>
          <Col>
            <span className="mt-2 message" id="success-message">
              {message}
            </span>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
