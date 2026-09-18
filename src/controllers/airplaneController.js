const { http } = require("winston");
const { AirplaneModel } = require("../models/airplaneModel");
const { airplaneSchema } = require("../middleware/airplaneSchema");
const { StatusCodes } = require("http-status-codes");
const { errorResponse, successResponse } = require("../utils/response");

const createAirplane = async (req, res) => {
  try {
    const { error } = await airplaneSchema.validate(req.body);
    if (error) {
      return errorResponse(
        res,
        "Something went wrong while creating airplane",
        StatusCodes.BAD_REQUEST,
        error.details[0].message,
      );
    }

    // Check if airplane already exist
    const existingModelNumber = await AirplaneModel.findOne({
      modelNumber: req.body.modelNumber,
    });

    if (existingModelNumber) {
      return errorResponse(
        res,
        "Alirplane already exists",
        StatusCodes.CONFLICT,
        "Model number must be unique",
      );
    }

    const airplane = await AirplaneModel.create({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return successResponse(
      res,
      airplane,
      "Airplane created successfully",
      StatusCodes.CREATED,
    );
  } catch (error) {
    return errorResponse(
      res,
      "Something went wrong while creating airplane",
      StatusCodes.INTERNAL_SERVER_ERROR,
      error.message,
    );
  }
};

const getAirplane = (req, res) => {};

const updateAirplane = (req, res) => {};

module.exports = {
  createAirplane,
  getAirplane,
  updateAirplane,
};
