const User = require("../models/user.model");

const train = async (req, res) => {
    try {
      const { user_id, user_name } = req.body;
  
      if (!user_id || !user_name) {
        return res.status(400).json({
          error: true,
          success: false,
          message: "user_id and user_name are required fields.",
        });
      }
  
      const userData = {
        user_id,
        user_name,
      };
  
      const cartDetails = new User(userData);
      await cartDetails.save();
  
      res.status(200).json({
        success: true,
        error: false,
        message: "Details added.",
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
