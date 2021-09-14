import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { SET_POST } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import dateFormat from "dateformat";
export default function FullPost() {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    if (state.selectedpost.id === 0) {
      dispatch({
        type: SET_POST,
        selectedpost: JSON.parse(localStorage.getItem("selectedPost")),
      });
    }
  }, []);
  return (
    <div className="home-container">
      <div className="home-filler">
        <Container className="resources-container mt-3">
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
        </Container>
      </div>
    </div>
  );
}
