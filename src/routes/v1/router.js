const express = require("express");
const {
  createAirplane,
  getAirplane,
  getAirplaneById,
  deleteAirplane,
  updateAirplane,
} = require("../../controllers/airplaneController");
const { createCity } = require("../../controllers/cityController");
const router = express.Router();

// Airplane routes
router.post("/airplane/add", createAirplane);
router.get("/airplane/list", getAirplane);
router.get("/airplane/:id", getAirplaneById);
router.delete("/airplane/delete/:id", deleteAirplane);
router.patch("/airplane/update/:id", updateAirplane);

// City routes
router.post("/city/add", createCity);

module.exports = router;
