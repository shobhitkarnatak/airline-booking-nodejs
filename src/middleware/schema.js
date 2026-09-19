const joi = require("joi");

const airplaneSchema = joi.object({
  modelNumber: joi.string().min(3).max(30).required(),
  capacity: joi.number().min(50).max(1000).required(),
});

const citySchema = joi.object({
  name: joi.string().min(2).max(30).required(),
});

module.exports = { airplaneSchema, citySchema };
