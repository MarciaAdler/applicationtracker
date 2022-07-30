import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import dateFormat from "dateformat";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

export default function Comment() {
  const [state, dispatch] = useStoreContext();
  return (
    <Container>
      {state.comments.length > 0
        ? state.comments.map((comment) => {
            return (
              <Card key={comment.id}>
                <Card.Body>
                  {comment.comment}
                  <footer className="blockquote-footer mt-1">
                    {comment.User.username}
                    <br />
                    <small>
                      {dateFormat(
                        `${comment.createdAt}`,
                        "dddd, mmmm, dS, yyyy, h:MM TT"
                      )}
                    </small>
                  </footer>
                </Card.Body>
              </Card>
            );
          })
        : ""}
    </Container>
  );
}
