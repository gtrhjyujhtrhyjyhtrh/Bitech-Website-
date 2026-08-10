require("dotenv").config();
const express = require("express");
const cors = require("cors");

const careerRoutes = require("./routes/careerRoutes");
const prisma = require("./config/prisma");
const applicationRoutes = require(
  "./routes/applicationRoutes"
);
const contactRoutes = require("./routes/contactRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const path = require("path");
const adminRoutes = require("./routes/adminRoutes");
const navbarRoutes = require(
  "./routes/navbarRoutes"
);
const footerRoutes =
  require("./routes/footerRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/admin", adminRoutes);
app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"))
);
app.use(
  "/api/navbar",
  navbarRoutes
);
app.use(
  "/api/footer",
  footerRoutes
);
app.get("/test-db", async (req, res) => {
  const careers = await prisma.career.findMany();

  res.json(careers);
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend Running",
  });
});

app.use("/api/careers", careerRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});