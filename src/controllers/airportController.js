const { AirportModel } = require("../models");
const { successResponse, errorResponse } = require("../utils/response");

const createAirport = async (req, res) => {
  try {
    const airport = await AirportModel.create(req.body);
    return successResponse();
  } catch (error) {
    return errorResponse();
  }
};
module.exports = {
  createAirport,
};
