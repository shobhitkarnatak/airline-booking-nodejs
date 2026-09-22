const { AirplaneModel } = require("./airplaneModel");
const { AirportModel } = require("./airportModel");
const { CityModel } = require("./cityModel");

CityModel.hasMany(AirportModel, {
  foreignKey: "cityId",
});

AirportModel.belongsTo(CityModel, {
  foreignKey: "cityId",
});

module.exports = {
  AirplaneModel,
  CityModel,
  AirportModel,
};
