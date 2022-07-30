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
    API.postComment({
      comment: commentRef.current.value,
      BlogPostId: state.selectedpost.id,
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
    <Form className="" id="myForm">
      <Row className="">
        <Col className="mt-3">
          <Form.Control
            as="textarea"
            rows={5}
            ref={commentRef}
            placeholder="Add Comment Here"
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="text-center addcomment-col col-lg-3 col-md-3 col-12">
          <Button
            className="addcomment-button"
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
  );
}
