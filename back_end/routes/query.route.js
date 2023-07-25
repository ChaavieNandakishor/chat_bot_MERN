const express = require("express");
const router = express.Router();
const queryControllers = require("../controllers/query.controller");

router.post("/", queryControllers.searchQuery);

module.exports = router;
