const prisma = require("../config/prisma");

const getGalleryImages = async (req, res) => {
  try {
    const images =
      await prisma.galleryImage.findMany({
        include: {
          category: true,
        },

        orderBy: {
          uploadedAt: "desc",
        },
      });

    res.json(images);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery",
    });
  }
};

const uploadImage = async (req, res) => {
  try {
    const { categoryId } = req.body;

    const image =
      await prisma.galleryImage.create({
        data: {
          imageUrl:
            "/uploads/gallery/" +
            req.file.filename,

          categoryId: Number(categoryId),
        },
      });

    res.status(201).json(image);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to upload image",
    });
  }
};

const getImagesByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const images = await prisma.galleryImage.findMany({
      where: {
        category: {
          name: category,
        },
      },

      include: {
        category: true,
      },

      orderBy: {
        uploadedAt: "desc",
      },
    });

    res.json(images);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch category images",
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories =
      await prisma.galleryCategory.findMany({
        orderBy: {
          name: "asc",
        },
      });

    res.json(categories);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
    });
  }
};

const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.galleryImage.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete image",
    });
  }
};



module.exports = {
  getGalleryImages,
  getImagesByCategory,
  getCategories,
  uploadImage,
  deleteImage,
  
};