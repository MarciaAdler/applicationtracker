import React from "react";
// import { ListGroup, Col, Row } from "react-bootstrap";
// import { SET_APPS } from "../utils/actions";
// import { useStoreContext } from "../utils/GlobalState";
// import API from "../utils/API";
import ViewApp from "../components/ViewApp";
export default function Home() {
  return (
    <div className="home-container">
      <ViewApp />
    </div>
  );
}
