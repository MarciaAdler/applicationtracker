import React from "react";
import { Button } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";

export default function Profile() {
  const [state, dispatch] = useStoreContext();
  return (
    <div className="home-container">
      <div className="home-filler">
        <h2 className="text-center mt-2">
          {state.currentUser.username}&nbsp; Profile
        </h2>
        <div id="profile-headerdiv" className="profile-edit">
          <Button className="editapp-button">Edit Profile</Button>
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
    </div>
  );
}
