const Train = require("../models/train.model");

const searchQuery = async (req, res) => {
  const { question } = req.body;
  try {
    const answer = await Train.findOne({ question: question });
    if (!answer) {
      // Question not found
      return res.status(404).json({
        success: false,
        error: true,
        message: "Question not found.",
      });
    } else {
      return res.status(404).json({
        success: true,
        error: false,
        data: answer.answer,
      });
    }
  } catch (error) {
    console.log("error >>", error);
    res.status(500).json({
      success: false,
      error: true,
      message: "An error occurred while saving the user details.",
    });
  }
};

module.exports = {
  searchQuery,
};
