require("dotenv").config();const prisma = require("../config/prisma");

console.log(Object.keys(prisma));

async function seedNavbar() {
  await prisma.navbarItem.createMany({
    data: [
      {
        title: "Home",
        route: "/",
        position: 1,
      },
      {
        title: "About Us",
        route: "/about-us",
        position: 2,
      },
      {
        title: "Services",
        route: "/services",
        position: 3,
      },
      {
        title: "Life At",
        route: "/life-at",
        position: 4,
      },
      {
        title: "Careers",
        route: "/careers",
        position: 5,
      },
      {
        title: "Contact Us",
        route: "/contact-us",
        position: 6,
      },
    ],
  });

  console.log("Navbar seeded");
}

seedNavbar()
  .catch(console.error)
  .finally(() => prisma.$disconnect());