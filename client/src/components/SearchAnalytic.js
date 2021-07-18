import React, { useEffect, useState } from "react";
import { SET_SEARCHES } from "../utils/actions";
import { Card, Col } from "react-bootstrap";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
export default function SearchAnalytic() {
  const [state, dispatch] = useStoreContext();
  const [searchCount, setSearchCount] = useState(0);
  useEffect(() => {
    countSearches(state.currentUser.id);
  });
  function countSearches(user) {
    API.getSearches(user)
      .then((res) => {
        dispatch({
          type: SET_SEARCHES,
          searches: res.data,
        });
        setSearchCount(res.data.length);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Col className="col-12 col-md-6 col-lg-4 search-column">
        <Card className="analytics-card">
          <Card.Body>
            <Card.Title>Number of Searches</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Active Searches
            </Card.Subtitle>
            <Card.Text>{searchCount}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-12 col-md-6 col-lg-4">
        <Card className="analytics-card">
          <Card.Body>
            <Card.Title>Number of Searches</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Active Searches
            </Card.Subtitle>
            <Card.Text>{searchCount}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
