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
};
