import React, { useEffect } from "react";
// import { ListGroup, Col, Row } from "react-bootstrap";
import { SET_APPS } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import ViewApp from "../components/ViewApp";
export default function Home() {
  // const [state, dispatch] = useStoreContext();
  // useEffect(() => {
  //   if (state.currentUser.id === 0 && localStorage.getItem("currentUser")) {
  //     const currentUserLs = JSON.parse(localStorage.getItem("currentUser"));
  //     getMyApps(currentUserLs.id);
  //   } else {
  //     getMyApps(state.currentUser.id);
  //   }
  // }, []);
  // function getMyApps(user) {
  //   console.log(user);
  //   API.getMyApps(user)
  //     .then((res) => {
  //       console.log(res.data);
  //       dispatch({
  //         type: SET_APPS,
  //         apps: res.data,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }
  return (
    <div className="home-container">
      <div className="home-filler">
        <ViewApp />
      </div>
    </div>
  );
}
