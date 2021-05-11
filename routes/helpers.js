const imageFilter = function (req, file, cb) {
  console.log("filefilter", file);
  // Accept files only
  if (!file.originalname.match(/\.(pdf|docx|doc)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};
exports.imageFilter = imageFilter;
