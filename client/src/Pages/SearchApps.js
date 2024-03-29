import React, { useEffect, useState } from "react";
import { ListGroup, Col, Row, Button } from "react-bootstrap";
import API from "../utils/API";
import { SET_APPS, SELECT_APP, SET_SEARCH } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import image from "../images/applicationimg.jpeg";
import { Redirect } from "react-router-dom";

export default function SearchApps() {
  const [state, dispatch] = useStoreContext();
  const [redirect, setRedirect] = useState(false);
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (
      state.selectedsearch.id === 0 &&
      localStorage.getItem("selectedSearch")
    ) {
      const selectedSearchLs = JSON.parse(
        localStorage.getItem("selectedSearch")
      );
      dispatch({
        type: SET_SEARCH,
        selectedsearch: selectedSearchLs,
      });
      getSearchApps(selectedSearchLs.id);
      getSearchStatus(selectedSearchLs);
    } else {
      getSearchApps(state.selectedsearch.id);
      getSearchStatus(state.selectedsearch);
    }
  }, []);

  function getSearchStatus(search) {
    API.getSearchStatus(search)
      .then((res) => {
        if (search.active === true) {
          setStatus("Inactive");
        } else {
          setStatus("Active");
        }
      })
      .catch((err) => console.log(err));
  }

  function getSearchApps(search) {
    API.getSearchApps(search)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: SET_APPS,
          apps: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  function selectApp(app) {
    API.selectApp(app).then((res) => {
      dispatch({
        type: SELECT_APP,
        selectedApp: {
          id: res.data.id,
          companyName: res.data.companyName,
          role: res.data.role,
          applicationLink: res.data.applicationLink,
          source: res.data.source,
          jobDescription: res.data.jobDescription,
          notes: res.data.notes,
          dateApplied: res.data.dateApplied,
          status: res.data.status,
          userId: res.data.UserId,
          searchId: res.data.Search.searchName,
        },
      });
      let localStorageSelectedApp = {
        id: res.data.id,
        companyName: res.data.companyName,
        role: res.data.role,
        applicationLink: res.data.applicationLink,
        source: res.data.source,
        jobDescription: res.data.jobDescription,
        notes: res.data.notes,
        dateApplied: res.data.dateApplied,
        status: res.data.status,
        userId: res.data.UserId,
        searchId: res.data.SearchId,
      };
      window.localStorage.setItem(
        "selectedapp",
        JSON.stringify(localStorageSelectedApp)
      );
      setRedirect(true);
    });
  }
  const renderRedirect = () => {
    if (state.selectedApp && redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: "/edit/",
            search: `?${state.selectedApp.id}`,
          }}
        />
      );
    }
  };
  function changeStatus(search) {
    console.log(search);
    if (search.active === true) {
      API.changeStatusInactive({
        id: search.id,
        active: false,
      }).then((res) => {
        console.log("res", res.data);

        dispatch({
          type: SET_SEARCH,
          selectedsearch: {
            id: state.selectedsearch.id,
            searchName: state.selectedsearch.searchName,
            active: false,
          },
        });
        let localStorageSelectedSearch = {
          id: state.selectedsearch.id,
          searchName: state.selectedsearch.searchName,
          active: false,
        };
        window.localStorage.setItem(
          "selectedSearch",
          JSON.stringify(localStorageSelectedSearch)
        );
        setStatus("Active");
      });
    } else {
      console.log(search);
      API.changeStatusActive({
        id: state.selectedsearch.id,

        active: true,
      }).then((res) => {
        dispatch({
          type: SET_SEARCH,
          selectedsearch: {
            id: state.selectedsearch.id,
            searchName: state.selectedsearch.searchName,
            active: true,
          },
        });
        let localStorageSelectedSearch = {
          id: state.selectedsearch.id,
          searchName: state.selectedsearch.searchName,
          active: true,
        };
        window.localStorage.setItem(
          "selectedSearch",
          JSON.stringify(localStorageSelectedSearch)
        );
        setStatus("Inactive");
      });
    }
  }

  return (
    <div className="home-container">
      <Button
        className="mark-search-inactive-button"
        onClick={() => {
          changeStatus(state.selectedsearch);
        }}
      >
        Mark Search {status}
      </Button>
      <ListGroup id="home-table">
        {state.apps.length > 0 ? (
          state.apps.map((app) => {
            return (
              <ListGroup.Item key={app.id}>
                <Row>
                  <Col xs={5} md={2}>
                    <strong>Date Applied:</strong>
                    <br />
                    <span className="application-text">{app.dateApplied}</span>
                  </Col>
                  <Col xs={6} md={2}>
                    <strong>
                      Role:
                      <br />
                    </strong>
                    <span className="application-text">{app.role}</span>
                  </Col>
                  <Col xs={12} md={3}>
                    <strong>Company Name:&nbsp;</strong>
                    <span className="application-text">{app.companyName}</span>
                  </Col>

                  <Col xs={6} md={2}>
                    <strong>Link:</strong> &nbsp;
                    {app.applicationLink !== "" ? (
                      <a
                        href={app.applicationLink}
                        target="_blank"
                        rel="noreferrer"
                        className="application-text"
                      >
                        Application Link
                      </a>
                    ) : (
                      <span className="application-text">No link added</span>
                    )}
                  </Col>
                  <Col xs={6} md={2}>
                    <strong>Source: &nbsp;</strong>{" "}
                    <span className="application-text">{app.source}</span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <strong>JD:</strong>&nbsp;
                    {app.jobDescription !== null ? (
                      <a
                        href={
                          process.env.PUBLIC_URL +
                          `/jobdescriptions/${app.jobDescription}`
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="application-text"
                      >
                        Job Description
                      </a>
                    ) : (
                      <span className="application-text">
                        No Job Description added
                      </span>
                    )}
                  </Col>
                  <Col xs={12} md={8}>
                    <strong>Notes:</strong>&nbsp;
                    <span className="application-text">{app.notes}</span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={4}>
                    <strong>Status:</strong>&nbsp;{" "}
                    <span className="application-text">{app.status}</span>
                  </Col>
                  <Col xs={6} md={4}>
                    <strong>Search:</strong>&nbsp;{" "}
                    <span className="application-text">
                      {app.Search.searchName}
                    </span>
                  </Col>
                  <Col xs={6} md={4}>
                    <Button
                      className="editapp-button"
                      onClick={() => {
                        selectApp(app.id);
                      }}
                    >
                      <strong>Edit</strong>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })
        ) : (
          <div className="text-center">
            <p className="text-center mt-3 noapp-text">
              No Apps. Click Add Application in the side menu to add an app.
            </p>
            <img id="applicationimg" src={image} alt="logo" />
          </div>
        )}
      </ListGroup>
      {renderRedirect()}
    </div>
  );
}
