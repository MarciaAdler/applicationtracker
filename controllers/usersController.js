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
      role: req.body.role,
      password: req.body.password,
      company: req.body.company,
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
      order: [["dateApplied", "DESC"]],
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
    console.log("edit", req.body);
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
        active: true,
      },
      order: [["createdAt", "DESC"]],
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
  getSearch: function (req, res) {
    db.Search.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  getSearchApps: function (req, res) {
    console.log(req.params);
    db.Application.findAll({
      where: {
        SearchId: req.params.id,
      },
      include: [
        {
          model: db.Search,
          as: "Search",
        },
      ],
      order: [["dateApplied", "DESC"]],
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  refreshSelectedApp: function (req, res) {
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
  getInactiveSearches: function (req, res) {
    db.Search.findAll({
      where: {
        UserId: req.params.id,
        active: false,
      },
      order: [["createdAt", "DESC"]],
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  updateUser: function (req, res) {
    db.User.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        location: req.body.location,
        primaryRole: req.body.primaryRole,
        bio: req.body.bio,
        website: req.body.website,
        linkedIn: req.body.linkedIn,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        otherLink: req.body.otherLink,
        yearsExperience: req.body.yearsExperience,
      },
      {
        where: { id: req.body.id },
      }
    )
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  getMyInfo: function (req, res) {
    db.User.findOne({
      where: { id: req.params.id },
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  addPost: function (req, res) {
    db.BlogPost.create({
      title: req.body.title,
      post: req.body.post,
      UserId: req.body.userId,
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  getPosts: function (req, res) {
    db.BlogPost.findAll({
      include: [
        {
          model: db.User,
          as: "User",
        },
      ],
      order: [["createdAt", "DESC"]],
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
  selectPost: function (req, res) {
    db.BlogPost.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: db.User,
          as: "User",
        },
      ],
    })
      .then((dbModel) => res.json(dbModel))
      .catch(function (err) {
        res.status(401).json(err);
      });
  },
};
