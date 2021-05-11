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
};
