const prisma = require("../config/prisma");

const createMessage = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;

    const contactMessage =
      await prisma.contactMessage.create({
        data: {
          name,
          email,
          phone,
          subject,
          message,
        },
      });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contactMessage,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages =
      await prisma.contactMessage.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

    res.json(messages);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch messages",
    });
  }
};

const deleteMessage = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    await prisma.contactMessage.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      success: true,
      message:
        "Message deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to delete message",
    });
  }
};

module.exports = {
  createMessage,
  getMessages,
  deleteMessage,
};                            