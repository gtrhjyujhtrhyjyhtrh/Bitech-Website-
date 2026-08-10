const express = require("express");

const {
  getCareers,
  getCareerById,
  createCareer,
  updateCareer,
  deleteCareer,
} = require("../controllers/careerController");

const router = express.Router();

router.get("/", getCareers);

router.get("/:id", getCareerById);

router.post("/", createCareer);

router.put("/:id", updateCareer);

router.delete("/:id", deleteCareer);

module.exports = router;