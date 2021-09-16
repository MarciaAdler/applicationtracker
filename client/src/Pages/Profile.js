import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { Redirect } from "react-router-dom";

export default function Profile() {
  const [state, dispatch] = useStoreContext();
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: "/editprofile/",
            search: `?${state.currentUser.id}`,
          }}
        />
      );
    }
  };
  function editProfile() {
    setRedirect(true);
  }
  return (
    <div className="home-container">
      <div className="home-filler">
        <h2 className="text-center mt-2">
          {state.currentUser.username}&nbsp; Profile
        </h2>

        <div>
          <div className="profile-container">
            <div id="profile-headerdiv" className="profile-edit mt-2">
              <Button
                className="editapp-button"
                onClick={() => {
                  editProfile();
                }}
              >
                Edit Profile
              </Button>
            </div>
            <div className="profile-section">
              <h5 className="text-center">
                <strong>About Me</strong>
              </h5>
              <p>
                <strong>Name: </strong>
                {state.currentUser.firstName} {state.currentUser.lastName}
              </p>
              <p>
                <strong>Email: </strong>&nbsp;{state.currentUser.email}
              </p>
              <p>
                <strong>Location:</strong> &nbsp; {state.currentUser.location}
              </p>

              <Row className="profile-row">
                <Col>
                  <strong>Primary Role: </strong>
                  {state.currentUser.primaryRole}
                </Col>
                <Col>
                  <strong>Years Experience: </strong>
                  {state.currentUser.yearsExperience}
                </Col>
              </Row>
              <pre className="post-text">
                <strong>Bio: </strong>
                {state.currentUser.bio}
              </pre>
              <hr />
              <h5 className="text-center">
                <strong>Social Links</strong>
              </h5>
              <p>
                <strong>Website: </strong>
                {state.currentUser.website}
              </p>
              <p>
                <strong>LinkedIn: </strong>
                {state.currentUser.linkedIn}
              </p>
              <p>
                <strong>Twitter: </strong>
                {state.currentUser.twitter}
              </p>
              <p>
                <strong>Instagram: </strong>
                {state.currentUser.instagram}
              </p>
              <p>
                <strong>OtherLink: </strong>
                {state.currentUser.otherLink}
              </p>
            </div>
          </div>
        </div>
      </div>
      {renderRedirect()}
    </div>
  );
}
