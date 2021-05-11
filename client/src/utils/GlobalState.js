import React, { createContext, useReducer, useContext } from "react";

import { CLEAR_ALL, SET_CURRENT_USER, LOGGEDIN } from "./actions";

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
  });
  return <Provider value={[state, dispatch]} {...props} />;
};
const useStoreContext = () => {
  return useContext(StoreContext);
};
export { StoreProvider, useStoreContext };
