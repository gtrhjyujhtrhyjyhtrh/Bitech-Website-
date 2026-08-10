const prisma = require("../config/prisma");

const getCareers = async (req, res) => {
  try {
    const careers = await prisma.career.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(careers);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch careers",
    });
  }
};

const getCareerById = async (req, res) => {
  try {
    const { id } = req.params;

    const career = await prisma.career.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!career) {
      return res.status(404).json({
        success: false,
        message: "Career not found",
      });
    }

    res.json(career);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch career",
    });
  }
};

const createCareer = async (req, res) => {
  try {
    const {
      title,
      description,
      departments,
      learningPoints,
      eligibility,
      location,
      applyEmail,
      whatsapp,
      employmentType,
      
    } = req.body;

    const career = await prisma.career.create({
      data: {
        title,
        description,
        departments,
        learningPoints,
        eligibility,
        location,
        applyEmail,
        whatsapp,
        employmentType,
        
      },
    });

    res.status(201).json(career);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create career",
    });
  }
};

const updateCareer = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      departments,
      learningPoints,
      eligibility,
      location,
      applyEmail,
      whatsapp,
      employmentType,
      status,
    } = req.body;

    const career = await prisma.career.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        description,
        departments,
        learningPoints,
        eligibility,
        location,
        applyEmail,
        whatsapp,
        employmentType,
        status,
      },
    });

    res.json(career);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update career",
    });
  }
};

async function deleteCareer(req, res) {
  try {
    const { id } = req.params;

    await prisma.career.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      success: true,
      message: "Career deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete career",
    });
  }
}

module.exports = {
  getCareers,
  getCareerById,
  createCareer,
  updateCareer,
  deleteCareer,
};