const Train = require("../models/train.model");

const train = async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "fields are required!!",
      });
    }

    const trainData = {
      question,
      answer,
    };

    const trainDetails = new Train(trainData);
    await trainDetails.save();

    res.status(200).json({
      success: true,
      error: false,
      message: "Question answer added.",
    });
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
  train,
};
