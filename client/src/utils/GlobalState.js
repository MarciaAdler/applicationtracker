import React, { createContext, useReducer, useContext } from "react";

import { CLEAR_ALL } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_ALL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {});
  return <Provider value={[state, dispatch]} {...props} />;
};
const useStoreContext = () => {
  return useContext(StoreContext);
};
export { StoreProvider, useStoreContext };
