require("dotenv").config();
console.log(process.env.DATABASE_URL);

console.log(Object.keys(prisma));
const prisma = require("../config/prisma");

async function seed() {
  await prisma.footerLink.createMany({
    data: [
      {
        title: "Home",
        route: "/",
        section: "useful",
      },
      {
        title: "About Us",
        route: "/about-us",
        section: "useful",
      },
      {
        title: "Services",
        route: "/services",
        section: "useful",
      },
      {
        title: "Careers",
        route: "/careers",
        section: "useful",
      },
      {
        title: "Life At",
        route: "/life-at",
        section: "useful",
      },

      {
        title: "App Development",
        route: "/services",
        section: "services",
      },
      {
        title: "iOS Development",
        route: "/services",
        section: "services",
      },
      {
        title: "Web Development",
        route: "/services",
        section: "services",
      },
      {
        title: "Game Development",
        route: "/services",
        section: "services",
      },
      {
        title: "UI/UX Design",
        route: "/services",
        section: "services",
      },
    ],
  });

  console.log("Footer seeded");
}

seed();