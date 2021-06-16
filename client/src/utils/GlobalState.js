import React, { createContext, useReducer, useContext } from "react";

import {
  CLEAR_ALL,
  SET_CURRENT_USER,
  LOGGEDIN,
  SET_APPS,
  SELECT_APP,
  SET_SEARCH,
  SET_SEARCHES,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          id: action.currentUser.id,
          username: action.currentUser.username,

          firstName: action.currentUser.firstName,
          lastName: action.currentUser.lastName,

          email: action.currentUser.email,
        },
      };
    case LOGGEDIN:
      return {
        ...state,
        loggedIn: true,
      };
    case SET_APPS:
      return {
        ...state,
        apps: action.apps,
      };
    case SELECT_APP:
      return {
        ...state,
        selectedApp: {
          id: action.selectedApp.id,
          companyName: action.selectedApp.companyName,
          role: action.selectedApp.role,
          applicationLink: action.selectedApp.applicationLink,
          source: action.selectedApp.source,
          jobDescription: action.selectedApp.jobDescription,
          notes: action.selectedApp.notes,
          dateApplied: action.selectedApp.dateApplied,
          userId: action.selectedApp.userId,
          status: action.selectedApp.status,
        },
      };
    case SET_SEARCHES:
      return {
        ...state,
        searches: action.searches,
      };
    case SET_SEARCH:
      return {
        ...state,
        selectedsearch: action.selectedsearch,
      };
    case CLEAR_ALL:
      return {
        currentUser: {
          id: 0,
          username: "",
          firstName: "",
          lastName: "",
          email: "",
        },
        loggedIn: false,
        apps: [],
        selectedApp: {
          id: 0,
          companyName: "",
          role: "",
          applicationLink: "",
          source: "",
          jobDescription: "",
          notes: "",
          dateApplied: "",
          userId: 0,
          status: "",
        },
        searches: [],
        selectedsearch: {
          id: 0,
          name: "",
        },
      };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentUser: {
      id: 0,
      username: "",
      firstName: "",
      lastName: "",
      email: "",
    },
    loggedIn: false,
    apps: [],
    selectedApp: {
      id: 0,
      companyName: "",
      role: "",
      applicationLink: "",
      source: "",
      jobDescription: "",
      notes: "",
      dateApplied: "",
      userId: 0,
      status: "",
    },
    searches: [],
    selectedsearch: {
      id: 0,
      name: "",
    },
  });
  return <Provider value={[state, dispatch]} {...props} />;
};
const useStoreContext = () => {
  return useContext(StoreContext);
};
export { StoreProvider, useStoreContext };
