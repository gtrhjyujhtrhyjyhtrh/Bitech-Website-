const express = require("express");

const upload = require(
  "../config/multerGallery"
);

const {
  getGalleryImages,
  getImagesByCategory,
  getCategories,
  uploadImage,
  deleteImage,
} = require("../controllers/galleryController");

const router = express.Router();

router.get("/", getGalleryImages);
router.get("/category/:category", getImagesByCategory);
router.get("/categories", getCategories);

router.post(
  "/upload",
  upload.single("image"),
  uploadImage
);
router.delete("/:id", deleteImage);

module.exports = router;