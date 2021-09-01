import React, { useRef, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
export default function AddPost() {
  const [state, dispatch] = useStoreContext();
  const postRef = useRef("");
  const titleRef = useRef("");
  const [message, setMessage] = useState("");
  function addPost() {
    API.addPost({
      title: titleRef.current.value,
      post: postRef.current.value,
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
      })
      .catch((err) => {
        console.log(err);
        setMessage("Something went wrong. Please try again.");
      });
  }
  return (
    <div className="home-filler">
      <Form className="profile-container" id="myForm">
        <Row className="editprofile-row">
          <Col className="col-12 editprofile-col2">
            <Form.Label>Add Title Here</Form.Label>
            <Form.Control as="textarea" rows={1} ref={titleRef}></Form.Control>
            <Form.Label className="mt-2">Add Post Here</Form.Label>
            <Form.Control as="textarea" rows={5} ref={postRef} />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="text-center button-col col-4">
            <Button
              className="editprofile-button"
              onClick={() => {
                addPost();
              }}
            >
              Update Profile
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
