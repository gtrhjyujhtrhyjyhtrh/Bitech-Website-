const express = require("express");

const {
  getFooterLinks,
  updateFooterLink,
} = require(
  "../controllers/footerController"
);

const router = express.Router();

router.get("/", getFooterLinks);

router.put("/:id", updateFooterLink);

module.exports = router;