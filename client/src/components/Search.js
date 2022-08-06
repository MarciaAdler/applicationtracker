import React, { useEffect, useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { SET_SEARCHES, SET_SEARCH } from "../utils/actions";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { Redirect } from "react-router-dom";
export default function Search() {
  const [state, dispatch] = useStoreContext();
  const [redirect, setRedirect] = useState(false);
  const [inactiveSearches, setInactiveSearches] = useState([]);
  useEffect(() => {
    getSearches(state.currentUser.id);
    getInactiveSearches(state.currentUser.id);
  }, []);
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
  function getInactiveSearches(user) {
    API.getInactiveSearches(user)
      .then((res) => {
        setInactiveSearches(res.data);
      })
      .catch((err) => console.log(err));
  }
  function selectSearch(search) {
    console.log(search);
    API.getSearch(search).then((res) => {
      console.log(res.data);
      dispatch({
        type: SET_SEARCH,
        selectedsearch: {
          id: res.data.id,
          searchName: res.data.searchName,
          active: res.data.active,
        },
      });
      let localStorageSelectedSearch = {
        id: res.data.id,
        searchName: res.data.searchName,
        active: res.data.active,
      };
      window.localStorage.setItem(
        "selectedSearch",
        JSON.stringify(localStorageSelectedSearch)
      );
      setRedirect(true);
    });
  }

  const renderRedirect = () => {
    if (state.selectedsearch && redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: "/searchapps/",
            search: `?${state.selectedsearch.id}`,
          }}
        />
      );
    }
  };
  return (
    <div className="resources-container">
      <h2 className="mt-2 text-center">My Searches</h2>
      <h4 className="text-start mt-3 mb-3">Active</h4>
      <ListGroup className="resources-listgroup">
        {state.searches.length > 0
          ? state.searches.map((search) => {
              return (
                <ListGroup.Item
                  className="search-item"
                  key={search.id}
                  onClick={() => {
                    selectSearch(search.id);
                  }}
                >
                  {search.searchName}
                </ListGroup.Item>
              );
            })
          : ""}
      </ListGroup>
      <h4 className="text-start mt-4 mb-3">Inactive</h4>
      <ListGroup className="resources-listgroup">
        {inactiveSearches.length > 0
          ? inactiveSearches.map((search) => {
              return (
                <ListGroup.Item
                  className="search-item"
                  key={search.id}
                  onClick={() => {
                    selectSearch(search.id);
                  }}
                >
                  {search.searchName}
                </ListGroup.Item>
              );
            })
          : ""}
      </ListGroup>
      <p id="add-new-search">
        Click <a href="/addsearch">here</a> to add a new search
      </p>
      {renderRedirect()}
    </div>
  );
}
