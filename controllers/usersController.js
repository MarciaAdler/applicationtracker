const db = require("../models");
var fs = require("fs");
const { Op } = require("sequelize");
const { Sequelize } = require("sequelize");

module.exports = {
  createUser: function (req, res) {
    console.log(req.body);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,

      password: req.body.password,
    })
      .then(function () {
        res.json(req.body);
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  findOne: function (req, res) {
    db.User.findOne({
      where: {
        username: req.body.username,
      },
    })
      .then(function (user) {
        res.json(user);
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  addApp: function (req, res) {
    db.Application.create({
      companyName: req.body.companyName,
      role: req.body.role,
      source: req.body.source,
      applicationLink: req.body.applicationLink,
      jobDescription: req.body.jobDescription,
      notes: req.body.notes,
      dateApplied: req.body.dateApplied,
      UserId: req.body.userId,
    })
      .then(function (user) {
        res.json(user);
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  getMyApps: function (req, res) {
    console.log(req.params);
    db.Application.findAll({
      where: {
        UserId: req.params.id,
      },
      order: [["createdAt", "DESC"]],
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
};
