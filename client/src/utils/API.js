/* eslint-disable import/no-anonymous-default-export */
const axios = require("axios");

export default {
  uploadDescription: function (file) {
    console.log(file);
    return axios.post("/api/uploaddescription", file);
  },
  createUser: function (req) {
    console.log(req);
    return axios.post("/api/signup", req);
  },
  getUser: function (req) {
    return axios.post("/api/login", req);
  },
  addApp: function (app) {
    console.log(app);
    return axios.post("/api/addapp", app);
  },
  getMyApps: function (user) {
    console.log(user);
    return axios.get("/api/getmyapps/" + user);
  },
  selectApp: function (app) {
    return axios.get("/api/selectapp/" + app);
  },
  editApp: function (app) {
    console.log(app);
    return axios.put("/api/editapp", app);
  },
  addSearch: function (search) {
    return axios.post("/api/addsearch", search);
  },
  getSearches: function (user) {
    return axios.get("/api/getsearches/" + user);
  },
  getSearchId: function (search) {
    return axios.get("/api/getsearchid/" + search);
  },
  getSearch: function (search) {
    return axios.get("/api/getsearch/" + search);
  },
  getSearchApps: function (search) {
    return axios.get("/api/getsearchapps/" + search);
  },
  refreshSelectedApp: function (app) {
    return axios.get("/api/refreshapp/" + app);
  },
  getInactiveSearches: function (user) {
    return axios.get("/api/inactivesearches/" + user);
  },
  updateUser: function (user) {
    console.log(user);
    return axios.put("/api/updateuser", user);
  },
  getMyInfo: function (req) {
    console.log(req);
    return axios.get("/api/getmyinfo/" + req.id);
  },
  addPost: function (post) {
    console.log(post);
    return axios.post("/api/addpost", post);
  },
  getPosts: function (req) {
    return axios.get("/api/getposts");
  },
  selectPost: function (post) {
    return axios.get("/api/selectpost/" + post);
  },
};
