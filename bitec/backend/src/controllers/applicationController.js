const prisma = require("../config/prisma");

const submitApplication = async (
  req,
  res
) => {
  try {
    const {
      username,
      email,
      phone,
      coverLetter,
      careerId,
    } = req.body;

    const application =
      await prisma.jobApplication.create({
        data: {
          username,
          email,
          phone,
          coverLetter,
          resumeFile: req.file.filename,
          careerId: careerId
            ? Number(careerId)
            : null,
        },
      });

    res.status(201).json({
      success: true,
      application,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to submit application",
    });
  }
};

const getApplications = async (req, res) => {
  try {
    const applications =
      await prisma.jobApplication.findMany({
        orderBy: {
          appliedAt: "desc",
        },
      });

      const deleteApplication = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    await prisma.jobApplication.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      success: true,
      message:
        "Application deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to delete application",
    });
  }
};

    res.json(applications);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
    });
  }
};

const deleteApplication = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    await prisma.jobApplication.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      success: true,
      message:
        "Application deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to delete application",
    });
  }
};



module.exports = {
  submitApplication,
  getApplications,
  deleteApplication,
};