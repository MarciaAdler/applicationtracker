import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { SET_SEARCHES } from "../utils/actions";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
export default function Search() {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    getSearches(state.currentUser.id);
  });
  function getSearches(user) {
    API.getSearches(user)
      .then((res) => {
        dispatch({
          type: SET_SEARCHES,
          searches: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="resources-container">
      <h2 className="mt-2 text-center">My Searches</h2>
      <ListGroup className="resources-listgroup">
        {state.searches.length > 0
          ? state.searches.map((search) => {
              return (
                <ListGroup.Item key={search.id}>
                  {search.searchName}
                </ListGroup.Item>
              );
            })
          : ""}
      </ListGroup>
      <p id="add-new-search">
        Click <a href="/addsearch">here</a> to add a new search
      </p>
    </div>
  );
}
