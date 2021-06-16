const router = require("express").Router();
const passport = require("../config/passport");
const usersController = require("../controllers/usersController");
const db = require("../models");

router.route("/api/signup").post(usersController.createUser);

router.post(
  "/api/login",
  passport.authenticate("local"),
  usersController.findOne
);

router.route("/api/addapp").post(usersController.addApp);

router.route("/api/getmyapps/:id").get(usersController.getMyApps);

router.route("/api/selectapp/:id").get(usersController.selectApp);

router.route("/api/editapp").put(usersController.editApp);

router.route("/api/addsearch").post(usersController.addSearch);

module.exports = router;
