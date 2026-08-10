require("dotenv").config();

const bcrypt = require("bcryptjs");

const prisma = require("../config/prisma");



async function createAdmin() {
  try {
    const hashedPassword =
      await bcrypt.hash("123456", 10);

    const admin =
      await prisma.admin.create({
        data: {
          email: "admin@bitech.com",
          password: hashedPassword,
        },
      });

    console.log(
      "Admin created successfully:"
    );

    console.log(admin);

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}

createAdmin();