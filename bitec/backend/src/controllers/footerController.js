const prisma = require("../config/prisma");

const getFooterLinks = async (req, res) => {
  const links =
    await prisma.footerLink.findMany();

  res.json(links);
};

const updateFooterLink = async (req, res) => {
  console.log(req.body);

  const { id } = req.params;

  const link =
    await prisma.footerLink.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });

  res.json(link);
};
module.exports = {
  getFooterLinks,
  updateFooterLink,
};