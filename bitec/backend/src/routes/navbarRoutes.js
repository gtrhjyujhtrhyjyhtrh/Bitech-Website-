const express = require("express");

const {
  getNavbarItems,
  updateNavbarItem,
} = require(
  "../controllers/navbarController"
);

const router = express.Router();

router.get("/", getNavbarItems);

router.put(
  "/:id",
  updateNavbarItem
);

module.exports = router;