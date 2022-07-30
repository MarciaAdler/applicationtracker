import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { SET_POST } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import dateFormat from "dateformat";
import PostComment from "./PostComment";
import ViewComment from "./ViewComment";
export default function FullPost() {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    if (state.selectedpost.id === 0 && localStorage.getItem("selectedPost")) {
      const selectedPostLs = JSON.parse(localStorage.getItem("selectedPost"));
      dispatch({
        type: SET_POST,
        selectedpost: selectedPostLs,
      });
    }
  }, []);
  return (
    <div className="home-container">
      <div className="home-filler">
        <Container className="resources-container mt-3">
          <a href="/discussionboard" className="post-showmore">
            &larr; Back to Discussion Board
          </a>
          <br></br>
          <small>
            Posted on: &nbsp;
            {dateFormat(
              `${state.selectedpost.createdat}`,
              "dddd, mmmm, dS, yyyy, h:MM TT"
            )}
          </small>
          <h4 className="mt-2">{state.selectedpost.title}</h4>
          <h6>posted by: &nbsp;{state.selectedpost.author}</h6>
          <pre className="post-text mt-3">{state.selectedpost.post}</pre>
          <div className="comments">
            <PostComment />
            <ViewComment />
          </div>
        </Container>
      </div>
    </div>
  );
}
