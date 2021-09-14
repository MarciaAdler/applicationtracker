import React, { createContext, useReducer, useContext } from "react";

import {
  CLEAR_ALL,
  SET_CURRENT_USER,
  LOGGEDIN,
  SET_APPS,
  SELECT_APP,
  SET_SEARCH,
  SET_SEARCHES,
  SET_POSTS,
  SET_POST,
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
          role: action.currentUser.role,
          company: action.currentUser.company,
          location: action.currentUser.location,
          primaryRole: action.currentUser.primaryRole,
          bio: action.currentUser.bio,
          website: action.currentUser.website,
          linkedIn: action.currentUser.linkedIn,
          twitter: action.currentUser.twitter,
          instagram: action.currentUser.instagram,
          otherLink: action.currentUser.otherLink,
          yearsExperience: action.currentUser.yearsExperience,
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
          searchId: action.selectedApp.searchId,
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
        selectedsearch: {
          id: action.selectedsearch.id,
          searchName: action.selectedsearch.searchName,
          active: action.selectedsearch.active,
        },
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case SET_POST:
      return {
        ...state,
        selectedpost: {
          id: action.selectedpost.id,
          title: action.selectedpost.title,
          post: action.selectedpost.post,
          author: action.selectedpost.author,
        },
      };
    case CLEAR_ALL:
      return {
        currentUser: {
          id: 0,
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          role: "",
          company: "",
          location: "",
          primaryRole: "",
          bio: "",
          website: "",
          linkedIn: "",
          twitter: "",
          instagram: "",
          otherLink: "",
          yearsExperience: 0,
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
          searchId: 0,
        },
        searches: [],
        selectedsearch: {
          id: 0,
          name: "",
          active: "",
        },
        posts: [],
        selectedpost: {
          id: 0,
          title: "",
          post: "",
          author: "",
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
      role: "",
      company: "",
      location: "",
      primaryRole: "",
      bio: "",
      website: "",
      linkedIn: "",
      twitter: "",
      instagram: "",
      otherLink: "",
      yearsExperience: 0,
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
      searchId: 0,
    },
    searches: [],
    selectedsearch: {
      id: 0,
      name: "",
      active: "",
    },
    posts: [],
    selectedpost: {
      id: 0,
      title: "",
      post: "",
      author: "",
    },
  });
  return <Provider value={[state, dispatch]} {...props} />;
};
const useStoreContext = () => {
  return useContext(StoreContext);
};
export { StoreProvider, useStoreContext };
