import React, { useEffect } from "react";
import {} from "react-bootstrap";

import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import {} from "../utils/actions";

export default function ViewComment() {
  const [state, dispatch] = useStoreContext();
  //   useEffect(() => {
  //     getComments(state.selectedpost.id);
  //   });

  //   function getComments(post){
  //     API.getComments(post).then(
  //         dispatch
  //     )
  //   }
  return <div>test Comment</div>;
}
