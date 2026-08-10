const prisma = require("../config/prisma");

const getNavbarItems = async (req, res) => {
  try {
    const items =
      await prisma.navbarItem.findMany({
        orderBy: {
          position: "asc",
        },
      });

    res.json(items);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch navbar items",
    });
  }
};

const updateNavbarItem = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      route,
      position,
      visible,
    } = req.body;

    const item =
      await prisma.navbarItem.update({
        where: {
          id: Number(id),
        },

        data: {
          title,
          route,
          position,
          visible,
        },
      });

    res.json(item);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update navbar item",
    });
  }
};

module.exports = {
  getNavbarItems,
  updateNavbarItem,
};