import React from "react";
import { Container, Card } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import dateFormat from "dateformat";
export default function Posts() {
  const [state, dispatch] = useStoreContext();
  return (
    <Container className="resources-container">
      {state.posts.length > 0
        ? state.posts.map((post) => {
            return (
              <Card key={post.id} className="resouces-listitem">
                <Card.Header key={post.id}>
                  <strong>{post.title}</strong>
                </Card.Header>

                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    {post.post}

                    <footer className="blockquote-footer mt-1">
                      {post.User.username}
                      <br />
                      <small>
                        {dateFormat(
                          `${post.createdAt}`,
                          "dddd, mmmm, dS, yyyy, h:MM TT"
                        )}{" "}
                        {"EST"}
                      </small>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            );
          })
        : ""}
    </Container>
  );
}
