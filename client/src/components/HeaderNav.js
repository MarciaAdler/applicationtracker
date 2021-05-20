import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { SET_CURRENT_USER, LOGGEDIN } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
export default function HeaderNav() {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    if (state.currentUser.id === 0 && localStorage.getItem("currentUser")) {
      const currentUserLs = JSON.parse(localStorage.getItem("currentUser"));

      dispatch({
        type: SET_CURRENT_USER,
        currentUser: currentUserLs,
      });
    }

    dispatch({
      type: LOGGEDIN,
    });
  }, [dispatch, state.currentUser.id]);
  return (
    <Row className="header-nav">
      <h1 id="header-title">Application Tracker</h1>
    </Row>
  );
}
