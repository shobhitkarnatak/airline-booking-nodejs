const express = require("express");
const {
  createAirplane,
  getAirplane,
  getAirplaneById,
  deleteAirplane,
} = require("../../controllers/airplaneController");
const router = express.Router();

router.post("/add-airplane", createAirplane);
router.get("/airplane-list", getAirplane);
router.get("/airplane/:id", getAirplaneById);
router.delete("/airplane/delete/:id", deleteAirplane);

module.exports = router;
