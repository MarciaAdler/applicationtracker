import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
export default function EditProfile() {
  const [state, dispatch] = useStoreContext();
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
                />
              </Col>
              <Col className="col-12 col-md-6 col-lg-4 editprofile-col">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={`${state.currentUser.lastName}`}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-12 editprofile-col2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.email}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-12 editprofile-col2">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.location}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-12 col-md-9 col-lg-8 editprofile-col">
                <Form.Label>Primary Role</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.primaryRole}
                />
              </Col>
              <Col className="col-12 col-md-3 col-lg-4 editprofile-social">
                <Form.Label>Years Experience</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.yearsExperience}
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
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-8 editprofile-social">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.linkedIn}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-8 editprofile-social">
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.twitter}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-8 editprofile-social">
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.instagram}
                />
              </Col>
            </Row>
            <Row className="editprofile-row">
              <Col className="col-8 editprofile-social">
                <Form.Label>Other Link</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUser.otherLink}
                />
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
}
