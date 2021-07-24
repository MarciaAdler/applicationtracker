import React, { useEffect, useState } from "react";
import { SET_SEARCHES } from "../utils/actions";
import { Row, Col, Card } from "react-bootstrap";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import SearchAnalytic from "../components/SearchAnalytic";
export default function Analytics() {
  const [state, dispatch] = useStoreContext();
  const [searchCount, setSearchCount] = useState(0);
  const [inactiveCount, setInactiveCount] = useState(0);
  const [appCount, setAppCount] = useState(0);
  const [appliedCount, setAppliedCount] = useState(0);
  const [inprogressCount, setInprogressCount] = useState(0);
  const [declinedCount, setDeclinedCount] = useState(0);
  useEffect(() => {
    if (state.currentUser.id === 0 && localStorage.getItem("currentUser")) {
      const currentUserLs = JSON.parse(localStorage.getItem("currentUser"));
      countSearches(currentUserLs.id);
      countInactiveSearches(currentUserLs.id);
      countApps(currentUserLs.id);
      // appsByStatus(currentUserLs.id);
    } else {
      countSearches(state.currentUser.id);
      countInactiveSearches(state.currentUser.id);
      countApps(state.currentUser.id);
      // appsByStatus(state.currentUser.id);
    }
  }, []);
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

  function countInactiveSearches(user) {
    API.getInactiveSearches(user)
      .then((res) => {
        setInactiveCount(res.data.length);
      })
      .catch((err) => console.log(err));
  }
  function countApps(user) {
    API.getMyApps(user)
      .then((res) => {
        setAppCount(res.data.length);
        res.data.forEach((app) => {
          if (app.status === "Applied") {
            setAppliedCount((appliedCount) => appliedCount + 1);
          } else if (app.status === "Inprogress") {
            setInprogressCount((inprogressCount) => inprogressCount + 1);
          } else {
            setDeclinedCount((declinedCount) => declinedCount + 1);
          }
        });
      })
      .catch((err) => console.log(err));
  }
  // function appsByStatus(user) {
  //   API.getMyApps(user)
  //     .then((res) => {
  //       console.log(res.data);
  //       for (let i = 0; i < res.data.length; i++) {
  //         const app = res.data[i];
  //         console.log(app.status);
  //         if (app.status === "Applied") {
  //           setAppliedCount(appliedCount + 1);
  //         } else if (app.status === "Inprogress") {
  //           setInprogressCount(+1);
  //         } else {
  //           setDeclinedCount(declinedCount + 1);
  //         }
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }
  return (
    <div className="home-container">
      <Row>
        <Col className="col-12 col-md-6 col-lg-4 search-column">
          <Card className="analytics-card">
            <Card.Body>
              <Card.Title>Number of Searches</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Active</Card.Subtitle>
              <Card.Text>{searchCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 search-column">
          <Card className="analytics-card">
            <Card.Body>
              <Card.Title>Number of Searches</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Inactive
              </Card.Subtitle>
              <Card.Text>{inactiveCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-md-6 col-lg-4 search-column">
          <Card className="analytics-card">
            <Card.Body>
              <Card.Title>Number of Applications</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Total</Card.Subtitle>
              <Card.Text>{appCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 search-column">
          <Card className="analytics-card">
            <Card.Body>
              <Card.Title>Number of Applications</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Status: Applied
              </Card.Subtitle>

              <Card.Text>{appliedCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-md-6 col-lg-4 search-column">
          <Card className="analytics-card">
            <Card.Body>
              <Card.Title>Number of Applications</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Status: Inprogress
              </Card.Subtitle>

              <Card.Text>{inprogressCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-md-6 col-lg-4 search-column">
          <Card className="analytics-card">
            <Card.Body>
              <Card.Title>Number of Applications</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Status: Declined
              </Card.Subtitle>

              <Card.Text>{declinedCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
