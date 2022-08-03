import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { SET_APPS } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import ViewApp from "../components/ViewApp";
export default function Applications() {
  return (
    <div className="home-container">
      <ViewApp />
    </div>
  );
}
