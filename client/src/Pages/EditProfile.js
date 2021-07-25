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

        <Form className="application-container">
          {/* <Form.Row> */}
          {/* <div id="profile-headerdiv" className="profile-edit">
            <Button className="editapp-button">Edit Profile</Button>
          </div> */}
          {/* </Form.Row> */}
          <Row className="">
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
          <Row>
            <Col className="col-12 editprofile-col2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                defaultValue={state.currentUser.email}
              />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
