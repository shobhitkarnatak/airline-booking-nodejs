const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const CityModel = sequelize.define(
  "cities",
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
  },
  {
    freezeTableName: true,
    timestamps: true,
  },
);

module.exports = { CityModel };
