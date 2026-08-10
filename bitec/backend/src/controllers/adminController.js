const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const admin = await prisma.admin.findUnique({
  where: {
    email,
  },
});

console.log("ADMIN FOUND:", admin);

if (!admin) {
  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
}

const passwordMatch = await bcrypt.compare(
  password,
  admin.password
);

console.log("PASSWORD MATCH:", passwordMatch);

if (!passwordMatch) {
  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
}
    const token = jwt.sign(
      {
        adminId: admin.id,
      },
      "bitech-secret-key",
      {
        expiresIn: "1d",
      }
    );

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};

module.exports = {
  loginAdmin,
};