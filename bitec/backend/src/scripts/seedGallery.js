require("dotenv").config();
console.log(process.env.DATABASE_URL);

const fs = require("fs");
const path = require("path");
const prisma = require("../config/prisma");

const sourceFolder =
  "C:/Bitec/bitec/src/MyComponent";

const uploadFolder =
  path.join(__dirname, "../../uploads/gallery");

const categories = {
  Activities: {
    id: 1,
    files: [
      "Rd1.png",
      "Rd2.png",
      "Rd3.png",
      "Rd4.png",
      "Rd5.png",
      "Rd6.png",
      "Rd7.png",
      "Rd8.png",
    ],
  },

  Events: {
    id: 2,
    files: [
  "Rd9.webp",
  "Rd10.webp",
  "Rd11.jpg",
  "Rd12.webp",
  "Rd13.webp",
  "Rd14.webp",
  "Rd15.webp",
  "Rd16.webp",
],
  },

  Celebrations: {
    id: 3,
    files: [
      "Rd17.png",
      "Rd18.png",
      "Rd19.png",
      "Rd20.png",
      "Rd21.webp",
      "Rd22.webp",
      "Rd23.webp",
      "Rd24.png",
    ],
  },

  "Google Meetup": {
    id: 4,
    files: [
      "Rd25.png",
      "Rd26.webp",
      "Rd27.webp",
      "Rd28.webp",
      "Rd29.webp",
      "Rd30.png",
    ],
  },
};

async function seedGallery() {
  try {
    for (const category of Object.values(
      categories
    )) {
      for (const fileName of category.files) {
        const sourcePath = path.join(
          sourceFolder,
          fileName
        );

        const newName =
          Date.now() +
          "-" +
          Math.round(Math.random() * 1e9) +
          path.extname(fileName);

        const destinationPath =
          path.join(uploadFolder, newName);

        fs.copyFileSync(
          sourcePath,
          destinationPath
        );

        await prisma.galleryImage.create({
          data: {
            imageUrl:
              "/uploads/gallery/" + newName,

            categoryId: category.id,
          },
        });

        console.log(
          "Imported:",
          fileName
        );
      }
    }

    console.log(
      "Gallery seed completed."
    );
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedGallery();