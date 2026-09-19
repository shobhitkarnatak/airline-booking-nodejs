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
      where: {
        modelNumber: req.body.modelNumber,
      },
    });

    if (existingModelNumber) {
      return errorResponse(
        res,
        "Airplane already exists",
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

const getAirplane = async (req, res) => {
  try {
    const airplane = await AirplaneModel.findAll();
    return successResponse(
      res,
      airplane,
      "Airplane data fetch successfully",
      StatusCodes.OK,
    );
  } catch (error) {
    return errorResponse(
      res,
      "Something went wrong while fetching airplane",
      StatusCodes.INTERNAL_SERVER_ERROR,
      error.message,
    );
  }
};

const getAirplaneById = async (req, res) => {
  try {
    const airplane = await AirplaneModel.findByPk(req.params.id);
    if (!airplane) {
      return errorResponse(
        res,
        "The airplane you requested not found",
        StatusCodes.NOT_FOUND,
        "No airplane found",
      );
    }
    return successResponse(
      res,
      airplane,
      "Airplane fetched successfully",
      StatusCodes.OK,
    );
  } catch (error) {
    return errorResponse(
      res,
      "Something went wrong while fetching airplane",
      StatusCodes.INTERNAL_SERVER_ERROR,
      error.message,
    );
  }
};

const deleteAirplane = async (req, res) => {
  console.log(req.params.id);
  try {
    const airplane = await AirplaneModel.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!airplane) {
      return errorResponse(
        res,
        "The airplane you requested not found to delete",
        StatusCodes.NOT_FOUND,
        "No airplane found to delete",
      );
    }

    return successResponse(
      res,
      airplane,
      "Airplane deleted successfully",
      StatusCodes.OK,
    );
  } catch (error) {
    return errorResponse(
      res,
      "Something went wrong while deleting airplane",
      StatusCodes.INTERNAL_SERVER_ERROR,
      error.message,
    );
  }
};

module.exports = {
  createAirplane,
  getAirplane,
  getAirplaneById,
  deleteAirplane,
};
