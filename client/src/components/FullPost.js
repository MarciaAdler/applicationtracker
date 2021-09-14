import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { SET_POST } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
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
        <Container className="resources-container post-text mt-3">
          <h4>{state.selectedpost.title}</h4>
          <pre className="post-text">{state.selectedpost.post}</pre>
        </Container>
      </div>
    </div>
  );
}
