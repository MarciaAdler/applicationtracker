import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import dateFormat from "dateformat";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import { SET_POST } from "../utils/actions";

export default function Posts() {
  const [state, dispatch] = useStoreContext();
  const [redirect, setRedirect] = useState(false);

  function getsubstring(post) {
    return post.substring(0, 75);
  }

  function selectPost(post) {
    API.selectPost(post)
      .then((res) => {
        dispatch({
          type: SET_POST,
          selectedpost: {
            id: res.data.id,
            title: res.data.title,
            post: res.data.post,
            author: res.data.User.username,
            createdat: res.data.createdAt,
          },
        });
        let localStoragePost = {
          id: res.data.id,
          title: res.data.title,
          post: res.data.post,
          author: res.data.User.username,
          createdat: res.data.createdAt,
        };
        window.localStorage.setItem(
          "selectedPost",
          JSON.stringify(localStoragePost)
        );
        setRedirect(true);
      })
      .catch((err) => console.log(err));
  }
  // capturing request id in url
  const renderRedirect = () => {
    if (state.selectedpost && redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: "/viewdiscussion",
            search: `?${state.selectedpost.id}`,
          }}
        />
      );
    }
  };
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
                    <span
                      onClick={() => {
                        selectPost(post.id);
                      }}
                    >
                      more
                    </span>
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
      {renderRedirect()}
    </Container>
  );
}
