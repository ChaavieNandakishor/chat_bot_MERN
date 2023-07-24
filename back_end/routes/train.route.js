const express = require("express");
const router = express.Router();
const traincontrollers = require("../controllers/train.controller");

router.post("/", traincontrollers.train);

module.exports = router;
