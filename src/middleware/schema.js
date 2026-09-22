const joi = require("joi");

const airplaneSchema = joi.object({
  modelNumber: joi.string().min(3).max(30).required(),
  capacity: joi.number().min(50).max(1000).required(),
});

const citySchema = joi.object({
  name: joi.string().min(2).max(30).required(),
});

const airportSchema = joi.object({
  name: joi.string().min(2).max(30).required(),
  code: joi.string().
  address:
  cityId:
});

module.exports = { airplaneSchema, citySchema };
