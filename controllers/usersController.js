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
    console.log(req.body);
    db.Application.create({
      companyName: req.body.companyName,
      role: req.body.role,
      source: req.body.source,
      applicationLink: req.body.applicationLink,
      jobDescription: req.body.jobDescription,
      notes: req.body.notes,
      dateApplied: req.body.dateApplied,
      SearchId: req.body.SearchId,
      UserId: req.body.UserId,
    })
      .then(function (user) {
        res.json(user);
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  getMyApps: function (req, res) {
    db.Application.findAll({
      where: {
        UserId: req.params.id,
      },
      include: [
        {
          model: db.Search,
          as: "Search",
        },
      ],
      order: [["createdAt", "DESC"]],
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  selectApp: function (req, res) {
    console.log(req.params);
    db.Application.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: db.Search,
          as: "Search",
        },
      ],
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  editApp: function (req, res) {
    db.Application.update(
      {
        companyName: req.body.companyName,
        role: req.body.role,
        applicationLink: req.body.applicationLink,
        source: req.body.source,
        notes: req.body.notes,
        status: req.body.status,
      },
      { where: { id: req.body.id } }
    )
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  addSearch: function (req, res) {
    db.Search.create({
      searchName: req.body.name,
      UserId: req.body.userId,
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  getSearches: function (req, res) {
    db.Search.findAll({
      where: {
        UserId: req.params.id,
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  getSearchId: function (req, res) {
    console.log(req.params);
    db.Search.findOne({
      where: {
        searchName: req.params.name,
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
};
