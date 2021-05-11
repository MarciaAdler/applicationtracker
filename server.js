require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
// const port = 8080;
const app = express();
// var http = require("http").createServer(app);
const Sequelize = require("sequelize");
var db = require("./models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const passport = require("passport");

const users = require("./routes/users");
const uploads = require("./uploads");
var session = require("express-session");
var compression = require("compression");

// app.use(cors());
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); //to access the files in public folder
// app.use(express.static(path.join(__dirname, "/client/build/")));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(fileUpload());

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(compression());
// Add routes, both API and view

// Define API routes here
// app.use(transit);

app.use(users);
app.use(uploads);
// app.use(uploads);
// create image file for profiles

// Send every other request to the React app
// Define any API routes before this runs
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ logging: false }).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
