const express = require('express');
const { createAirplane } = require('../../controllers/airplaneController');
const router = express.Router();

router.post("/add-airplane", createAirplane)

module.exports = router