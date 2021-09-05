import React from "react";
import { Container, Card } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import dateFormat from "dateformat";

export default function Posts() {
  const [state, dispatch] = useStoreContext();

  function getsubstring(post) {
    return post.substring(0, 75);
  }

  return (
    <Container className="resources-container">
      {state.posts.length > 0
        ? state.posts.map((post) => {
            return (
              <Card key={post.id} className="resouces-listitem mt-3">
                <Card.Header key={post.id}>
                  <strong>{post.title}</strong>
                </Card.Header>

                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    {getsubstring(post.post)}...
                    <footer className="blockquote-footer mt-1">
                      {post.User.username}
                      <br />
                      <small>
                        {dateFormat(
                          `${post.createdAt}`,
                          "dddd, mmmm, dS, yyyy, h:MM TT"
                        )}
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
