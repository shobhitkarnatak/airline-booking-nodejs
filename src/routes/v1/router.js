const express = require("express");
const {
  createAirplane,
  getAirplane,
  getAirplaneById,
  deleteAirplane,
  updateAirplane,
} = require("../../controllers/airplaneController");
const {
  createCity,
  deleteCity,
  getCities,
} = require("../../controllers/cityController");
const router = express.Router();

//
router.post("/airplane/add", createAirplane);
router.get("/airplane/list", getAirplane);
router.get("/airplane/:id", getAirplaneById);
router.delete("/airplane/delete/:id", deleteAirplane);
router.patch("/airplane/update/:id", updateAirplane);

//
router.post("/city/add", createCity);
router.delete("/city/delete/:id", deleteCity);
router.get("/city/list", getCities);

module.exports = router;
