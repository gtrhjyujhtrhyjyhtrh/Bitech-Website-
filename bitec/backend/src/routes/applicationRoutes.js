const express = require("express");

const upload = require(
  "../middleware/uploadResume"
);

const {
  submitApplication,
  getApplications,
  deleteApplication,
} = require(
  "../controllers/applicationController"
);

const router = express.Router();

router.get("/", getApplications);

router.post(
  "/",
  upload.single("resume"),
  submitApplication
);

router.delete(
  "/:id",
  deleteApplication
);

module.exports = router;