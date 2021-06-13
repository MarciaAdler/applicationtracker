import React, { useEffect } from "react";
// import { ListGroup, Col, Row } from "react-bootstrap";
import { SET_APPS } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import ViewApp from "../components/ViewApp";
export default function Applications() {
  return (
    <div className="home-container">
      <div className="home-filler">
        <ViewApp />
      </div>
    </div>
  );
}
