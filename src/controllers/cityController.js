const { StatusCodes } = require("http-status-codes");
const { CityModel } = require("../models/cityModel");
const { successResponse, errorResponse } = require("../utils/response");
const { citySchema } = require("../middleware/schema");

const createCity = async (req, res) => {
  try {
    const { error } = await citySchema.validate(req.body);
    if (error) {
      return errorResponse(
        res,
        "Something went wrong while creating city",
        StatusCodes.BAD_REQUEST,
        error.details[0].message,
      );
    }

    // Check if city already exist
    const existingCity = await CityModel.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (existingCity) {
      return errorResponse(
        res,
        "City already exists",
        StatusCodes.CONFLICT,
        "City name must be unique",
      );
    }

    const city = await CityModel.create(req.body);
    return successResponse(
      res,
      city,
      "City created successfully",
      StatusCodes.CREATED,
    );
  } catch (error) {
    return errorResponse(
      res,
      "Something went wrong while creating city",
      StatusCodes.INTERNAL_SERVER_ERROR,
      error.message,
    );
  }
};

const getCities = async (req, res) => {
  try {
    const city = await CityModel.findAll();
    return successResponse(
      res,
      city,
      "City data fetch successfully",
      StatusCodes.OK,
    );
  } catch (error) {
    return errorResponse(
      res,
      "Something went wrong while fetching city",
      StatusCodes.INTERNAL_SERVER_ERROR,
      error.message,
    );
  }
};

const deleteCity = async (req, res) => {
  try {
    const city = await CityModel.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!city) {
      return errorResponse(
        res,
        "The city you requested not found to delete",
        StatusCodes.NOT_FOUND,
        "No city found to delete",
      );
    }

    return successResponse(
      res,
      city,
      "City deleted successfully",
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

module.exports = { createCity, deleteCity, getCities };
