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

router.route("/api/getsearches/:id").get(usersController.getSearches);

router.route("/api/getsearchid/:name").get(usersController.getSearchId);

router.route("/api/getsearch/:id").get(usersController.getSearch);

router.route("/api/getsearchapps/:id").get(usersController.getSearchApps);

router.route("/api/refreshapp/:id").get(usersController.refreshSelectedApp);

router
  .route("/api/inactivesearches/:id")
  .get(usersController.getInactiveSearches);

router.route("/api/updateuser").put(usersController.updateUser);

router.route("/api/getmyinfo/:id").get(usersController.getMyInfo);

router.route("/api/addpost").post(usersController.addPost);

router.route("/api/getposts").get(usersController.getPosts);

router.route("/api/selectpost/:id").get(usersController.selectPost);

router.route("/api/postcomment").post(usersController.postComment);
router.route("/api/getcomments/:id").get(usersController.getComments);
router
  .route("/api/changestatusinactive")
  .put(usersController.changeStatusInactive);
router.route("/api/changestatusactive").put(usersController.changeStatusActive);
router.route("api/getsearchstatus").get(usersController.getSearchStatus);
module.exports = router;
