import React, { useState } from "react";
import { Button } from "react-bootstrap";
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
        <div id="profile-headerdiv" className="profile-edit">
          <Button
            className="editapp-button"
            onClick={() => {
              editProfile();
            }}
          >
            Edit Profile
          </Button>
        </div>
        <div>
          <div className="application-container">
            <h6>
              Name: {state.currentUser.firstName} {state.currentUser.lastName}
            </h6>
            <p>Email: &nbsp;{state.currentUser.email}</p>
          </div>
        </div>
      </div>
      {renderRedirect()}
    </div>
  );
}
