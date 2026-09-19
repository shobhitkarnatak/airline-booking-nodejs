const joi = require("joi");

const airplaneSchema = joi.object({
  modelNumber: joi.string().min(3).max(30).required(),
  capacity: joi.number().min(50).max(1000).required(),
});

module.exports = { airplaneSchema };
