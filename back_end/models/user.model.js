const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  user_id: { type: String },
  user_name: { type: String },
});

var userData = mongoose.model("user_tb", userSchema);
module.exports = userData;
