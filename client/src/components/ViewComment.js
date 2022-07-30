import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { SET_COMMENTS } from "../utils/actions";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import dateFormat from "dateformat";
import Comment from "../components/Comment";

export default function ViewComment() {
  const [state, dispatch] = useStoreContext();
  useEffect(() => {
    if (state.selectedpost.id === 0 && localStorage.getItem("selectedPost")) {
      const selectedPostLs = JSON.parse(localStorage.getItem("selectedPost"));
      getComments(selectedPostLs.id);
    } else {
      getComments(state.selectedpost.id);
    }
  }, []);

  function getComments(post) {
    API.getComments(post)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: SET_COMMENTS,
          comments: res.data,
        });
        console.log(state.comments);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="mt-5">
      <h5 className="mx-2">Comments ({state.comments.length})</h5>
      <Comment />
      {/* {state.comments.length > 0
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
        : ""} */}
    </div>
  );
}
