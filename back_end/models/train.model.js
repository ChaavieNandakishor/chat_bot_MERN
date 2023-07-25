const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const trainSchema = new Schema({
  question: { type: String },
  answer: { type: String },
});

var trainData = mongoose.model("train_tb", trainSchema);
module.exports = trainData;
