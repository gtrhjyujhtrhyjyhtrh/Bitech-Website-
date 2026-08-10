const express = require("express");

const {
  createMessage,
  getMessages,
  deleteMessage,
} = require("../controllers/contactController");

const router = express.Router();

router.get("/", getMessages);
router.delete("/:id", deleteMessage);
router.post("/", createMessage);

module.exports = router;