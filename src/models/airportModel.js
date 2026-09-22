const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");
const { CityModel } = require("./cityModel");

const AirportModel = sequelize.define(
  "airport",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CityModel, // table name
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  },
);

module.exports = { AirportModel };
