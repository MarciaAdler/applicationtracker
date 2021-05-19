const router = require("express").Router();

const cors = require("cors");
const fileUpload = require("express-fileupload");
const helpers = require("./routes/helpers");

router.route("/api/uploaddescription").post((req, res) => {
  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" });
  }
  // accessing the file
  const myFile = req.files.myFile;
  //  mv() method places the file inside public directory
  myFile.mv(
    `${__dirname}/client/public/jobdescriptions/${req.body.userId}-${myFile.name}`,
    function (err) {
      if (err) {
        console.log(err);
        return res.status(500).send({ msg: "Error occured" });
      }
      // returning the response with file path and name
      return res.send(req.files.myFile);
    }
  );
});

module.exports = router;
