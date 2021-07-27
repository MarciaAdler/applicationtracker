import React, { useRef, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_USER } from "../utils/actions";
export default function EditProfile() {
  const [state, dispatch] = useStoreContext();
  const [message, setMessage] = useState("");
  const firstRef = useRef();
  const lastRef = useRef();
  const emailRef = useRef();
  const locationRef = useRef();
  const primaryRef = useRef();
  const yearsexRef = useRef();
  const bioRef = useRef();
  const websiteRef = useRef();
  const linkedinRef = useRef();
  const twitterRef = useRef();
  const instagramRef = useRef();
  const otherRef = useRef();

  function updateUser() {
    API.updateUser({
      id: state.currentUser.id,
      username: state.currentUser.username,
      firstName: firstRef.current.value,
      lastName: lastRef.current.value,
      email: emailRef.current.value,
      location: locationRef.current.value,
      primaryRole: primaryRef.current.value,
      yearsExperience: yearsexRef.current.value,
      bio: bioRef.current.value,
      website: websiteRef.current.value,
      linkedIn: linkedinRef.current.value,
      twitter: twitterRef.current.value,
      instagram: instagramRef.current.value,
      otherLink: otherRef.current.value,
    })
      .then((res) => {
        API.getMyInfo({ id: state.currentUser.id }).then((results) => {
          dispatch({
            type: SET_CURRENT_USER,
            currentUser: {
              id: results.data.id,
              username: results.data.username,
              firstName: results.data.firstName,
              lastName: results.data.lastName,
              email: results.data.email,
              role: results.data.role,
              location: results.data.location,
              primaryRole: results.data.primaryRole,
              bio: results.data.bio,
              website: results.data.website,
              linkedIn: results.data.linkedIn,
              twitter: results.data.twitter,
              instagram: results.data.instagram,
              otherLink: results.data.otherLink,
              yearsExperience: results.data.yearsExperience,
            },
          });
          let localStorageUser = {
            id: results.data.id,
            username: results.data.username,
            firstName: results.data.firstName,
            lastName: results.data.lastName,
            email: results.data.email,
            role: results.data.role,
            location: results.data.location,
            primaryRole: results.data.primaryRole,
            bio: results.data.bio,
            website: results.data.website,
            linkedIn: results.data.linkedIn,
            twitter: results.data.twitter,
            instagram: results.data.instagram,
            otherLink: results.data.otherLink,
            yearsExperience: results.data.yearsExperience,
          };

          window.localStorage.setItem(
            "currentUser",
            JSON.stringify(localStorageUser)
          );
          setMessage("Your Profile has been updated successfully");
        });
      })
      .catch((err) => {
        console.log(err);
        setMessage("Something went wrong. Please try again.");
      });
  }
  return (
    <div className="home-container">
      <div className="home-filler">
        <h2 className="text-center mt-2">
          {state.currentUser.username}&nbsp; Profile
        </h2>

        <Form className="profile-container">
          {/* <Form.Row> */}
          {/* <div id="profile-headerdiv" className="profile-edit">
            <Button className="editapp-button">Edit Profile</Button>
          </div> */}
          {/* </Form.Row> */}
          <div className="profile-section">
            <h4>About Me</h4>
            <Row className="editprofile-row">
              <Col className="col-12 col-md-6 col-lg-4 editprofile-col">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={`${state.currentUser.firstName}`}
                  ref={firstRef}
                />
              </Col>
              <Col className="col-12 col-md-6 col-lg-4 editprofile-col">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={`${state.currentUser.lastName}`}
                  ref={lastRef}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-12 editprofile-col2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.email}
                  ref={emailRef}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-12 editprofile-col2">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.location}
                  ref={locationRef}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-12 col-md-9 col-lg-8 editprofile-role">
                <Form.Label>Primary Role</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.primaryRole}
                  ref={primaryRef}
                />
              </Col>
              <Col className="col-12 col-md-3 col-lg-4 editprofile-social">
                <Form.Label>Years Experience</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.yearsExperience}
                  ref={yearsexRef}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-12 editprofile-col2">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  defaultValue={state.currentUser.bio}
                  ref={bioRef}
                />
              </Col>
            </Row>
            <Row className="editprofile-row"></Row>
            <hr />
            <h4>Social Profiles</h4>
            <Row className="editprofile-row">
              <Col className="col-8 editprofile-social">
                <Form.Label>Website</Form.Label>
                <Form.Control
                  type="link"
                  defaultValue={state.currentUser.website}
                  ref={websiteRef}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-8 editprofile-social">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.linkedIn}
                  ref={linkedinRef}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-8 editprofile-social">
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.twitter}
                  ref={twitterRef}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-8 editprofile-social">
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.instagram}
                  ref={instagramRef}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-8 editprofile-social">
                <Form.Label>Other Link</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.otherLink}
                  ref={otherRef}
                />
              </Col>
            </Row>
          </div>
          <div className="text-center">
            <p className="mt-2">{message}</p>
            <Button
              className="editprofile-button"
              onClick={() => {
                updateUser();
              }}
            >
              Update Profile
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
